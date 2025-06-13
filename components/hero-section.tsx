import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-neutral-light)] to-white">
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-light tracking-tight text-[var(--color-primary)] sm:text-5xl md:text-6xl">
            Discover Premium
            <span className="block text-[var(--color-accent)]">Beauty Products</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-[var(--color-text-light)]">
            Experience luxury skincare and beauty essentials crafted for your daily routine.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/search"
              className="rounded-full bg-[var(--color-primary)] px-8 py-3 text-white transition-colors hover:bg-[var(--color-secondary)]"
            >
              Shop All Products
            </Link>
            <Link
              href="/search/new-arrivals"
              className="rounded-full border-2 border-[var(--color-primary)] px-8 py-3 text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-white"
            >
              New Arrivals
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
