import { siteContent } from "@/data/site-content";
export function ComputingVisual({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      className="computing-visual"
      viewBox="0 0 540 360"
      role="img"
      aria-label={siteContent.circuit.title}
    >
      <title>{siteContent.circuit.title}</title>
      <desc>{siteContent.circuit.description}</desc>
      <g fill="none" stroke="currentColor" strokeWidth="1">
        {[90, 180, 270].map((y) => (
          <path key={y} d={`M40 ${y} H500`} opacity=".12" />
        ))}
        {[90, 270, 450].map((x) => (
          <path key={x} d={`M${x} 50 V310`} opacity=".12" />
        ))}
        <path d="M55 145 H485" stroke="var(--accent)" />
        <rect
          x="160"
          y="115"
          width="60"
          height="60"
          fill="var(--bg)"
          stroke="var(--accent)"
        />
        <rect
          x="320"
          y="115"
          width="60"
          height="60"
          fill="var(--bg)"
          stroke="var(--accent)"
        />
        <path
          d="M90 250 V210 M270 250 V222 M450 250 V210"
          stroke="var(--accent)"
          strokeWidth="6"
        />
        <path d="M288 250 V222" stroke="var(--accent)" strokeWidth="6" />
        <path d="M65 251 H118 M248 251 H310 M425 251 H478" opacity=".5" />
      </g>
      <g
        fill="var(--text)"
        textAnchor="middle"
        fontFamily="var(--font-code)"
        fontSize="22"
      >
        <text x="80" y="126">
          |0⟩
        </text>
        <text x="190" y="153">
          H
        </text>
        <text x="270" y="126">
          |+⟩
        </text>
        <text x="350" y="153">
          H
        </text>
        <text x="458" y="126">
          |0⟩
        </text>
      </g>
      <g
        fill="var(--muted)"
        textAnchor="middle"
        fontFamily="var(--font-code)"
        fontSize="11"
      >
        <text x="90" y="282">
          INITIAL STATE
        </text>
        <text x="279" y="282">
          SUPERPOSITION
        </text>
        <text x="450" y="282">
          INITIAL STATE
        </text>
        {!compact && (
          <text x="270" y="330">
            H² = I · AMPLITUDES INTERFERE
          </text>
        )}
      </g>
    </svg>
  );
}
