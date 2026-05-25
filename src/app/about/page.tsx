import type { Metadata } from "next";
import { Monitor, Network, ShieldCheck } from "lucide-react";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { CTASection, Container, PageHero, SectionHeader } from "@/components/ui";
import { CONTACT_EMAIL, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Norman Aghedo",
  description:
    "Learn about Norman Aghedo, a freelance IT support professional focused on clear communication, honest guidance, and practical technical help.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Norman Aghedo"
        description="A freelance IT support professional focused on clear communication, honest guidance, and practical technical help."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="rounded-2xl bg-slate-950 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">Norman Aghedo</p>
              <h2 className="mt-5 text-3xl font-semibold">Everyday IT support, handled directly.</h2>
              <div className="mt-8 grid gap-3">
                {[
                  ["Help desk support", Monitor],
                  ["SharePoint and documentation", Network],
                  ["Practical guidance", ShieldCheck],
                ].map(([label, Icon]) => (
                  <div key={String(label)} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                    <Icon aria-hidden="true" className="size-5 text-blue-200" />
                    <span className="font-medium">{String(label)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="Founder" heading="Norman Aghedo" />
            <div className="mt-5 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Norman Aghedo is an IT support professional with a trainer&apos;s mindset. His background includes help desk support, desktop support, remote troubleshooting, Windows support, Microsoft Office support, SharePoint support, documentation, hardware setup, user accounts, and ticket resolution.
              </p>
              <p>
                Clients work directly with Norman for practical help, direct communication, useful documentation, and clear next steps when technology gets in the way of work.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="max-w-4xl">
            <SectionHeader eyebrow="Values" heading="A Service-Oriented Approach" />
            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
              Norman&apos;s approach is grounded in clear communication, patience, honesty, and reliable follow-through. His background has strengthened his commitment to effective communication, principled integrity, respect for others, and a strong work ethic. In client work, that shows up in practical ways: listening carefully, explaining concepts clearly, and creating notes people can reuse.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeader eyebrow="What clients can expect" heading="Support that respects the person behind the problem" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.slice(0, 4).map((value) => (
              <div key={value.title} className="border-t border-slate-200 pt-5">
                <h3 className="text-lg font-semibold text-slate-950">{value.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <TestimonialCarousel
        eyebrow="Recommendations"
        heading="What trusted colleagues can say"
        description="Use this section for real recommendations, references, or LinkedIn quotes as they come in."
      />

      <CTASection
        heading="Work with Norman"
        body="Get practical IT support with clear communication, patient guidance, and useful next steps."
        primaryLabel="Email Norman"
        primaryHref={`mailto:${CONTACT_EMAIL}`}
        secondaryLabel="See Experience"
        secondaryHref="/experience"
      />
    </>
  );
}
