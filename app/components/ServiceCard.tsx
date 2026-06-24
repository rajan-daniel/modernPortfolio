type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
};
export function ServiceCard({ number, title, description }: ServiceCardProps) {
  return (
    <article className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 transition hover:border-white/20 hover:bg-white/[0.06] md:p-8">
      <div className="mb-16 flex items-center justify-between">
        <span className="text-sm text-white/35">{number}</span>
        <span className="h-2 w-2 rounded-full bg-white/30 transition group-hover:bg-white" />
      </div>
      <h3 className="mb-4 text-2xl font-semibold tracking-[-0.03em]">
        {title}
      </h3>
      <p className="text-sm leading-6 text-white/50">{description}</p>
    </article>
  );
}