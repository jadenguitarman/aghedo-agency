import { ExternalLink, Quote } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui";
import { testimonials } from "@/lib/content";

export function TestimonialCarousel({
  eyebrow = "Testimonials",
  heading = "Recommended for steady, practical support",
  description = "A few words from people who can speak to Norman's communication, follow-through, and support mindset.",
}: Readonly<{
  eyebrow?: string;
  heading?: string;
  description?: string;
}>) {
  return (
    <section className="border-y border-slate-200 bg-slate-950 py-16 text-white sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">{eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{heading}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">{description}</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name + testimonial.title}
              className="flex flex-col rounded-2xl border border-white/10 bg-white p-5 text-sm text-slate-950 shadow-xl shadow-slate-950/20 transition hover:border-blue-100 sm:p-6"
            >
              <Quote aria-hidden="true" className="size-10 shrink-0 text-blue-600" />
              <blockquote className="my-2 font-semibold leading-5 tracking-tight">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-auto border-t border-slate-200 pt-2">
                <p className="font-semibold text-slate-950">{testimonial.name}</p>
                <p className="mt-1 text-xs font-medium text-slate-600">{testimonial.title}</p>
                <Link
                  href={testimonial.link.href}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 transition hover:text-blue-800 hover:underline focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  {testimonial.link.label}
                  <ExternalLink aria-hidden="true" className="size-4" />
                </Link>
                {testimonial.referenceContact ? (
                  <p className="mt-2 text-xs font-medium text-slate-600">
                    Contact for references:{" "}
                    <a
                      href={`mailto:${testimonial.referenceContact}`}
                      className="font-semibold text-blue-700 transition hover:text-blue-800 hover:underline focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      {testimonial.referenceContact}
                    </a>
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
