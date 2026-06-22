export default function PrivacyPolicy() {
  return (
    <main className="bg-zinc-50 text-black">
      <section className="scroll-mt-8 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Subheading className="text-center">Privacy Policy</Subheading>

          <Heading as="h1" className="mt-2 text-center">
            How we handle your information.
          </Heading>

          <p className="mx-auto mt-6 max-w-2xl text-center text-sm/6 text-gray-600">
            This Privacy Policy explains how DETAILICA collects, uses, and
            protects information when you visit our website, contact us, or
            request architectural, structural, or BIM support services.
          </p>

          <div className="mx-auto mt-16 mb-32 max-w-xl space-y-12">
            <dl>
              <dt className="text-sm font-semibold">
                1. Information we collect
              </dt>
              <dd className="mt-4 text-sm/6 text-gray-600">
                We may collect information that you voluntarily provide through
                our website, contact forms, email communication, or project
                inquiries. This may include your name, email address, company
                name, phone number, project details, and any other information
                you choose to share with us.
              </dd>
            </dl>

            <dl>
              <dt className="text-sm font-semibold">
                2. How we use your information
              </dt>
              <dd className="mt-4 text-sm/6 text-gray-600">
                We use the information you provide to respond to inquiries,
                discuss potential collaboration, prepare project proposals,
                provide BIM and documentation services, manage communication,
                and improve our website and client experience.
              </dd>
            </dl>

            <dl>
              <dt className="text-sm font-semibold">
                3. Project-related information
              </dt>
              <dd className="mt-4 text-sm/6 text-gray-600">
                If you share project materials with us, such as drawings,
                models, specifications, schedules, or technical documentation,
                we use this information only for the purpose of reviewing,
                estimating, coordinating, or delivering the requested services.
                We treat project-related information as confidential.
              </dd>
            </dl>

            <dl>
              <dt className="text-sm font-semibold">4. Data sharing</dt>
              <dd className="mt-4 text-sm/6 text-gray-600">
                We do not sell your personal information. We may share
                information only when necessary to provide our services, comply
                with legal obligations, protect our rights, or work with trusted
                service providers who support our business operations.
              </dd>
            </dl>

            <dl>
              <dt className="text-sm font-semibold">5. Data security</dt>
              <dd className="mt-4 text-sm/6 text-gray-600">
                We take reasonable technical and organizational measures to
                protect personal and project-related information against
                unauthorized access, loss, misuse, or disclosure. However, no
                method of electronic transmission or storage is completely
                secure.
              </dd>
            </dl>

            <dl>
              <dt className="text-sm font-semibold">
                6. Cookies and website analytics
              </dt>
              <dd className="mt-4 text-sm/6 text-gray-600">
                Our website may use cookies or similar technologies to improve
                functionality, understand website usage, and enhance user
                experience. You can adjust your browser settings to refuse
                cookies or notify you when cookies are being used.
              </dd>
            </dl>

            <dl>
              <dt className="text-sm font-semibold">7. Data retention</dt>
              <dd className="mt-4 text-sm/6 text-gray-600">
                We retain personal and project-related information only for as
                long as necessary to fulfill the purposes described in this
                policy, provide services, maintain business records, or comply
                with legal and contractual obligations.
              </dd>
            </dl>

            <dl>
              <dt className="text-sm font-semibold">8. Your rights</dt>
              <dd className="mt-4 text-sm/6 text-gray-600">
                Depending on your location, you may have the right to request
                access to your personal information, ask for corrections,
                request deletion, or object to certain processing activities. To
                make a request, please contact us using the contact details
                provided on our website.
              </dd>
            </dl>

            <dl>
              <dt className="text-sm font-semibold">9. Third-party links</dt>
              <dd className="mt-4 text-sm/6 text-gray-600">
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices, content, or security
                of those external websites. We encourage you to review their
                privacy policies before providing any personal information.
              </dd>
            </dl>

            <dl>
              <dt className="text-sm font-semibold">
                10. Changes to this policy
              </dt>
              <dd className="mt-4 text-sm/6 text-gray-600">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated effective date.
                Continued use of our website after changes are published means
                you accept the updated policy.
              </dd>
            </dl>

            <dl>
              <dt className="text-sm font-semibold">11. Contact us</dt>
              <dd className="mt-4 text-sm/6 text-gray-600">
                If you have any questions about this Privacy Policy or how your
                information is handled, please contact us through the contact
                form or email address provided on the DETAILICA website.
              </dd>
            </dl>

            <p className="border-t border-gray-200 pt-8 text-xs/6 text-gray-500">
              Effective date: January 2026. This Privacy Policy is provided for
              general informational purposes and should be reviewed by a legal
              professional before publication.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Subheading({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={[
        "text-sm font-medium uppercase tracking-[0.22em] text-gray-500",
        className,
      ].join(" ")}
    >
      {children}
    </p>
  );
}

function Heading({
  as: Component = "h2",
  className = "",
  children,
}: {
  as?: "h1" | "h2" | "h3" | "div";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Component
      className={[
        "text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl",
        className,
      ].join(" ")}
    >
      {children}
    </Component>
  );
}
