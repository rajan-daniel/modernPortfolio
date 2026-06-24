type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};
export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:mb-14">
      {eyebrow ? (
        <p className="text-sm uppercase tracking-[0.24em] text-white/40">
          /{eyebrow}
        </p>
      ) : null}
      <div className="grid gap-5 md:grid-cols-[0.8fr_1fr] md:items-end">
        <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-xl text-base leading-7 text-white/55 md:justify-self-end">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}