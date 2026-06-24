"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
  privacy?: string;
  form?: string;
};

export function ContactSection() {
  const [errors, setErrors] = useState<Errors>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const privacy = formData.get("privacy");

    const newErrors: Errors = {};

    if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    if (!privacy) {
      newErrors.privacy = "You must agree to the Privacy Policy.";
    }

    setErrors(newErrors);
    setSuccessMessage("");

    if (Object.keys(newErrors).length > 0) return;

    try {
      setIsSending(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      form.reset();
      setSuccessMessage("Your message has been sent successfully.");
    } catch {
      setErrors({
        form: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  }

  const fieldClassName =
    "mt-4 block w-full border-0 border-b-2 border-gray-950 bg-transparent px-0 py-3 text-base text-gray-950 outline-none shadow-none placeholder:text-gray-400 focus:border-gray-400 focus:outline-none focus:ring-0 focus:shadow-none";

  const textareaClassName =
    "mt-4 block w-full resize-none border-0 border-b-2 border-gray-950 bg-transparent px-0 py-3 text-base text-gray-950 outline-none shadow-none placeholder:text-gray-500 focus:border-gray-400 focus:outline-none focus:ring-0 focus:shadow-none";

  return (
    <section className="bg-white px-4 py-24 text-gray-950 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <h1 className="max-w-xl text-6xl font-semibold tracking-tight text-balance sm:text-7xl lg:text-8xl">
            Let’s collaborate.
          </h1>

          <div className="mt-12 max-w-xl space-y-6 text-base leading-7 text-gray-700">
            <p>
              We provide architectural, structural, and BIM support for building
              and infrastructure projects.
            </p>

            <p>
              If you are looking for a reliable partner to support your project
              team with documentation, coordination, or technical delivery, send
              us a message.
            </p>
          </div>

          <div className="mt-12 text-sm leading-6">
            <p className="font-semibold text-[#D15052]">DETAILICA</p>
            <a
              href="mailto:hello@detailica.com"
              className="text-gray-950 underline underline-offset-4"
            >
              hello@detailica.com
            </a>
          </div>
        </div>

        <form className="w-full" onSubmit={handleSubmit} noValidate>
          <div className="space-y-10">
            <div>
              <label htmlFor="name" className="block text-lg font-medium">
                Name <span aria-hidden="true">*</span>
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className={fieldClassName}
              />

              {errors.name && (
                <p className="mt-2 text-sm text-[#D15052]">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium">
                Email <span aria-hidden="true">*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={fieldClassName}
              />

              {errors.email && (
                <p className="mt-2 text-sm text-[#D15052]">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium">
                Message <span aria-hidden="true">*</span>
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell us about your project, required support, timeline, or documentation scope."
                className={textareaClassName}
              />

              {errors.message && (
                <p className="mt-2 text-sm text-[#D15052]">
                  {errors.message}
                </p>
              )}
            </div>

            <div>
              <div className="flex gap-3">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  required
                  className="mt-1 size-4 border-gray-950 text-gray-950 outline-none shadow-none focus:outline-none focus:ring-0 focus:shadow-none"
                />

                <label
                  htmlFor="privacy"
                  className="text-sm leading-6 text-gray-700"
                >
                  I agree to the{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-medium text-gray-950 underline underline-offset-4"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              {errors.privacy && (
                <p className="mt-2 text-sm text-[#D15052]">
                  {errors.privacy}
                </p>
              )}
            </div>

            {successMessage && (
              <p className="text-sm text-gray-700">{successMessage}</p>
            )}

            {errors.form && (
              <p className="text-sm text-[#D15052]">{errors.form}</p>
            )}

            <button
              type="submit"
              disabled={isSending}
              className="inline-flex h-11 items-center justify-center border border-gray-950 bg-gray-950 px-6 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? "Sending..." : "Send message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}