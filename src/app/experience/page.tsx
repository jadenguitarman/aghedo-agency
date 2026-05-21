import type { Metadata } from "next";
import { CTASection, Container, PageHero, SectionHeader } from "@/components/ui";
import { certifications, CONTACT_EMAIL, education, jobs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Professional IT Support Background",
  description:
    "Norman brings real-world help desk, desktop support, remote support, and user communication experience from professional environments where reliability matters.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="Professional IT Support Background"
        description="Norman brings real-world help desk, desktop support, remote support, and user communication experience from professional environments where reliability matters."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="relative grid gap-6">
            {jobs.map((job) => (
              <article key={job.company} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">{job.company}</p>
                    <h2 className="mt-3 text-2xl font-semibold text-slate-950">{job.role}</h2>
                    {job.dates ? <p className="mt-2 text-sm font-semibold text-slate-500">{job.dates}</p> : null}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ul className="grid gap-3 text-slate-600">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="rounded-xl bg-slate-50 px-4 py-3 leading-7">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader eyebrow="Education" heading="Education" />
              <div className="mt-8 grid gap-4">
                {education.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 font-medium text-slate-800 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader eyebrow="Certifications" heading="Certifications and Coursework" />
              <div className="mt-8 grid gap-4">
                {certifications.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 font-medium text-slate-800 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        heading="Need this experience on your side?"
        body="Bring in practical help desk and desktop support experience for the computer, user, account, and device issues slowing your work down."
        primaryLabel="Email Norman"
        primaryHref={`mailto:${CONTACT_EMAIL}`}
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
