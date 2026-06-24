import { ArrowDownRight } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { SectionHeading } from "./components/SectionHeading";
import { ServiceCard } from "./components/ServiceCard";
import { ProjectCard } from "./components/ProjectCard";
import { TestimonialCard } from "./components/TestimonialCard";
import { ContactForm } from "./components/ContactForm";
import { posts, projects, services, site, testimonials } from "@/app/data/site";
export default function Home() {
  return (
    <>
      <div className="noise" />
      <Navbar />
      <main>
        <section className="container flex min-h-[calc(100vh-5rem)] flex-col justify-between py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white/40">
              <span>{site.role}</span>
            </div>
            <div className="max-w-4xl">
              <p className="mb-6 text-xl text-white/50">{site.creatingSince}</p>
              <h1 className="mb-8 text-6xl font-semibold tracking-[-0.07em] md:text-8xl lg:text-9xl">
                {site.intro}
              </h1>
              <p className="max-w-3xl text-2xl leading-[1.25] tracking-[-0.04em] text-white/85 md:text-4xl">
                {site.bio}
              </p>
            </div>
          </div>
          <div className="mt-20 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <p className="text-sm text-white/35">{site.year}</p>
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-2xl text-base leading-7 text-white/55">
                {site.about}
              </p>
              <a
                href="#services"
                className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 transition hover:bg-white hover:text-black"
                aria-label="Scroll to services"
              >
                <ArrowDownRight size={22} />
              </a>
            </div>
          </div>
        </section>
        <section id="services" className="container py-24 md:py-32">
          <SectionHeading title="Services" eyebrow="Services" />
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>
        <section id="projects" className="container py-24 md:py-32">
          <SectionHeading title="Featured Projects" eyebrow="Work" />
          <div className="grid gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
        <section className="container py-24 md:py-32">
          <SectionHeading title="Testimonials" eyebrow="Words" />
          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.author} {...testimonial} />
            ))}
          </div>
        </section>
        <section id="thoughts" className="container py-24 md:py-32">
          <SectionHeading
            title="Thoughts"
            eyebrow="Blog"
            description="See how we shape brands with clarity and craft— explore our blog"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {posts.map((post) => (
              <a
                key={post.title}
                href={post.href}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 transition hover:border-white/25"
              >
                <p className="mb-20 text-sm uppercase tracking-[0.2em] text-white/35">
                  {post.category}
                </p>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] group-hover:text-white/80">
                  {post.title}
                </h3>
              </a>
            ))}
          </div>
        </section>
        <section id="contact" className="container grid gap-10 py-24 md:grid-cols-2 md:py-32">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.24em] text-white/35">
              /Contact
            </p>
            <h2 className="mb-6 text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
              Let’s talk.
            </h2>
            <p className="max-w-md text-base leading-7 text-white/55">
              Have a project or need help? Fill out the form, and we’ll get back
              to you soon.
            </p>
          </div>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}