import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 ">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              DETAILICA
            </p>

            <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-600">
              Architectural, structural and BIM support for international
              building and infrastructure projects.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-zinc-600 md:items-center">
            <Link href="/#services" className="transition hover:text-black">
              Services
            </Link>

            <Link href="/#projects" className="transition hover:text-black">
              Projects
            </Link>

            <Link href="/#about" className="transition hover:text-black">
              About
            </Link>

            <Link href="/#contact" className="transition hover:text-black">
              Contact
            </Link>
          </div>

          <div className="text-sm text-zinc-600 md:text-right">
            <a
              href="mailto:hello@detailica.com"
              className="block transition hover:text-black"
            >
              hello@detailica.com
            </a>

            <p className="mt-2">[Company Address]</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-200 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DETAILICA. All rights reserved.</p>

          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="transition hover:text-black"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal-information"
              className="transition hover:text-black"
            >
              Legal Information
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
