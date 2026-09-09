// A deterministic parametric surface, rendered on the server without WebGL.
export function TorusVisual() {
  function point(u: number, v: number) {
    const radius = 132 + 53 * Math.cos(v);
    const x = radius * Math.cos(u);
    const y = radius * Math.sin(u);
    const z = 53 * Math.sin(v);
    const tilt = 0.88;
    const yy = y * Math.cos(tilt) - z * Math.sin(tilt);
    const zz = y * Math.sin(tilt) + z * Math.cos(tilt);
    const roll = -0.48;
    return {
      x: 270 + x * Math.cos(roll) - yy * Math.sin(roll),
      y: 230 + x * Math.sin(roll) + yy * Math.cos(roll),
      depth: zz,
    };
  }
  const lines = Array.from({ length: 62 }, (_, i) => {
    const around = i < 38;
    const fixed = ((around ? i : i - 38) / (around ? 38 : 24)) * Math.PI * 2;
    const points = Array.from({ length: 101 }, (_, j) => {
      const angle = (j / 100) * Math.PI * 2;
      return point(around ? fixed : angle, around ? angle : fixed);
    });
    return {
      path: points.map((p, j) => `${j ? "L" : "M"}${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(" "),
      depth: points.reduce((total, p) => total + p.depth, 0) / points.length,
    };
  }).sort((a, b) => a.depth - b.depth);
  return <svg className="computing-visual torus-visual" viewBox="0 0 540 460" aria-hidden="true">
    {lines.map((line, i) => <path key={i} d={line.path} fill="none" stroke="currentColor" strokeWidth="0.7" opacity={0.18 + ((line.depth + 150) / 300) * 0.5} />)}
  </svg>;
}
