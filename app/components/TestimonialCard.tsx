type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
};
export function TestimonialCard({
  quote,
  author,
  role,
}: TestimonialCardProps) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 md:p-8">
      <p className="mb-10 text-xl leading-8 tracking-[-0.02em] text-white/80">
        “{quote}”
      </p>
      <div>
        <p className="font-medium">{author}</p>
        <p className="text-sm text-white/40">{role}</p>
      </div>
    </article>
  );
}