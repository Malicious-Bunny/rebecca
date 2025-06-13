import Link from 'next/link';

export function InsuranceSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white">
            <h2 className="font-satoshi text-5xl font-bold mb-6 leading-tight">
              Insurance of<br />
              repair<br />
              <span className="text-[var(--color-accent)]">GRATUITOUS</span>
            </h2>
            <p className="font-body text-lg mb-8 text-white/90">
              We want to take care of your baby as much as you do. That's why every Rebecca's Reborn
              comes with comprehensive repair insurance included at no extra cost.
            </p>
            <Link
              href="/warranty"
              className="inline-block rounded-full bg-white px-10 py-4 font-satoshi font-semibold text-[var(--color-primary)] transition-all hover:bg-[var(--color-neutral-light)] hover:shadow-2xl hover:scale-105 transform"
            >
              DISCOVER IT
            </Link>
          </div>

          {/* Right features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <div className="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-satoshi text-xl font-semibold mb-2">UNIQUE customer service</h3>
              <p className="font-body text-white/80">We are always with you, from the moment you choose your baby until you want.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <div className="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-satoshi text-xl font-semibold mb-2">Satisfaction Guarantee</h3>
              <p className="font-body text-white/80">Committed to your happiness, we are here to help you have the baby of your dreams.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <div className="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-satoshi text-xl font-semibold mb-2">Originality and transparency</h3>
              <p className="font-body text-white/80">Each baby comes with its certificate of originality.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <div className="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-satoshi text-xl font-semibold mb-2">FREE repair insurance</h3>
              <p className="font-body text-white/80">We are so convinced of our product that we will repair it for you for free!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
