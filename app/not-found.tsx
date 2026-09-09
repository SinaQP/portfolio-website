import Link from "next/link";
export default function NotFound() {
  return (
    <div className="shell not-found">
      <p className="eyebrow">404 / Page not found</p>
      <h1>A path yet to be built.</h1>
      <p>This page doesn’t exist. The engineering work is one click away.</p>
      <Link href="/work" className="button button-primary">
        Explore the work ↗
      </Link>
    </div>
  );
}
