import { site } from "@/app/data/site";
export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#111111] pt-24">
      <div className="container grid gap-12 pb-48 md:grid-cols-[1fr_0.7fr_0.7fr]">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.24em] text-white/35">
            /Contact
          </p>
          <h2 className="max-w-xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
            Let’s talk.
          </h2>
        </div>
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.24em] text-white/35">
            /Quick links
          </p>
          <div className="grid gap-3 text-white/60">
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#thoughts" className="hover:text-white">
              Thoughts
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.24em] text-white/35">
            /Social
          </p>
          <div className="grid gap-3 text-white/60">
            {site.socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-[-0.16em] left-1/2 w-full -translate-x-1/2 px-4 text-center">
        <p className="display whitespace-nowrap text-[26vw] font-black uppercase leading-[0.75] text-white/[0.10] sm:text-[25vw] md:text-[19vw]">
          {site.displayName}
        </p>
      </div>
    </footer>
  );
}