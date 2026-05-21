import type { Metadata } from "next";
import { CTASection, ButtonLink, Container, PageHero, SectionHeader } from "@/components/ui";
import { CONTACT_EMAIL, packages, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Freelance IT Support Services",
  description:
    "Remote IT support, computer setup, account access help, hardware support, technology training, and help desk support for small teams and professionals.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Freelance IT Support Services"
        description="Practical support for common technology problems, small business needs, remote workers, and teams that need reliable help without hiring a full-time IT department."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-6">
            {services.map((service) => (
              <article key={service.id} id={service.id} className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <span className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <service.icon aria-hidden="true" className="size-6" />
                    </span>
                    <h2 className="mt-5 text-2xl font-semibold text-slate-950">{service.title}</h2>
                    <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                    <div className="mt-6">
                      <ButtonLink href={`mailto:${CONTACT_EMAIL}`} variant="secondary">
                        Email Norman
                      </ButtonLink>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-5">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Examples</h3>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {service.examples.map((example) => (
                        <li key={example} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeader eyebrow="Packages" heading="Simple Ways to Get Help" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {packages.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <item.icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                <h4 className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Best for</h4>
                <ul className="mt-3 grid gap-2 text-sm text-slate-600">
                  {item.bestFor.map((bestFor) => (
                    <li key={bestFor}>{bestFor}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        heading="Not Sure Which Service Fits?"
        body="Send a short description of the problem. Norman can help identify the best next step or tell you honestly if the issue requires another type of specialist."
        primaryLabel="Email Norman"
        primaryHref={`mailto:${CONTACT_EMAIL}`}
        secondaryLabel="About Norman"
        secondaryHref="/about"
      />
    </>
  );
}
