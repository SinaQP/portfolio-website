import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpLeft } from "lucide-react";
import { credentialIssuerMark } from "@/data/credentials";
import { profile } from "@/data/profile";
import { presentationData } from "@/data/presentation";
import { faCopy, presentationSlidesFa, toPersianDigits } from "@/data/presentation.fa";
import { Eyebrow, PresentationSlide } from "./presentation-slide";
import { ComparisonPlot, QuantumCircuit, SignalMark, SystemGraph } from "./presentation-visuals";
import styles from "./presentation.module.css";

const number = (value: number) => toPersianDigits(String(value).padStart(2, "0"));

export function PresentationSlidesFa({ activeIndex }: { activeIndex: number }) {
  return presentationSlidesFa.map((slide, index) => (
    <PresentationSlide
      key={slide.id}
      id={slide.id}
      chapter={slide.chapter}
      index={index}
      active={activeIndex === index}
      tone={index === 11 ? "signal" : "dark"}
      locale="fa"
    >
      <SlideContentFa index={index} />
    </PresentationSlide>
  ));
}

function SlideContentFa({ index }: { index: number }) {
  const { career, rahtal, danobin, zaraamad, researchProject } = presentationData;

  switch (index) {
    case 0:
      return (
        <div className={styles.introLayout}>
          <div className={styles.introCopy}>
            <Eyebrow>روایت یک مسیر حرفه‌ای</Eyebrow>
            <h1>سینا<br />قاسم‌پور<span>.</span></h1>
            <p className={styles.introStatement}>مسیر من از ساخت نرم‌افزار<br /><span>تا فهم عمیق‌تر سیستم‌ها و محاسبات.</span></p>
            <button className={styles.beginCue} data-presentation-next>شروع کنیم <ArrowDown size={16} aria-hidden="true" /></button>
          </div>
          <figure className={styles.introPortrait}>
            <Image src="/profile-picture.png" alt="پرتره‌ی سینا قاسم‌پور" fill priority sizes="(max-width: 700px) 72vw, 42vw" />
            <span aria-hidden="true">SQ / 2026</span>
          </figure>
          <SignalMark label="مسیر / ادامه دارد" />
        </div>
      );
    case 1:
      return (
        <div className={styles.originLayout}>
          <div><Eyebrow>۰۱ / شروع</Eyebrow><h2>نقطه‌ی شروع،<br />نرم‌افزار بود.</h2><p>نرم‌افزار نقطه‌ی شروع مسیر بود. اولین تجربه‌ی حرفه‌ای من با کارآموزی در شرکت زراوند شروع شد.</p></div>
          <div className={styles.progression} aria-label="از ساختن تا فهمیدن سیستم">
            {["پیاده کن", "بساز", "وصل کن", "بفهم"].map((word, itemIndex) => <div key={word}><span>{number(itemIndex + 1)}</span><strong>{word}</strong><i /></div>)}
          </div>
        </div>
      );
    case 2:
      return (
        <div className={styles.foundationLayout}>
          <div><Eyebrow>۰۲ / اولین تجربه‌ی حرفه‌ای</Eyebrow><h2>اولین<br />قدم</h2><p className={styles.largeLead}>مسیر حرفه‌ای من با کارآموزی در شرکت زراوند شروع شد.</p></div>
          <div className={styles.foundationList}>{["پروژه‌های واقعی", "نیازهای واقعی", "سیستم‌های موجود", "کار تیمی"].map((item, itemIndex) => <div key={item}><span>{number(itemIndex + 1)}</span><strong>{item}</strong></div>)}</div>
          <p className={styles.roleFootnote}><bdi dir="ltr">{career.zaravand.role} / {career.zaravand.name}</bdi> — جایی که نرم‌افزار از تمرین و یادگیری، وارد فضای کار واقعی شد.</p>
        </div>
      );
    case 3:
      return (
        <div className={styles.projectLayout}>
          <div className={styles.projectCopy}><Eyebrow>۰۳ / اولین پروژه</Eyebrow><h2><bdi dir="ltr">{career.iranslice.name}</bdi></h2><p className={styles.projectStatement}>اولین پروژه‌ای که در آن به‌صورت فول‌استک کار کردم.</p><p>این تجربه کمک کرد محصول را فقط از زاویه‌ی یک بخش نبینم؛ رابط، منطق برنامه، داده و رفتار کلی محصول کم‌کم به یک تصویر کامل‌تر تبدیل شدند.</p></div>
          <SystemGraph ariaLabel="لایه‌های یک محصول" nodes={["رابط", "منطق برنامه", "داده", "محصول", "رفتار"]} />
          <div className={styles.projectMeta}><span>نقش</span><span>توسعه‌ی فول‌استک</span><span>اولین تجربه‌ی کامل محصول</span></div>
        </div>
      );
    case 4:
      return (
        <div className={styles.operationsLayout}>
          <div><Eyebrow>۰۴ / اولین سیستم بزرگ</Eyebrow><h2>زرآمد</h2><p><strong>از پروژه، به سیستم.</strong> <bdi dir="ltr">IranSlice</bdi> اولین تجربه‌ی کار روی یک محصول بود. زرآمد اولین پروژه‌ی بزرگی بود که این تجربه را در مقیاس وسیع‌تری پیش برد.</p></div>
          <div className={styles.operationSequence}>{["بک‌اند", "پرتال‌ها", "پایگاه داده", "یکپارچه‌سازی", "استقرار", "عملیات"].map((item, itemIndex) => <div key={item}><span>{number(itemIndex + 1)}</span><strong>{item}</strong><i /></div>)}</div>
          <div className={styles.operationsFooter}><strong dir="ltr">{zaraamad.name.toUpperCase()}</strong><span>جریان‌های سازمانی · داده · عملیات تولید</span><Link href="/work/zaraamad">جزئیات پروژه <ArrowUpLeft size={15} /></Link></div>
        </div>
      );
    case 5:
      return (
        <div className={styles.projectLayout}>
          <div className={styles.projectCopy}><Eyebrow>۰۵ / یک قدم عمیق‌تر در سیستم‌ها</Eyebrow><h2><bdi dir="ltr">{rahtal.name}</bdi></h2><p className={styles.projectStatement}>بخش جالب مسئله، بیشتر از هر فیچر، رفتار کل سیستم بود.</p><p>{faCopy.projectSummaries.rahtal}</p><Link href="/work/rahtal" className={styles.inlineLink}>جزئیات فنی <ArrowUpLeft size={16} /></Link></div>
          <SystemGraph ariaLabel="جریان‌های مرتبط سیستم" nodes={["جلسه", "دستور", "تسک", "عملکرد", "دسترسی"]} />
          <div className={styles.projectMeta}><span>جریان‌های مرتبط</span><span>داده و درستی</span><span>نگه‌داری و دیباگ</span><span>رفتار سیستم</span></div>
        </div>
      );
    case 6:
      return (
        <div className={styles.ownershipLayout}>
          <div className={styles.ownershipWord} aria-hidden="true">مسئولیت</div>
          <div className={styles.ownershipCopy}><Eyebrow>۰۶ / مالکیت فنی</Eyebrow><h2><bdi dir="ltr">{danobin.name}</bdi></h2><p className={styles.roleStamp}><bdi dir="ltr">CTO</bdi> <span>/</span> استارتاپ</p><p>{faCopy.projectSummaries.danobin}</p><p className={styles.evidenceLine}>کنارش هنوز درگیر ساختن بودم: تغییر پلن اشتراک، مدیریت اعتبار، رویدادهای دامنه و سرویس ایمیل <bdi dir="ltr">async</bdi>.</p><Link href="/work/danobin" className={styles.inlineLink}>دیدن شواهد فنی <ArrowUpLeft size={16} /></Link></div>
          <div className={styles.ownershipAxis}><span>پیاده‌سازی</span><i /><b>تصمیم فنی</b></div>
        </div>
      );
    case 7:
      return <div className={styles.questionsLayout}><Eyebrow>۰۷ / نگاه سیستمی</Eyebrow><h2>یه جایی، خودِ فریم‌ورک<br />دیگه بخش جالب کار نبود.</h2><div className={styles.questionList}><p>سیستم واقعاً چطور کار می‌کنه؟</p><p>پیچیدگی کجاست؟</p><p>دیتا چطور بین بخش‌ها حرکت می‌کنه؟</p><p>یک تصمیم اشتباه کجا خودش رو نشون می‌ده؟</p></div></div>;
    case 8:
      return (
        <div className={styles.toolboxLayout}>
          <div><Eyebrow>ابزارهای کار</Eyebrow><h2>ابزار مهمه.<br />ولی مسئله انتخابش می‌کنه.</h2><p>زبان و فریم‌ورک مهم‌اند؛ اما اول باید فهمید سیستم چی لازم داره.</p></div>
          <div className={styles.toolboxRows}>{presentationData.stack.map((group, groupIndex) => <div key={group.name}><span>{number(groupIndex + 1)}</span><h3>{faCopy.stackNames[groupIndex]}</h3><p dir="ltr">{group.items.join(" · ")}</p></div>)}</div>
        </div>
      );
    case 9:
      return (
        <div className={styles.repositoriesLayout}>
          <div className={styles.repositoryIntro}>
            <Eyebrow>۰۸ / بیرون از کار روزمره</Eyebrow><h2>چیزهایی که برای فهمیدن<br />می‌سازم.</h2>
            <div className={styles.repositoryCount}><strong>{toPersianDigits(presentationData.stats.publicRepositories)}</strong><span>مخزن عمومی در <bdi dir="ltr">GitHub</bdi><small>آخرین بررسی · ۲۴ شهریور ۱۴۰۵</small></span></div>
          </div>
          <div className={styles.repositoryShowcase}>
            <div className={styles.featuredRepositories}>
              {presentationData.repositories.filter((repository) => repository.tier === "major").map((repository, repositoryIndex) => (
                <a key={repository.name} href={repository.source} target="_blank" rel="noopener noreferrer">
                  <span>پروژه‌ی منتخب {number(repositoryIndex + 1)} · {repository.categoryFa}</span>
                  <strong dir="ltr">{repository.name}</strong><p>{repository.questionFa}</p><small>{repository.detailFa}</small><ArrowUpLeft size={18} />
                </a>
              ))}
            </div>
            <div className={styles.repositoryNodes}>
              {presentationData.repositories.filter((repository) => repository.tier !== "major").map((repository) => (
                <a key={repository.name} href={repository.source} target="_blank" rel="noopener noreferrer">
                  <span>{repository.categoryFa}</span><strong dir="ltr">{repository.name}</strong><small>{repository.questionFa}</small><ArrowUpLeft size={15} />
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
            <Eyebrow>یادگیری کنار کار</Eyebrow><h2>یادگیری، کنار<br />کار ادامه داره.</h2>
            <p className={styles.studyNote}>دو انتخاب از مسیر یادگیری جدی و مهارت ارتباطی.</p>
            <Link href="/about#credentials" className={styles.inlineLink}>دیدن مسیر کامل یادگیری <ArrowUpLeft size={15} /></Link>
          </div>
          <div className={styles.studyShowcase}>
            <div className={styles.credentialShowcase}>{presentationData.credentials.map((credential, credentialIndex) => (
              <article key={credential.name} className={styles.credentialFeature}>
                <span className={`${styles.issuerMark} ${credential.issuer === "EF SET" ? styles.issuerMarkEf : ""}`} aria-label={credential.issuer} dir="ltr">
                  {credential.issuer === "EF SET" ? <>EF<b>SET</b></> : credentialIssuerMark(credential.issuer)}
                </span>
                <div><small>مدرک منتخب {number(credentialIndex + 1)} · <bdi dir="ltr">{credential.issuer}</bdi></small><strong dir="ltr">{credential.name}</strong><code dir={credential.issued ? "ltr" : "rtl"}>{credential.issued ? `${credential.issued} · ID ${credential.credentialId}` : "مدرک مهارت زبان انگلیسی"}</code></div>
                {credential.url ? (
                  <a className={styles.credentialFeatureAction} href={credential.url} target="_blank" rel="noopener noreferrer">اعتبارسنجی <ArrowUpLeft size={14} /></a>
                ) : (
                  <span className={styles.credentialRecord}>ثبت‌شده در پروفایل</span>
                )}
              </article>
            ))}</div>
            <div className={styles.studyLanguages}>
              <div className={styles.studyLanguagesIntro}><span>زبان‌ها</span><h3>هر زبان،<br />یک جور تازه برای فکر کردن.</h3></div>
              {presentationData.languages.map((language) => (
                <div className={styles.studyLanguage} key={language.name}>
                  <h4>{language.nameFa}</h4><p>{language.proficiencyFa}</p><small>{language.detailFa}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    case 11:
      return <div className={styles.quantumLayout}><div><Eyebrow>۰۹ / سؤال بعدی</Eyebrow><h2>خودِ محاسبات تا کجا<br />می‌تونه متفاوت باشه؟</h2><p>{faCopy.research.introduction}</p><span className={styles.scopeNote}>مطالعه · شبیه‌سازی · آزمایش کنترل‌شده</span></div><QuantumCircuit locale="fa" /></div>;
    case 12:
      return (
        <div className={styles.experimentLayout}>
          <div className={styles.experimentTitle}><Eyebrow>آزمایش ۰۰۱ / کلاسیک و کوانتومی</Eyebrow><h2><span dir="ltr">SVM</span><em>در برابر</em><span dir="ltr">QSVM</span></h2><p>{faCopy.research.question}</p></div>
          <ComparisonPlot locale="fa" />
          <div className={styles.finding}><span>چیزی که دیدم</span><p>{faCopy.research.finding}</p><small>{faCopy.research.scope}</small><a href={researchProject.links[0].url} target="_blank" rel="noopener noreferrer">دیدن پروژه <ArrowUpLeft size={15} /></a></div>
        </div>
      );
    case 13:
      return <div className={styles.futureLayout}><Eyebrow>۱۰ / قدم بعد</Eyebrow><h2>حالا<br />چی؟</h2><div className={styles.futureWords}><span>سیستم‌های بزرگ‌تر.</span><span>مسئله‌های سخت‌تر.</span><span>محاسبات عمیق‌تر.</span></div><div className={styles.futureFields}><span>مهندسی سیستم</span><span>محاسبات پیشرفته</span><span>رایانش کوانتومی</span><span>ریسرچ فنی</span></div><SignalMark label="مسیر / باز" /></div>;
    default:
      return (
        <div className={styles.finalLayout}>
          <Eyebrow>ادامه بدیم؟</Eyebrow><h2>سینا قاسم‌پور<span>.</span></h2><p>مهندس</p><h3>اگر مسئله سخت باشه، احتمالاً ارزش ساختن داره.</h3>
          <div className={styles.finalActions}><a href={`mailto:${profile.email}`}>ایمیل <ArrowUpLeft size={16} /></a><a href={profile.github} target="_blank" rel="noopener noreferrer"><bdi dir="ltr">GitHub</bdi> <ArrowUpLeft size={16} /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><bdi dir="ltr">LinkedIn</bdi> <ArrowUpLeft size={16} /></a><Link href="/">پورتفولیو <ArrowUpLeft size={16} /></Link></div>
          <div className={styles.finalCoordinate}><span>ساختن</span><span>سیستم</span><span>محاسبات</span></div>
        </div>
      );
  }
}
