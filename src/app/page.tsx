import { CheckCircle2, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink, CTASection, Container, IconCard, SectionHeader } from "@/components/ui";
import { commonProblems, CONTACT_EMAIL, jobs, services, trustItems, values } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="w-full bg-slate-50 min-lg:h-[calc(100vh-5rem)] min-lg:w-screen min-lg:overflow-hidden">
        <Container className="grid gap-12 py-16 sm:py-20 min-lg:h-full min-lg:items-center min-lg:py-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl min-lg:text-5xl xl:text-6xl">
              Practical IT help when the computer is holding up the work.
            </h1>
            <p className="mt-6 max-w-2xl text-md leading-6 text-slate-700">
              Norman Aghedo is a help desk and desktop support professional who helps teams in healthcare, corporate, accounting, and education with Windows computers, Microsoft Office, printers, device setup, account access, and everyday technical problems.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`mailto:${CONTACT_EMAIL}`}>Email Norman</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                View Services
              </ButtonLink>
            </div>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline">
              <Mail aria-hidden="true" className="size-4" />
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="min-lg:max-h-[calc(100vh-10rem)]">
            <div className="relative aspect-[4/3] min-h-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-sm min-lg:aspect-[4/3] max-w-xl m-auto">
              <Image
                src="/norman.png"
                alt="Norman Aghedo"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, (min-width: 800px) 44vw, 100vw"
                className="object-cover object-[50%_24%]"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-10">
        <Container>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="grid gap-6 lg:grid-cols-[0.36fr_1fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Common requests</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950">Issues Norman can help sort out</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  No inflated promise. Send the issue and Norman will follow up with a practical next step.
                </p>
              </div>
              <ul className="grid gap-3 md:grid-cols-2">
                {commonProblems.map((problem) => (
                  <li key={problem} className="flex gap-3 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-green-700" />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white py-5">
        <Container className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item} className="text-sm font-semibold text-slate-700">
              {item}
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <SectionHeader
              eyebrow="Services"
              heading="Support for the usual problems that slow people down"
              description="Most technology problems do not need a huge contract or a dramatic process. They need someone careful enough to listen, check the basics, and explain the next step clearly."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {services.slice(0, 4).map((service) => (
                <IconCard key={service.title} icon={service.icon} title={service.title} description={service.description} href={service.href} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="How it feels"
              heading="Plain language, honest limits, steady follow-through"
              description="A good support experience should lower the stress level. Norman keeps the conversation direct, tells you what he can handle, and avoids pretending every issue is bigger than it is."
            />
            <div className="mt-8 grid gap-4">
              {values.slice(0, 3).map((value) => (
                <div key={value.title} className="border-l-4 border-blue-600 bg-white p-5">
                  <h3 className="font-semibold text-slate-950">{value.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Background</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-950">Not a resume site, but the experience matters.</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Before starting his own agency, Norman supported users in real help desk and desktop support roles. That experience shapes the way he handles small freelance requests now: listen first, check carefully, communicate clearly, and document what changed.
            </p>
            <div className="mt-6 grid gap-3">
              {jobs.slice(0, 4).map((job) => (
                <Link key={job.company} href="/experience" className="rounded-xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-slate-50">
                  <p className="font-semibold text-slate-950">{job.company}</p>
                  <p className="mt-1 text-sm text-slate-600">{job.role}</p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <Container>
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Values</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Service matters when tech problems are frustrating.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Norman&apos;s training as one of Jehovah&apos;s Witnesses has reinforced communication, honesty, patience, respect, and work ethic. Clients get clear answers, respectful support, and recommendations that match the actual problem.
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        heading="Need help with a technical issue?"
        body="Send the problem, the device type, and any error message you are seeing. Norman will review it and follow up with a clear next step."
        primaryLabel="Email Norman"
        primaryHref={`mailto:${CONTACT_EMAIL}`}
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
