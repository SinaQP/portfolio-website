import assert from "node:assert/strict";

// Start the site first, then run: node scripts/check-site.mjs
// SITE_TEST_URL selects the running server. SITE_CANONICAL_URL can override the
// expected public origin independently of the local preview address.
const testUrl = new URL(process.env.SITE_TEST_URL || "http://127.0.0.1:3000");
const configuredCanonical =
  process.env.SITE_CANONICAL_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://sina-qasempour-portfolio-website.vercel.app";
const canonicalUrl = new URL(
  configuredCanonical.startsWith("http")
    ? configuredCanonical
    : `https://${configuredCanonical}`,
);
const routes = [
  "/",
  "/about",
  "/research",
  "/presentation",
  "/presentation/fa",
  "/work",
  "/work/rahtal",
  "/work/danobin",
  "/work/zaraamad",
  "/work/zarvand",
  "/work/tireban",
  "/research/svm-vs-qsvm",
];
const resumePath = "/Sina-Qasempour-Resume.pdf";
const localLinks = new Set();
let fragmentCount = 0;

function decodeEntities(value) {
  return value.replace(
    /&(#x[\da-f]+|#\d+|amp|quot|apos|lt|gt);/gi,
    (entity, name) => {
      if (name.startsWith("#")) {
        const hexadecimal = name[1].toLowerCase() === "x";
        return String.fromCodePoint(
          Number.parseInt(
            name.slice(hexadecimal ? 2 : 1),
            hexadecimal ? 16 : 10,
          ),
        );
      }
      return { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">" }[
        name.toLowerCase()
      ];
    },
  );
}

function attributes(tag) {
  return Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)].map(
      ([, name, doubleQuoted, singleQuoted]) => [
        name.toLowerCase(),
        decodeEntities(doubleQuoted ?? singleQuoted),
      ],
    ),
  );
}

async function request(path, expectedStatus = 200) {
  const response = await fetch(new URL(path, testUrl), {
    signal: AbortSignal.timeout(60_000),
    redirect: "manual",
  });
  assert.equal(
    response.status,
    expectedStatus,
    `${path}: expected HTTP ${expectedStatus}, received ${response.status}`,
  );
  return response;
}

// Two requests at a time keeps the check usable against a compiling dev server.
async function checkInPairs(items, check) {
  for (let index = 0; index < items.length; index += 2) {
    await Promise.all(items.slice(index, index + 2).map(check));
  }
}

async function checkPage(route) {
  const response = await request(route);
  assert.match(
    response.headers.get("content-type") || "",
    /text\/html/i,
    `${route}: expected an HTML document`,
  );
  // Exclude embedded hydration payloads before inspecting the actual markup.
  const html = (await response.text()).replace(
    /<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi,
    "",
  );
  // SVG tooltips also use <title>; only the HTML document title is metadata.
  const documentMarkup = html.replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, "");
  const titles = [
    ...documentMarkup.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi),
  ];
  assert.equal(titles.length, 1, `${route}: expected one document title`);
  const title = decodeEntities(titles[0][1]);
  assert.match(title, /Sina Qasempour/, `${route}: title must identify Sina`);
  assert.doesNotMatch(
    title,
    /\bAI\s+Engineer\b/i,
    `${route}: stale AI branding`,
  );
  if (route === "/") {
    assert.match(
      title,
      /Software Engineer/,
      "Home title must lead with engineering",
    );
  }
  assert.equal(
    [...html.matchAll(/<h1\b/gi)].length,
    1,
    `${route}: expected one primary heading`,
  );

  const meta = [...html.matchAll(/<meta\b[^>]*>/gi)].map(([tag]) =>
    attributes(tag),
  );
  const description = meta.find((item) => item.name === "description")?.content;
  assert.ok(description?.trim(), `${route}: missing search description`);
  assert.doesNotMatch(
    description,
    /\bAI\s+Engineer\b/i,
    `${route}: stale description`,
  );
  const canonical = [...html.matchAll(/<link\b[^>]*>/gi)]
    .map(([tag]) => attributes(tag))
    .filter((item) => item.rel?.split(/\s+/).includes("canonical"));
  assert.equal(canonical.length, 1, `${route}: expected one canonical link`);
  const expectedCanonical = new URL(route, canonicalUrl).href;
  assert.ok(canonical[0].href, `${route}: canonical link has no URL`);
  assert.equal(
    new URL(canonical[0].href).href,
    expectedCanonical,
    `${route}: incorrect canonical`,
  );
  if (route === "/presentation" || route === "/presentation/fa") {
    const alternates = [...html.matchAll(/<link\b[^>]*>/gi)]
      .map(([tag]) => attributes(tag))
      .filter((item) => item.rel?.split(/\s+/).includes("alternate"));
    for (const [language, path] of [
      ["en", "/presentation"],
      ["fa-IR", "/presentation/fa"],
    ]) {
      const alternate = alternates.find((item) => item.hreflang === language);
      assert.ok(alternate?.href, `${route}: missing ${language} alternate`);
      assert.equal(
        new URL(alternate.href).href,
        new URL(path, canonicalUrl).href,
        `${route}: incorrect ${language} alternate`,
      );
    }
  }
  if (route === "/presentation/fa") {
    assert.match(html, /lang="fa-IR"/i, `${route}: missing Persian language context`);
    assert.match(html, /dir="rtl"/i, `${route}: missing RTL direction context`);
  }
  const socialUrl = meta.find((item) => item.property === "og:url")?.content;
  assert.ok(socialUrl, `${route}: missing social URL`);
  assert.equal(
    new URL(socialUrl).href,
    expectedCanonical,
    `${route}: social URL must match the canonical`,
  );
  const robots = meta.find((item) => item.name === "robots")?.content || "";
  assert.doesNotMatch(
    robots,
    /\bnoindex\b/i,
    `${route}: public page is noindex`,
  );

  const documentUrl = new URL(route, testUrl);
  const targets = new Set(
    [...html.matchAll(/<[a-z][^>]*>/gi)].flatMap(([tag]) => {
      const item = attributes(tag);
      return [item.id, /^<a\b/i.test(tag) ? item.name : undefined].filter(
        Boolean,
      );
    }),
  );
  for (const [tag] of html.matchAll(/<a\b[^>]*>/gi)) {
    const href = attributes(tag).href;
    if (!href) continue;
    const link = new URL(href, documentUrl);
    if (link.origin !== testUrl.origin) continue;
    localLinks.add(`${link.pathname}${link.search}`);
    if (
      link.pathname === documentUrl.pathname &&
      link.search === documentUrl.search &&
      link.hash &&
      !link.hash.startsWith("#:~:text=")
    ) {
      const target = decodeURIComponent(link.hash.slice(1));
      assert.ok(
        targets.has(target),
        `${route}: missing fragment target ${link.hash}`,
      );
      fragmentCount += 1;
    }
  }
}

async function main() {
  await checkInPairs(routes, checkPage);

  const sitemap = await (await request("/sitemap.xml")).text();
  const locations = new Set(
    [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, location]) =>
      decodeEntities(location),
    ),
  );
  for (const route of routes) {
    assert.ok(
      locations.has(new URL(route, canonicalUrl).href),
      `Sitemap omits ${route}`,
    );
  }
  const robots = await (await request("/robots.txt")).text();
  assert.ok(
    robots
      .split(/\r?\n/)
      .some(
        (line) =>
          line.trim() ===
          `Sitemap: ${new URL("/sitemap.xml", canonicalUrl).href}`,
      ),
    "robots.txt must reference the canonical sitemap",
  );

  await checkInPairs(
    [
      {
        path: resumePath,
        type: /application\/pdf/i,
        signature: Buffer.from("%PDF-"),
      },
      {
        path: "/opengraph-image",
        type: /image\/png/i,
        signature: Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
      },
    ],
    async ({ path, type, signature }) => {
      const response = await request(path);
      assert.match(
        response.headers.get("content-type") || "",
        type,
        `${path}: wrong media type`,
      );
      const body = Buffer.from(await response.arrayBuffer());
      assert.ok(
        body.subarray(0, signature.length).equals(signature),
        `${path}: invalid file signature`,
      );
    },
  );

  for (const [oldPath, destination] of [
    ["/journey", "/about#journey"],
    ["/stack", "/about#stack"],
    ["/lab", "/research"],
    ["/open-source", "/work#open-source"],
    ["/work/svm-vs-qsvm", "/research/svm-vs-qsvm"],
    ["/Peresentioan", "/presentation"],
  ]) {
    const response = await request(oldPath, 308);
    assert.equal(
      response.headers.get("location"),
      destination,
      `Redirect for ${oldPath}`,
    );
  }
  const alreadyChecked = new Set([...routes, resumePath]);
  const additionalLinks = [...localLinks].filter(
    (path) => !alreadyChecked.has(path),
  );
  await checkInPairs(additionalLinks, async (path) => {
    const response = await request(path);
    await response.arrayBuffer();
  });
  await checkInPairs(
    ["/__portfolio_smoke_missing__", "/work/__portfolio_smoke_missing__"],
    async (path) => {
      const response = await request(path, 404);
      await response.arrayBuffer();
    },
  );

  console.log(
    `PASS: ${routes.length} pages and SEO, ${localLinks.size} internal destinations, ${fragmentCount} local fragments, sitemap/robots, PDF/PNG assets, and both 404 routes.`,
  );
}

main().catch((error) => {
  console.error(`FAIL: ${error.message}`);
  process.exitCode = 1;
});
