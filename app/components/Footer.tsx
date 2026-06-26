"use client";

import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

const links = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/legal-information", label: "Legal Information" },
];

/* ---------- decorative plus-grid ---------- */

function PlusGridIcon({
  placement,
  className = "",
}: {
  placement: `${"top" | "bottom"} ${"left" | "right"}`;
  className?: string;
}) {
  const [yAxis, xAxis] = placement.split(" ");

  return (
    <svg
      viewBox="0 0 15 15"
      aria-hidden="true"
      className={clsx(
        "absolute size-3.75 fill-black/10",
        yAxis === "top" ? "-top-2" : "-bottom-2",
        xAxis === "left" ? "-left-2" : "-right-2",
        className,
      )}
    >
      <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
    </svg>
  );
}

function PlusGridItem({
  className = "",
  showBottomIcons = false,
  children,
}: {
  className?: string;
  showBottomIcons?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={clsx("group/item relative flex h-full", className)}>
      <PlusGridIcon
        placement="top left"
        className="hidden group-first/item:block"
      />
      <PlusGridIcon placement="top right" />

      {showBottomIcons && (
        <>
          <PlusGridIcon
            placement="bottom left"
            className="hidden group-first/item:block"
          />
          <PlusGridIcon placement="bottom right" />
        </>
      )}

      {children}
    </div>
  );
}

function PlusGridRow({
  className = "",
  showTopLines = true,
  showBottomLines = false,
  children,
}: {
  className?: string;
  showTopLines?: boolean;
  showBottomLines?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        "group/row relative isolate",
        showTopLines && "pt-[calc(var(--spacing)*2+1px)]",
        showBottomLines && "pb-[calc(var(--spacing)*2+1px)]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2"
      >
        {showTopLines && (
          <>
            <div className="absolute inset-x-0 top-0 border-t border-black/10" />
            <div className="absolute inset-x-0 top-2 border-t border-black/10" />
          </>
        )}

        {showBottomLines && (
          <>
            <div className="absolute inset-x-0 bottom-0 border-b border-black/10" />
            <div className="absolute inset-x-0 bottom-2 border-b border-black/10" />
          </>
        )}
      </div>

      {children}
    </div>
  );
}

function PlusGrid({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={clsx("relative", className)}>{children}</div>;
}

/* ---------- footer nav (always expanded, same style as header DesktopNav) ---------- */

function FooterNav() {
  const pathname = usePathname();

  return (
    <nav className="relative flex h-full flex-wrap items-stretch gap-x-1 gap-y-1 lg:flex-nowrap lg:justify-end">
      {links.map(({ href, label }) => {
        const active = pathname === href;

        return (
          <PlusGridItem key={href} showBottomIcons className="flex">
            <Link
              href={href}
              aria-current={active ? "page" : undefined}
              className={clsx(
                "flex items-center px-4 py-3 text-base font-medium transition-colors hover:bg-black/2.5",
                active ? "text-gray-950" : "text-gray-600 hover:text-gray-950",
              )}
            >
              {label}
            </Link>
          </PlusGridItem>
        );
      })}
    </nav>
  );
}

/* ---------- footer ---------- */

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <PlusGrid>
          <PlusGridRow showBottomLines>
            <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:justify-between">
              <PlusGridItem className="py-3">
                <Link href="/" title="Home" className="flex items-center">
                  <Image
                    src="/logo-line.svg"
                    alt="Logo"
                    width={80}
                    height={26}
                    className="h-5 w-auto sm:h-6"
                    priority
                  />
                </Link>
              </PlusGridItem>

              <FooterNav />
            </div>
          </PlusGridRow>
          <div>
            <div className="flex flex-col gap-6 pt-16 py-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-col gap-2">
                <p>
                  © {new Date().getFullYear()} DETAILICA. All rights reserved.
                </p>

                <a
                  href="https://dvi.example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 transition hover:text-gray-600"
                  aria-label="Designed and developed by DVI"
                >
                  <span>Designed and developed by</span>
                  {"  "}
                  <Image
                    src="/dvi.png"
                    alt="DVI"
                    width={60}
                    height={16}
                    className="h-5 w-auto"
                  />
                </a>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3 sm:justify-start pr-6">
                {legalLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="transition hover:text-gray-400"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </PlusGrid>
      </div>
    </footer>
  );
}
