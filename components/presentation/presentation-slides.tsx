import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { credentialIssuerMark } from "@/data/credentials";
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
      tone={index === 11 ? "signal" : "dark"}
    >
      <SlideContent index={index} />
    </PresentationSlide>
  ));
}

function SlideContent({ index }: { index: number }) {
  const { career, rahtal, danobin, zaraamad, research, researchProject } = presentationData;

  switch (index) {
    case 0:
      return (
        <div className={styles.introLayout}>
          <div className={styles.introCopy}>
            <Eyebrow>A professional narrative</Eyebrow>
            <h1>Sina<br />Qasempour<span>.</span></h1>
            <p className={styles.introStatement}>A journey through building, engineering,<br /><span>and deeper computing.</span></p>
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
          <SignalMark label="THE JOURNEY / CONTINUES" />
        </div>
      );
    case 1:
      return (
        <div className={styles.originLayout}>
          <div>
            <Eyebrow>01 / Starting point</Eyebrow>
            <h2>Software was<br />the starting point.</h2>
            <p>Software was where the journey started. My first professional step was an internship at Zaravand.</p>
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
        <div className={styles.foundationLayout}>
          <div>
            <Eyebrow>02 / {career.zaravand.milestone}</Eyebrow>
            <h2>THE FIRST<br />STEP</h2>
            <p className={styles.largeLead}>I began my professional career as an intern at {career.zaravand.name}.</p>
          </div>
          <div className={styles.foundationList}>
            {["Real projects", "Real requirements", "Existing systems", "Team development"].map((item, itemIndex) => (
              <div key={item}><span>{String(itemIndex + 1).padStart(2, "0")}</span><strong>{item}</strong></div>
            ))}
          </div>
          <p className={styles.roleFootnote}>{career.zaravand.role} / {career.zaravand.name} — where software moved from learning alone into contributing within real work.</p>
        </div>
      );
    case 3:
      return (
        <div className={styles.projectLayout}>
          <div className={styles.projectCopy}>
            <Eyebrow>03 / {career.iranslice.milestone}</Eyebrow>
            <h2>{career.iranslice.name}</h2>
            <p className={styles.projectStatement}>My first project working across the stack.</p>
            <p>It was an early step in seeing a product beyond one layer: interface, application logic, data, and the complete behavior of working software.</p>
          </div>
          <SystemGraph nodes={["Interface", "Application logic", "Data", "Product", "Behavior"]} />
          <div className={styles.projectMeta}><span>ROLE</span><span>{career.iranslice.role}</span><span>FIRST COMPLETE PROJECT VIEW</span></div>
        </div>
      );
    case 4:
      return (
        <div className={styles.operationsLayout}>
          <div>
            <Eyebrow>04 / {career.zaraamad.milestone}</Eyebrow>
            <h2>Zaraamad</h2>
            <p><strong>From a project to a system.</strong> IranSlice introduced me to working across a product. Zaraamad was the first major system that pushed that experience further.</p>
          </div>
          <div className={styles.operationSequence}>
            {["BACKEND", "PORTALS", "DATABASES", "INTEGRATE", "DEPLOY", "OPERATE"].map((item, itemIndex) => (
              <div key={item}><span>{String(itemIndex + 1).padStart(2, "0")}</span><strong>{item}</strong><i /></div>
            ))}
          </div>
          <div className={styles.operationsFooter}>
            <strong>{zaraamad.name.toUpperCase()}</strong>
            <span>Organizational workflows · Data · Production operations</span>
            <Link href="/work/zaraamad">Case study <ArrowUpRight size={15} /></Link>
          </div>
        </div>
      );
    case 5:
      return (
        <div className={styles.projectLayout}>
          <div className={styles.projectCopy}>
            <Eyebrow>05 / Deeper into systems</Eyebrow>
            <h2>{rahtal.name}</h2>
            <p className={styles.projectStatement}>The interesting part moved closer to how the entire system behaved.</p>
            <p>{rahtal.summary}</p>
            <Link href="/work/rahtal" className={styles.inlineLink}>Inside the system <ArrowUpRight size={16} /></Link>
          </div>
          <SystemGraph nodes={["Meetings", "Orders", "Tasks", "Performance", "Permissions"]} />
          <div className={styles.projectMeta}><span>INTERCONNECTED WORKFLOWS</span><span>DATA &amp; CORRECTNESS</span><span>MAINTENANCE &amp; DEBUGGING</span><span>SYSTEM BEHAVIOR</span></div>
        </div>
      );
    case 6:
      return (
        <div className={styles.ownershipLayout}>
          <div className={styles.ownershipWord} aria-hidden="true">OWNERSHIP</div>
          <div className={styles.ownershipCopy}>
            <Eyebrow>06 / Taking ownership</Eyebrow>
            <h2>Danobin</h2>
            <p className={styles.roleStamp}>CTO <span>/</span> Startup</p>
            <p>{danobin.summary}</p>
            <p className={styles.evidenceLine}>Verified implementation record: subscription-plan changes, credit management, domain-event documentation, and asynchronous email services.</p>
            <Link href="/work/danobin" className={styles.inlineLink}>Read the evidence <ArrowUpRight size={16} /></Link>
          </div>
          <div className={styles.ownershipAxis}><span>IMPLEMENTATION</span><i /><b>TECHNICAL DIRECTION</b></div>
        </div>
      );
    case 7:
      return (
        <div className={styles.questionsLayout}>
          <Eyebrow>07 / Systems thinking</Eyebrow>
          <h2>At some point,<br />the framework stopped<br />being the interesting part.</h2>
          <div className={styles.questionList}>
            <p>How does the system behave?</p><p>Where does complexity actually live?</p><p>Where do failures happen?</p><p>What should become simpler?</p>
          </div>
        </div>
      );
    case 8:
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
    case 9:
      return (
        <div className={styles.repositoriesLayout}>
          <div className={styles.repositoryIntro}>
            <Eyebrow>08 / A working record</Eyebrow>
            <h2>Things I build<br />to understand.</h2>
            <div className={styles.repositoryCount}>
              <strong>{presentationData.stats.publicRepositories}</strong>
              <span>PUBLIC REPOSITORIES<small>GitHub snapshot · 15 Sep 2026</small></span>
            </div>
          </div>
          <div className={styles.repositoryShowcase}>
            <div className={styles.featuredRepositories}>
              {presentationData.repositories.filter((repository) => repository.tier === "major").map((repository, repositoryIndex) => (
                <a key={repository.name} href={repository.source} target="_blank" rel="noopener noreferrer">
                  <span>FEATURED BUILD {String(repositoryIndex + 1).padStart(2, "0")} · {repository.category}</span>
                  <strong>{repository.name}</strong>
                  <p>{repository.question}</p>
                  <small>{repository.detail}</small>
                  <ArrowUpRight size={18} />
                </a>
              ))}
            </div>
            <div className={styles.repositoryNodes}>
              {presentationData.repositories.filter((repository) => repository.tier !== "major").map((repository) => (
                <a key={repository.name} href={repository.source} target="_blank" rel="noopener noreferrer">
                  <span>{repository.category}</span>
                  <strong>{repository.name}</strong>
                  <small>{repository.question}</small>
                  <ArrowUpRight size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>
      );
    case 10:
      return (
        <div className={styles.studyLayout}>
          <div className={styles.studyIntro}>
            <Eyebrow>Learning alongside practice</Eyebrow>
            <h2>Study continues<br />alongside the work.</h2>
            <p className={styles.studyNote}>Two selected records of focused study and communication.</p>
            <Link href="/about#credentials" className={styles.inlineLink}>Full learning record <ArrowUpRight size={15} /></Link>
          </div>
          <div className={styles.studyShowcase}>
            <div className={styles.credentialShowcase}>
              {presentationData.credentials.map((credential, credentialIndex) => (
                <article key={credential.name} className={styles.credentialFeature}>
                  <span className={`${styles.issuerMark} ${credential.issuer === "EF SET" ? styles.issuerMarkEf : ""}`} aria-label={credential.issuer}>
                    {credential.issuer === "EF SET" ? <>EF<b>SET</b></> : credentialIssuerMark(credential.issuer)}
                  </span>
                  <div>
                    <small>FEATURED CREDENTIAL {String(credentialIndex + 1).padStart(2, "0")} · {credential.issuer}</small>
                    <strong>{credential.name}</strong>
                    <code>{credential.issued ? `${credential.issued} · ID ${credential.credentialId}` : "ENGLISH PROFICIENCY RECORD"}</code>
                  </div>
                  {credential.url ? (
                    <a className={styles.credentialFeatureAction} href={credential.url} target="_blank" rel="noopener noreferrer">Verify <ArrowUpRight size={14} /></a>
                  ) : (
                    <span className={styles.credentialRecord}>Profile record</span>
                  )}
                </article>
              ))}
            </div>
            <div className={styles.studyLanguages}>
              <div className={styles.studyLanguagesIntro}><span>Languages</span><h3>Across ideas.<br />Across languages.</h3></div>
              {presentationData.languages.map((language) => (
                <div className={styles.studyLanguage} key={language.name}>
                  <h4>{language.name}</h4>
                  <p>{language.proficiency}</p>
                  <small>{language.detail}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    case 11:
      return (
        <div className={styles.quantumLayout}>
          <div>
            <Eyebrow>09 / Advanced computing</Eyebrow>
            <h2>What can<br />computation become?</h2>
            <p>{research.introduction}</p>
            <span className={styles.scopeNote}>STUDY · SIMULATION · BOUNDED EXPERIMENTS</span>
          </div>
          <QuantumCircuit />
        </div>
      );
    case 12:
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
    case 13:
      return (
        <div className={styles.futureLayout}>
          <Eyebrow>10 / Direction</Eyebrow>
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
