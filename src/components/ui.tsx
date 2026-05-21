import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export function Container({
  children,
  className = "",
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function SectionHeader({
  eyebrow,
  heading,
  description,
  align = "left",
}: Readonly<{
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
}>) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{heading}</h2>
      {description ? <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p> : null}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: Readonly<{ href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "dark" }>) {
  const styles = {
    primary:
      "bg-blue-600 text-white shadow-sm shadow-blue-600/20 hover:bg-blue-700 focus-visible:outline-blue-600",
    secondary:
      "border border-slate-200 bg-white text-slate-950 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-blue-600",
    dark: "bg-white text-slate-950 hover:bg-slate-100 focus-visible:outline-white",
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}

export function IconCard({
  icon: Icon,
  title,
  description,
  href,
}: Readonly<{ icon: Icon; title: string; description: string; href?: string }>) {
  const body = (
    <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
      <span className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <h3 className="mt-5 text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
      {href ? <p className="mt-5 text-sm font-semibold text-blue-700">View service</p> : null}
    </div>
  );

  return href ? (
    <Link href={href} className="block h-full focus-visible:rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
      {body}
    </Link>
  ) : (
    body
  );
}

export function PageHero({ eyebrow, title, description }: Readonly<{ eyebrow: string; title: string; description: string }>) {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">{eyebrow}</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
        </div>
      </Container>
    </section>
  );
}

export function CTASection({
  heading,
  body,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: Readonly<{
  heading: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}>) {
  return (
    <section className="bg-slate-950 py-16 text-white sm:py-20">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{heading}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">{body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <ButtonLink href={primaryHref} variant="dark">
              {primaryLabel}
            </ButtonLink>
            {secondaryHref && secondaryLabel ? (
              <ButtonLink href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
