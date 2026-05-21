import Link from "next/link";
import { CONTACT_EMAIL, navItems } from "@/lib/content";
import { Container } from "./ui";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Logo />
              <h4 className="flex text-center items-center justify-center text-md leading-4 font-bold text-blue-700">Norman<br/>Aghedo</h4>
            </Link>
            <p className="mt-4 max-w-sm leading-7 text-slate-600">
              Reliable freelance IT support for small teams, professionals, and organizations.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-950">Navigate</h2>
            <nav className="mt-4 grid gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-slate-600 hover:text-blue-700">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-950">Contact</h2>
            <a className="mt-4 inline-block font-semibold text-blue-700 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Support for computers, users, accounts, devices, and everyday tech problems.
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          Copyright {new Date().getFullYear()} Norman Aghedo. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
