import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { presentationData, presentationSlides } from "@/data/presentation";
import { Eyebrow, PresentationSlide } from "./presentation-slide";
import { ComparisonPlot, QuantumCircuit, SignalMark, SystemGraph } from "./presentation-visuals";
import styles from "./presentation.module.css";

export function PresentationSlides({ activeIndex }: { activeIndex: number }) {
  return presentationSlides.map((slide, index) => (
    <PresentationSlide
      key={slide.id}
      id={slide.id}
      chapter={slide.chapter}
      index={index}
      active={activeIndex === index}
      tone={index === 8 ? "light" : index === 12 ? "signal" : "dark"}
    >
      <SlideContent index={index} />
    </PresentationSlide>
  ));
}

function SlideContent({ index }: { index: number }) {
  const { rahtal, danobin, zaraamad, zarvand, tireban, research, researchProject } = presentationData;

  switch (index) {
    case 0:
      return (
        <div className={styles.introLayout}>
          <div className={styles.introCopy}>
            <Eyebrow>{profile.name} / Professional narrative</Eyebrow>
            <h1>ENGINEER<span>.</span></h1>
            <p className={styles.introStatement}>Building systems.<br />Taking ownership.<br /><span>Exploring what comes next.</span></p>
            <p className={styles.introExperience}>{profile.introduction}</p>
            <button className={styles.beginCue} data-presentation-next>
              Begin <ArrowDown size={16} aria-hidden="true" />
            </button>
          </div>
          <figure className={styles.introPortrait}>
            <Image
              src="/profile-picture.png"
              alt="Portrait of Sina Qasempour"
              fill
              priority
              sizes="(max-width: 700px) 72vw, 42vw"
            />
            <span aria-hidden="true">SQ / 2026</span>
          </figure>
          <SignalMark label="ENGINEERING / CONTINUUM" />
        </div>
      );
    case 1:
      return (
        <div className={styles.originLayout}>
          <div>
            <Eyebrow>01 / Starting point</Eyebrow>
            <h2>Software was<br />the starting point.</h2>
            <p>Programming became the medium for turning an idea into something concrete enough to test, debug, and improve.</p>
          </div>
          <div className={styles.progression} aria-label="Progression from implementation to systems thinking">
            {["IMPLEMENT", "BUILD", "CONNECT", "UNDERSTAND"].map((word, itemIndex) => (
              <div key={word}><span>0{itemIndex + 1}</span><strong>{word}</strong><i /></div>
            ))}
          </div>
        </div>
      );
    case 2:
      return (
        <div className={styles.journeyLayout}>
          <div className={styles.journeyHeading}>
            <Eyebrow>Approximately six years of professional practice</Eyebrow>
            <h2>Responsibility<br />changed the work.</h2>
          </div>
          <div className={styles.timeline}>
            {presentationData.journey.slice(0, 6).map((phase, phaseIndex) => (
              <div key={phase.short} className={styles.timelinePhase}>
                <span>0{phaseIndex + 1}</span><i /><strong>{phase.short}</strong><small>{phase.phase}</small>
              </div>
            ))}
          </div>
          <p className={styles.timelineNow}>FOUNDATIONS <span>→</span> PRODUCTION <span>→</span> SYSTEMS <span>→</span> OWNERSHIP <span>→</span> LEADERSHIP <span>→</span> COMPUTATION</p>
        </div>
      );
    case 3:
      return (
        <div className={styles.foundationLayout}>
          <div>
            <Eyebrow>02 / Building</Eyebrow>
            <h2>FOUNDATIONS</h2>
            <p className={styles.largeLead}>Learning implementation discipline by shipping software inside real products.</p>
          </div>
          <div className={styles.foundationList}>
            {["Product behavior", "Existing systems", "Debugging", "Collaboration", "Delivery"].map((item, itemIndex) => (
              <div key={item}><span>{String(itemIndex + 1).padStart(2, "0")}</span><strong>{item}</strong></div>
            ))}
          </div>
          <p className={styles.roleFootnote}>Historical roles included frontend and full-stack development. The lasting lesson was broader: every interface belongs to a system.</p>
        </div>
      );
    case 4:
      return (
        <div className={styles.projectLayout}>
          <div className={styles.projectCopy}>
            <Eyebrow>Production engineering / {rahtal.category}</Eyebrow>
            <h2>{rahtal.name}</h2>
            <p className={styles.projectStatement}>Complexity lives between the workflows.</p>
            <p>{rahtal.summary}</p>
            <Link href="/work/rahtal" className={styles.inlineLink}>Inside the system <ArrowUpRight size={16} /></Link>
          </div>
          <SystemGraph nodes={["Users", "Tasks", "Performance", "API boundary", "Workflows"]} />
          <div className={styles.projectMeta}><span>AUTHENTICATION</span><span>DATA RELATIONSHIPS</span><span>READ / WRITE BEHAVIOR</span><span>INTEGRATION</span></div>
        </div>
      );
    case 5:
      return (
        <div className={styles.ownershipLayout}>
          <div className={styles.ownershipWord} aria-hidden="true">OWNERSHIP</div>
          <div className={styles.ownershipCopy}>
            <Eyebrow>03 / Technical leadership</Eyebrow>
            <h2>Danobin</h2>
            <p className={styles.roleStamp}>CTO <span>/</span> Startup</p>
            <p>{danobin.summary}</p>
            <p className={styles.evidenceLine}>Verified implementation record: subscription-plan changes, credit management, domain-event documentation, and asynchronous email services.</p>
            <Link href="/work/danobin" className={styles.inlineLink}>Read the evidence <ArrowUpRight size={16} /></Link>
          </div>
          <div className={styles.ownershipAxis}>
            <span>IMPLEMENTATION</span><i /><b>TECHNICAL DIRECTION</b>
          </div>
        </div>
      );
    case 6:
      return (
        <div className={styles.operationsLayout}>
          <div>
            <Eyebrow>04 / Systems in operation</Eyebrow>
            <h2>Software is not finished<br />when it compiles.</h2>
            <p>{zaraamad.summary}</p>
          </div>
          <div className={styles.operationSequence}>
            {["DEPLOY", "STORE", "MIGRATE", "INTEGRATE", "RECOVER", "OPERATE"].map((item, itemIndex) => (
              <div key={item}><span>{String(itemIndex + 1).padStart(2, "0")}</span><strong>{item}</strong><i /></div>
            ))}
          </div>
          <div className={styles.operationsFooter}>
            <strong>ZARAAMAD</strong>
            <span>FastAPI · Django · PostgreSQL · SQL Server · Docker</span>
            <Link href="/work/zaraamad">Case study <ArrowUpRight size={15} /></Link>
          </div>
        </div>
      );
    case 7:
      return (
        <div className={styles.alongLayout}>
          <div>
            <Eyebrow>Systems built along the way</Eyebrow>
            <h2>Different domains.<br />The same need for clarity.</h2>
          </div>
          <div className={styles.alongProjects}>
            <Link href="/work/zarvand">
              <span>01 / CITIZEN SERVICES</span><h3>{zarvand.name}</h3><p>{zarvand.summary}</p><ArrowUpRight />
            </Link>
            <Link href="/work/tireban">
              <span>02 / OPERATIONAL SOFTWARE</span><h3>{tireban.name}</h3><p>{tireban.summary}</p><ArrowUpRight />
            </Link>
          </div>
        </div>
      );
    case 8:
      return (
        <div className={styles.questionsLayout}>
          <Eyebrow>A change in attention</Eyebrow>
          <h2>At some point,<br />the framework stopped<br />being the interesting part.</h2>
          <div className={styles.questionList}>
            <p>How does the system behave?</p><p>Where does complexity actually live?</p><p>Where do failures happen?</p><p>What should become simpler?</p>
          </div>
        </div>
      );
    case 9:
      return (
        <div className={styles.toolboxLayout}>
          <div>
            <Eyebrow>Engineering toolbox</Eyebrow>
            <h2>Tools follow<br />responsibility.</h2>
            <p>Languages and frameworks matter. The system determines how they are used.</p>
          </div>
          <div className={styles.toolboxRows}>
            {presentationData.stack.map((group, groupIndex) => (
              <div key={group.name}>
                <span>0{groupIndex + 1}</span>
                <h3>{group.name}</h3>
                <p>{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      );
    case 10:
      return (
        <div className={styles.repositoriesLayout}>
          <div>
            <Eyebrow>05 / A working record</Eyebrow>
            <h2>Things I build<br />to understand.</h2>
          </div>
          <div className={styles.repositoryList}>
            {presentationData.repositories.map((repository, repositoryIndex) => (
              <a key={repository.name} href={repository.source} target="_blank" rel="noopener noreferrer">
                <span>{String(repositoryIndex + 1).padStart(2, "0")} / {repository.category}</span>
                <strong>{repository.name}</strong>
                <small>{repository.question}</small>
                <ArrowUpRight size={18} />
              </a>
            ))}
          </div>
        </div>
      );
    case 11:
      return (
        <div className={styles.studyLayout}>
          <div>
            <Eyebrow>Learning alongside practice</Eyebrow>
            <h2>Study does not stop<br />at the job.</h2>
          </div>
          <div className={styles.credentialList}>
            {presentationData.credentials.map((credential, credentialIndex) => (
              <a key={credential.name} href={credential.url} target="_blank" rel="noopener noreferrer">
                <span>{String(credentialIndex + 1).padStart(2, "0")}</span>
                <div><small>{credential.issuer} / {credential.issued}</small><strong>{credential.name}</strong></div>
                <em>VERIFY <ArrowUpRight size={14} /></em>
              </a>
            ))}
          </div>
        </div>
      );
    case 12:
      return (
        <div className={styles.quantumLayout}>
          <div>
            <Eyebrow>06 / Advanced computing</Eyebrow>
            <h2>What can<br />computation become?</h2>
            <p>{research.introduction}</p>
            <span className={styles.scopeNote}>STUDY · SIMULATION · BOUNDED EXPERIMENTS</span>
          </div>
          <QuantumCircuit />
        </div>
      );
    case 13:
      return (
        <div className={styles.experimentLayout}>
          <div className={styles.experimentTitle}>
            <Eyebrow>Experiment 001 / Classical × quantum</Eyebrow>
            <h2><span>SVM</span><em>vs.</em><span>QSVM</span></h2>
            <p>{research.question}</p>
          </div>
          <ComparisonPlot />
          <div className={styles.finding}>
            <span>OBSERVED RESULT</span>
            <p>{research.finding}</p>
            <small>{research.scope}</small>
            <a href={researchProject.links[0].url} target="_blank" rel="noopener noreferrer">Open repository <ArrowUpRight size={15} /></a>
          </div>
        </div>
      );
    case 14:
      return (
        <div className={styles.futureLayout}>
          <Eyebrow>07 / Direction</Eyebrow>
          <h2>WHAT<br />COMES NEXT?</h2>
          <div className={styles.futureWords}><span>Larger systems.</span><span>Harder problems.</span><span>Deeper computation.</span></div>
          <div className={styles.futureFields}><span>Systems Engineering</span><span>Advanced Computing</span><span>Quantum Computing</span><span>Research Engineering</span></div>
          <SignalMark label="DIRECTION / OPEN" />
        </div>
      );
    default:
      return (
        <div className={styles.finalLayout}>
          <Eyebrow>Continue the conversation</Eyebrow>
          <h2>{profile.name}<span>.</span></h2>
          <p>ENGINEER</p>
          <h3>Let&apos;s build something difficult.</h3>
          <div className={styles.finalActions}>
            <a href={`mailto:${profile.email}`}>Email <ArrowUpRight size={16} /></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16} /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16} /></a>
            <Link href="/">Portfolio <ArrowUpRight size={16} /></Link>
          </div>
          <div className={styles.finalCoordinate}><span>ENGINEERING</span><span>SYSTEMS</span><span>COMPUTATION</span></div>
        </div>
      );
  }
}
