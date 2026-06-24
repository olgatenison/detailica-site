export default function LegalInformation() {
  return (
    <main className="bg-zinc-50 text-black">
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-gray-500 text-center">
            Legal Information
          </p>

          <h1 className="mt-2 text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            Company Information
          </h1>

          <div className="mt-16 space-y-8 text-sm leading-7 text-gray-600">
            <div>
              <h2 className="font-semibold text-black">Company Name</h2>
              <p>DETAILICA OÜ</p>
            </div>

            <div>
              <h2 className="font-semibold text-black">
                Registration Number
              </h2>
              <p>[Registration Number]</p>
            </div>

            <div>
              <h2 className="font-semibold text-black">VAT Number</h2>
              <p>[VAT Number]</p>
            </div>

            <div>
              <h2 className="font-semibold text-black">
                Registered Address
              </h2>
              <p>[Company Address]</p>
            </div>

            <div>
              <h2 className="font-semibold text-black">Email</h2>
              <p>hello@detailica.com</p>
            </div>

            <div>
              <h2 className="font-semibold text-black">
                Responsible for Website Content
              </h2>
              <p>DETAILICA OÜ</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}