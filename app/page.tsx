const experiences = [
  { period: "2025–2026", role: "Program Manager — Lead Associate", company: "I-PAC", text: "Led multi-workstream execution across 16 business units and a 42-member field team, combining operating systems, dashboards, stakeholder management and ground execution at scale." },
  { period: "2025", role: "Consultant / Associate — Strategic Program Manager", company: "NwN India", text: "Built stakeholder intelligence, leadership dashboards, SOPs and program-monitoring systems across Northeast India and national campaigns." },
  { period: "2021–2023", role: "Marketing Manager — Digital Sales & Growth", company: "Nitu Raja Food Industries", text: "Worked across digital acquisition, sales analytics, retailer networks and market execution to strengthen the company's sales engine." },
];

const themes = ["Consumer & Internet", "Growth & GTM", "AI & Automation", "Data & Decision-Making"];

const projects = [
  { number: "01", title: "Scaling execution", tag: "Operations", desc: "How operating cadence, dashboards and field systems can turn an ambiguous large-scale program into measurable daily execution." },
  { number: "02", title: "Digital sales engine", tag: "Growth", desc: "A look at building a measurable digital sales pipeline across acquisition, conversion, channel coordination and market execution." },
  { number: "03", title: "Consumer GTM", tag: "Go-to-market", desc: "Frameworks for segmenting customers, sizing opportunity and designing practical routes to market." },
];

export default function Home() {
  return (
    <main>
      <nav className="sticky top-0 z-20 border-b border-[var(--line)] bg-[var(--background)]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-semibold tracking-tight">SK<span className="text-zinc-400">.</span></a>
          <div className="hidden gap-7 text-sm text-zinc-600 md:flex">
            <a href="#about" className="hover:text-black">About</a><a href="#experience" className="hover:text-black">Experience</a><a href="#work" className="hover:text-black">Work</a><a href="#ideas" className="hover:text-black">Ideas</a><a href="#contact" className="hover:text-black">Contact</a>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 pb-28 pt-28 md:pb-36 md:pt-40">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Sachin Kumar</p>
        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-8xl">Strategy, growth<br />& problem solving.</h1>
        <div className="mt-10 grid max-w-4xl gap-8 md:grid-cols-[1fr_280px]">
          <p className="text-xl leading-8 text-zinc-600 md:text-2xl">I work at the intersection of business, data, technology and execution — turning ambiguous problems into structured decisions and measurable outcomes.</p>
          <div className="flex items-end gap-3"><a href="#work" className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5">Explore my work ↘</a><a href="#contact" className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition hover:border-black">Connect</a></div>
        </div>
      </section>

      <section id="about" className="border-y border-[var(--line)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[180px_1fr]">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">About</p>
          <div className="max-w-3xl">
            <p className="text-2xl leading-9 tracking-tight md:text-4xl md:leading-[1.2]">I’m an MBA from <strong>FMS Delhi</strong> with a B.Sc. in Mathematics from Hindu College. My work has taken me across growth, program management, consumer businesses, research and large-scale execution.</p>
            <p className="mt-7 text-lg leading-8 text-zinc-600">I enjoy breaking complex questions into simple models, finding the signal in data, and translating insight into action. I’m especially interested in consumer businesses, GTM, pricing, digital growth, AI-enabled workflows and high-ownership operating roles.</p>
            <div className="mt-10 flex flex-wrap gap-2">{themes.map((t) => <span key={t} className="rounded-full border border-zinc-300 px-4 py-2 text-sm text-zinc-600">{t}</span>)}</div>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[180px_1fr]">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Experience</p>
          <div>{experiences.map((item) => <article key={item.company} className="grid gap-5 border-t border-[var(--line)] py-8 md:grid-cols-[130px_1fr]"><p className="text-sm text-zinc-500">{item.period}</p><div><h2 className="text-xl font-semibold">{item.role}</h2><p className="mt-1 font-medium text-zinc-500">{item.company}</p><p className="mt-4 max-w-2xl leading-7 text-zinc-600">{item.text}</p></div></article>)}</div>
        </div>
      </section>

      <section id="work" className="bg-[#151515] text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[180px_1fr]">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Selected work</p>
            <div className="grid gap-4 md:grid-cols-3">{projects.map((p) => <article key={p.number} className="group min-h-[330px] rounded-2xl border border-white/15 p-6 transition hover:-translate-y-1 hover:border-white/40"><div className="flex justify-between text-sm text-zinc-500"><span>{p.number}</span><span>{p.tag}</span></div><div className="mt-28"><h3 className="text-2xl font-semibold">{p.title}</h3><p className="mt-3 text-sm leading-6 text-zinc-400">{p.desc}</p></div></article>)}</div>
          </div>
        </div>
      </section>

      <section id="ideas" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[180px_1fr]">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Ideas</p>
          <div className="max-w-3xl"><h2 className="text-4xl font-semibold tracking-tight md:text-6xl">Thinking in public.</h2><p className="mt-6 text-lg leading-8 text-zinc-600">This space will evolve into notes on consumer internet, GTM, growth, AI and practical problem solving — the questions I’m exploring and the frameworks I’m building.</p><div className="mt-10 border-t border-[var(--line)]">{["How to think about a consumer internet market from first principles","A practical framework for customer segmentation","Where AI actually improves an operating workflow"].map((x, i) => <div key={x} className="flex items-center justify-between border-b border-[var(--line)] py-5 text-lg"><span>{x}</span><span className="text-zinc-400">0{i + 1}</span></div>)}</div></div>
        </div>
      </section>

      <section id="contact" className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-28"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Contact</p><h2 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.04em] md:text-7xl">Have a problem worth solving?</h2><div className="mt-10 flex flex-wrap gap-4"><a href="mailto:sachin.rao.275@gmail.com" className="rounded-full bg-black px-7 py-3 text-sm font-medium text-white">Email me</a><a href="https://www.linkedin.com/in/sachinkumar2705/" target="_blank" rel="noreferrer" className="rounded-full border border-zinc-300 px-7 py-3 text-sm font-medium">LinkedIn ↗</a><a href="https://github.com/raosachin2705" target="_blank" rel="noreferrer" className="rounded-full border border-zinc-300 px-7 py-3 text-sm font-medium">GitHub ↗</a></div></div>
      </section>

      <footer className="border-t border-[var(--line)]"><div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between"><span>© {new Date().getFullYear()} Sachin Kumar</span><span>Built to grow with the work.</span></div></footer>
    </main>
  );
}