import styles from "./presentation.module.css";

export function SignalMark({ label = "SYSTEM / SIGNAL" }: { label?: string }) {
  return (
    <div className={styles.signalMark} aria-hidden="true">
      <span className={styles.signalOrbit} />
      <span className={styles.signalCore} />
      <small>{label}</small>
    </div>
  );
}

export function SystemGraph({ nodes }: { nodes: string[] }) {
  return (
    <div className={styles.systemGraph} aria-label={`System relationships: ${nodes.join(", ")}`}>
      <svg viewBox="0 0 720 430" role="img" aria-hidden="true">
        <path className={styles.graphPath} d="M115 95 C250 95 235 205 360 205 S485 92 610 92" />
        <path className={styles.graphPath} d="M115 335 C250 335 235 205 360 205 S485 338 610 338" />
        <path className={styles.graphPathMuted} d="M115 95 L115 335 M610 92 L610 338" />
        <circle className={styles.graphNode} cx="115" cy="95" r="8" />
        <circle className={styles.graphNode} cx="115" cy="335" r="8" />
        <circle className={styles.graphNodeCore} cx="360" cy="205" r="13" />
        <circle className={styles.graphNode} cx="610" cy="92" r="8" />
        <circle className={styles.graphNode} cx="610" cy="338" r="8" />
      </svg>
      {nodes.slice(0, 5).map((node, index) => (
        <span key={node} className={styles[`graphLabel${index}`]}>{node}</span>
      ))}
    </div>
  );
}

export function QuantumCircuit() {
  return (
    <div className={styles.quantumCircuit} aria-label="Conceptual four-line quantum circuit">
      {[0, 1, 2, 3].map((wire) => (
        <div className={styles.quantumWire} key={wire}>
          <span>|0⟩</span>
          <i />
          <b>H</b>
          <i />
          {wire % 2 === 0 ? <b>Rᵧ</b> : <em>●</em>}
          <i />
          <strong />
        </div>
      ))}
      <div className={styles.circuitCaption}>
        <span>STATE</span><span>TRANSFORM</span><span>INTERFERE</span><span>MEASURE</span>
      </div>
    </div>
  );
}

export function ComparisonPlot() {
  return (
    <div className={styles.comparisonPlot} aria-label="Conceptual comparison of classical and quantum-kernel evaluation">
      <div className={styles.plotAxis}><span>evaluation</span><i /></div>
      <div className={styles.plotLineClassical}>
        <span>SVM</span><i /><b />
      </div>
      <div className={styles.plotLineQuantum}>
        <span>QSVM</span><i /><b />
      </div>
      <p>Same reduced feature space.<br />Different kernel representation.</p>
    </div>
  );
}
