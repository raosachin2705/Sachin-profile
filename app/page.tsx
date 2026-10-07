"use client";

import { useState } from "react";

const experiences = [
  { period:"Oct 2025 – May 2026", role:"Program Manager — Lead Associate", company:"I-PAC", meta:"Political Strategy · Program Management · Field Operations", text:"Led execution across 16 business units and a 42-member field team, connecting central campaign design with district-level execution, stakeholder coordination, MIS and daily operating cadence.", metrics:["16 business units","42-member field team","4M+ citizen touchpoints","350+ campaign vehicles"] },
  { period:"May – Oct 2025", role:"Consultant / Associate — Strategic Program Manager", company:"NwN India", meta:"Research · Intelligence · Program Monitoring", text:"Built stakeholder intelligence, leadership dashboards, SOPs and monitoring systems across 7 Northeast markets and national campaigns, supporting leadership reviews and execution.", metrics:["500+ stakeholder profiles","7 Northeast markets","3 national campaigns"] },
  { period:"Jul 2021 – May 2023", role:"Marketing Manager — Digital Sales & Growth", company:"Nitu Raja Food Industries", meta:"Digital Growth · Sales · Market Execution", text:"Built a measurable digital sales pipeline and coordinated retailer, wholesaler and shopkeeper networks across cities, linking acquisition analytics with on-ground market execution.", metrics:["30% sales uplift","Digital lead pipeline","Multi-city channel coordination"] },
];

const caseStudies = [
  { id:"01", tag:"I-PAC · Operations", title:"Scaling a 42-person field system", problem:"How do you make a complex, multi-district program execute consistently when priorities, teams and local conditions keep changing?", approach:["Converted central campaign priorities into SOPs, trackers and daily operating rhythms.","Built dashboards around household coverage, team productivity, gaps and escalation points.","Coordinated field teams, political stakeholders, district administration, vendors and social teams.","Reworked routes, team allocation and local sourcing when constraints threatened timelines."], outcome:"Created a repeatable operating system spanning 16 business units, with 25,000+ households/day possible at district level and ~4M+ tracked citizen touchpoints.", takeaway:"The lesson: scale comes less from adding people and more from making the system observable, accountable and easy to operate." },
  { id:"02", tag:"Nitu Raja · Growth", title:"Turning digital activity into a sales engine", problem:"How do you move from scattered digital marketing activity to a pipeline that sales teams can actually act on?", approach:["Mapped acquisition sources, leads, conversions and channel-level performance.","Connected digital demand generation with retailer and wholesaler coordination.","Used pricing, stock, expiry and delivery information to improve market execution.","Focused measurement on revenue movement rather than vanity engagement."], outcome:"Helped drive a ~30% improvement in sales through digital marketing and a more structured sales pipeline.", takeaway:"Growth is strongest when marketing, analytics and distribution are designed as one system." },
  { id:"03", tag:"Consumer · GTM", title:"A first-principles approach to market entry", problem:"How should a new consumer product decide whom to target, where to play and how to build a viable route to market?", approach:["Define the customer problem before sizing the market.","Segment by need, willingness to pay, behaviour and channel accessibility.","Build TAM → SAM → SOM from explicit, defensible assumptions.","Translate the target segment into pricing, channel, acquisition and retention choices.","Stress-test unit economics before recommending scale."], outcome:"A reusable GTM framework for consumer and internet businesses — designed to move from market size to an actionable commercial plan.", takeaway:"A good market model should change the decision, not just produce a large number." },
];

const ideas = [
  ["Consumer internet", "How to break a market down from first principles without hiding behind top-down numbers."],
  ["Growth & GTM", "Why customer segmentation is often more important than the size of the TAM."],
  ["AI & workflows", "Where AI genuinely removes operating friction — and where it only adds another tool."],
];

export default function Home() {
  const [openCase, setOpenCase] = useState<string | null>(null);

  return (
    <main>
      <nav className="sticky top-0 z-30 border-b border-[var(--line)] bg-[var(--background)]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-bold tracking-tight">SK<span className="text-zinc-400">.</span></a>
          <div className="hidden gap-7 text-sm text-zinc-600 md:flex">
            <a href="#about" className="nav-link">About</a><a href="#experience" className="nav-link">Experience</a><a href="#work" className="nav-link">Work</a><a href="#ideas" className="nav-link">Ideas</a><a href="#contact" className="nav-link">Contact</a>
          </div>
          <a href="/Sachin-Kumar-Resume.pdf" className="rounded-full border border-zinc-300 px-4 py-2 text-xs font-semibold transition hover:border-black hover:bg-black hover:text-white">Resume ↗</a>
        </div>
      </nav>

      <section className="hero mx-auto grid max-w-6xl gap-14 px-6 pb-28 pt-24 md:grid-cols-[1fr_250px] md:pb-36 md:pt-36">
        <div>
          <p className="eyebrow mb-6">Sachin Kumar · FMS Delhi</p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.055em] md:text-8xl">I turn ambiguous problems into <span className="italic">clear action.</span></h1>
          <p className="mt-10 max-w-3xl text-xl leading-8 text-zinc-600 md:text-2xl">Strategy, growth, data and execution — with a bias toward understanding the problem deeply, structuring it simply and getting the work moving.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#work" className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-1">Explore my work ↘</a>
            <a href="https://www.linkedin.com/in/sachinkumar2705/" target="_blank" rel="noreferrer" className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition hover:border-black">LinkedIn ↗</a>
          </div>
        </div>
        <div className="flex items-end md:justify-end">
          <div className="profile-mark">
            <span>SK</span>
            <small>BUSINESS · DATA · EXECUTION</small>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-[var(--line)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[180px_1fr]">
          <p className="eyebrow">About</p>
          <div className="max-w-4xl">
            <p className="text-2xl leading-9 tracking-tight md:text-4xl md:leading-[1.2]">MBA from <strong>FMS Delhi</strong> with a B.Sc. in Mathematics from Hindu College. I’ve worked across growth, program management, consumer businesses, research and large-scale execution.</p>
            <div className="mt-12 grid gap-8 border-t border-[var(--line)] pt-8 md:grid-cols-3">
              <div><p className="stat">3+</p><p className="text-sm text-zinc-500">years across business & execution</p></div>
              <div><p className="stat">4M+</p><p className="text-sm text-zinc-500">citizen touchpoints tracked</p></div>
              <div><p className="stat">16</p><p className="text-sm text-zinc-500">business units managed at I-PAC</p></div>
            </div>
            <p className="mt-10 max-w-3xl text-lg leading-8 text-zinc-600">I enjoy breaking complex questions into simple models, finding the signal in data, and translating insight into action. I’m particularly interested in consumer businesses, GTM, pricing, digital growth, AI-enabled workflows and high-ownership operating roles.</p>
            <div className="mt-8 flex flex-wrap gap-2">{["Consumer & Internet","Growth & GTM","AI & Automation","Data & Decision-Making","Pricing","Program Management"].map(t=><span key={t} className="rounded-full border border-zinc-300 px-4 py-2 text-sm text-zinc-600">{t}</span>)}</div>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[180px_1fr]">
          <p className="eyebrow">Experience</p>
          <div>{experiences.map(item=><article key={item.company} className="experience-row grid gap-6 border-t border-[var(--line)] py-9 md:grid-cols-[150px_1fr]">
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">{item.period}</p>
            <div><h2 className="text-2xl font-semibold tracking-tight">{item.role}</h2><p className="mt-1 font-medium text-zinc-500">{item.company}</p><p className="mt-1 text-xs uppercase tracking-wider text-zinc-400">{item.meta}</p><p className="mt-5 max-w-3xl leading-7 text-zinc-600">{item.text}</p><div className="mt-5 flex flex-wrap gap-2">{item.metrics.map(m=><span key={m} className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium">{m}</span>)}</div></div>
          </article>)}</div>
        </div>
      </section>

      <section id="work" className="bg-[#151515] text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[180px_1fr]">
            <div><p className="eyebrow text-zinc-500">Selected work</p><p className="mt-5 max-w-[150px] text-sm leading-6 text-zinc-500">A few problems that shaped how I work.</p></div>
            <div className="space-y-3">{caseStudies.map(c=><article key={c.id} className="border-t border-white/15">
              <button onClick={()=>setOpenCase(openCase===c.id?null:c.id)} className="flex w-full items-center justify-between py-7 text-left">
                <div className="flex items-start gap-6"><span className="text-sm text-zinc-500">{c.id}</span><div><span className="text-xs uppercase tracking-[0.18em] text-zinc-500">{c.tag}</span><h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">{c.title}</h3></div></div>
                <span className={"case-plus "+(openCase===c.id?"rotate-45":"")}>+</span>
              </button>
              {openCase===c.id && <div className="grid gap-8 pb-9 pl-11 md:grid-cols-[1fr_1fr]"><div><p className="text-sm font-semibold text-zinc-300">The problem</p><p className="mt-3 leading-7 text-zinc-400">{c.problem}</p><p className="mt-7 text-sm font-semibold text-zinc-300">Outcome</p><p className="mt-3 leading-7 text-zinc-400">{c.outcome}</p></div><div><p className="text-sm font-semibold text-zinc-300">What I did</p><ol className="mt-3 space-y-3">{c.approach.map((x,i)=><li key={x} className="flex gap-3 text-sm leading-6 text-zinc-400"><span className="text-zinc-600">0{i+1}</span>{x}</li>)}</ol><p className="mt-7 border-l border-white/20 pl-4 text-sm italic leading-6 text-zinc-400">{c.takeaway}</p></div></div>}
            </article>)}</div>
          </div>
        </div>
      </section>

      <section id="ideas" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[180px_1fr]">
          <p className="eyebrow">Thinking in public</p>
          <div className="max-w-4xl"><h2 className="text-4xl font-semibold tracking-tight md:text-6xl">Ideas I’m exploring.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">Short notes on consumer internet, GTM, growth, AI and practical problem solving. The goal is simple: make complicated ideas easier to use.</p><div className="mt-10 border-t border-[var(--line)]">{ideas.map(([title,desc],i)=><article key={title} className="idea-row grid gap-4 border-b border-[var(--line)] py-7 md:grid-cols-[180px_1fr_30px]"><span className="text-sm font-semibold">{title}</span><span className="text-zinc-600">{desc}</span><span className="text-zinc-400">0{i+1}</span></article>)}</div></div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[#ecece7]">
        <div className="mx-auto max-w-6xl px-6 py-20"><div className="grid gap-10 md:grid-cols-3"><div><p className="eyebrow">Education</p><h3 className="mt-5 text-xl font-semibold">FMS Delhi</h3><p className="mt-1 text-sm text-zinc-500">MBA · Marketing & Finance · 2023–25</p></div><div><p className="eyebrow">Undergraduate</p><h3 className="mt-5 text-xl font-semibold">Hindu College</h3><p className="mt-1 text-sm text-zinc-500">B.Sc. (Hons.) Mathematics · 2018–21</p></div><div><p className="eyebrow">Selected</p><h3 className="mt-5 text-xl font-semibold">PM Scholarship Scheme</h3><p className="mt-1 text-sm text-zinc-500">Scholarship awardee · ₹40,000</p></div></div></div>
      </section>

      <section id="contact" className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-28"><p className="eyebrow">Contact</p><h2 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">Have a problem worth solving?</h2><p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">I’m open to conversations around strategy, growth, consumer businesses, program management and high-ownership roles.</p><div className="mt-10 flex flex-wrap gap-4"><a href="mailto:sachin.rao.275@gmail.com" className="rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:-translate-y-1">Email me</a><a href="https://www.linkedin.com/in/sachinkumar2705/" target="_blank" rel="noreferrer" className="rounded-full border border-zinc-300 px-7 py-3 text-sm font-medium transition hover:border-black">LinkedIn ↗</a><a href="https://github.com/raosachin2705" target="_blank" rel="noreferrer" className="rounded-full border border-zinc-300 px-7 py-3 text-sm font-medium transition hover:border-black">GitHub ↗</a></div></div>
      </section>

      <footer className="border-t border-[var(--line)]"><div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between"><span>© {new Date().getFullYear()} Sachin Kumar</span><span>Built to grow with the work.</span></div></footer>
    </main>
  );
}
