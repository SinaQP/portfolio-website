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

export function SystemGraph({ nodes, ariaLabel = "System relationships" }: { nodes: string[]; ariaLabel?: string }) {
  return (
    <div className={styles.systemGraph} aria-label={`${ariaLabel}: ${nodes.join(", ")}`}>
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

export function QuantumCircuit({ locale = "en" }: { locale?: "en" | "fa" }) {
  const captions = locale === "fa" ? ["شروع", "تغییر", "تداخل", "اندازه‌گیری"] : ["STATE", "TRANSFORM", "INTERFERE", "MEASURE"];
  return (
    <div className={styles.quantumCircuit} aria-label={locale === "fa" ? "یک مدار کوانتومی ساده با چهار خط" : "Conceptual four-line quantum circuit"} dir="ltr">
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
        {captions.map((caption) => <span key={caption} dir={locale === "fa" ? "rtl" : "ltr"}>{caption}</span>)}
      </div>
    </div>
  );
}

export function ComparisonPlot({ locale = "en" }: { locale?: "en" | "fa" }) {
  return (
    <div className={styles.comparisonPlot} aria-label={locale === "fa" ? "مقایسه‌ی نتیجه‌ی مدل کلاسیک و کرنل کوانتومی" : "Conceptual comparison of classical and quantum-kernel evaluation"} dir="ltr">
      <div className={styles.plotAxis}><span>{locale === "fa" ? "نتیجه" : "evaluation"}</span><i /></div>
      <div className={styles.plotLineClassical}>
        <span>SVM</span><i /><b />
      </div>
      <div className={styles.plotLineQuantum}>
        <span>QSVM</span><i /><b />
      </div>
      <p dir={locale === "fa" ? "rtl" : "ltr"}>{locale === "fa" ? <>دیتای یکسان.<br />دو روش متفاوت برای ساخت کرنل.</> : <>Same reduced feature space.<br />Different kernel representation.</>}</p>
    </div>
  );
}
