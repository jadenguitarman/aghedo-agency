"use client";

import { ArrowLeft, ArrowRight, ExternalLink, Quote } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  function showPrevious() {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  }

  function showNext() {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  }

  return (
    <section className="border-y border-slate-200 bg-slate-950 py-16 text-white sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-center">
          <div>
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">{eyebrow}</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{heading}</h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">{description}</p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                aria-label="Show previous testimonial"
                onClick={showPrevious}
                className="inline-flex size-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <ArrowLeft aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Show next testimonial"
                onClick={showNext}
                className="inline-flex size-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <ArrowRight aria-hidden="true" className="size-5" />
              </button>
              <div className="ml-2 flex gap-2" aria-label="Select testimonial">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name + testimonial.title}
                    type="button"
                    aria-label={`Show testimonial ${index + 1}`}
                    aria-current={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                    className={`size-2.5 rounded-full transition ${
                      index === activeIndex ? "bg-blue-300" : "bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white p-6 text-slate-950 shadow-2xl shadow-slate-950/30 sm:p-8">
            <Quote aria-hidden="true" className="size-12 text-blue-600" />
            <blockquote className="mt-6 text-xl font-semibold leading-9 tracking-tight sm:text-2xl sm:leading-10">
              &ldquo;{activeTestimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="font-semibold text-slate-950">{activeTestimonial.name}</p>
              <p className="mt-1 text-sm font-medium text-slate-600">{activeTestimonial.title}</p>
              <Link
                href={activeTestimonial.link.href}
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-800 hover:underline focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {activeTestimonial.link.label}
                <ExternalLink aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
