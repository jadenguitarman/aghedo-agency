"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CONTACT_EMAIL, navItems } from "@/lib/content";
import { Container } from "./ui";
import { Logo } from "./logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 focus-visible:rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600" onClick={() => setOpen(false)}>
          <Logo />
          <h4 className="flex text-center items-center justify-center text-md leading-4 font-bold text-blue-700">Norman<br/>Aghedo</h4>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition hover:text-blue-700 focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 ${
                pathname === item.href ? "text-blue-700" : "text-slate-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex min-h-11 items-center rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Email Norman
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-xl border border-slate-200 text-slate-950 md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <Container className="py-4">
            <nav aria-label="Mobile navigation" className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-slate-800 hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={`mailto:${CONTACT_EMAIL}`}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex min-h-11 items-center justify-center rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white"
              >
                Email Norman
              </Link>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
