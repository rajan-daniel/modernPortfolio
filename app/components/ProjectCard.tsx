import { ArrowUpRight } from "lucide-react";
type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  href: string;
};
export function ProjectCard({
  title,
  category,
  description,
  href,
}: ProjectCardProps) {
  return (
    <a
      href={href}
      className="group grid gap-6 rounded-[2rem] border border-white/10 bg-[#171717] p-5 transition hover:border-white/25 md:grid-cols-[1fr_1.4fr_auto] md:items-center md:p-6"
    >
      <div className="aspect-[4/3] rounded-[1.4rem] border border-white/10 bg-gradient-to-br from-white/20 via-white/5 to-transparent" />
      <div>
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/35">
          {category}
        </p>
        <h3 className="mb-3 text-3xl font-semibold tracking-[-0.04em]">
          {title}
        </h3>
        <p className="max-w-xl text-sm leading-6 text-white/50">
          {description}
        </p>
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 transition group-hover:bg-white group-hover:text-black">
        <ArrowUpRight size={20} />
      </div>
    </a>
  );
}