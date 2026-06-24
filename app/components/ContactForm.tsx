export function ContactForm() {
  return (
    <form className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 md:p-6">
      <label className="grid gap-2">
        <span className="text-sm text-white/45">Name</span>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="h-12 rounded-2xl border border-white/10 bg-black/20 px-4 text-white outline-none transition placeholder:text-white/25 focus:border-white/30"
        />
      </label>
      <label className="grid gap-2">
        <span className="text-sm text-white/45">Email</span>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          className="h-12 rounded-2xl border border-white/10 bg-black/20 px-4 text-white outline-none transition placeholder:text-white/25 focus:border-white/30"
        />
      </label>
      <label className="grid gap-2">
        <span className="text-sm text-white/45">Your Project</span>
        <textarea
          name="project"
          placeholder="Tell me what you’re building..."
          rows={5}
          className="resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-white/30"
        />
      </label>
      <button
        type="submit"
        className="mt-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-white/85"
      >
        Send Message
      </button>
    </form>
  );
}