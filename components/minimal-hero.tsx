import Link from 'next/link';

export function MinimalHero() {
  return (
    <section className="relative bg-white dark:bg-neutral-900 py-16 md:py-24 px-4 md:px-6 text-center transition-colors overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48">
          <img
            src="https://ext.same-assets.com/1788609594/1215880826.jpeg"
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute top-20 right-16 w-24 h-24 md:w-36 md:h-36">
          <img
            src="https://ext.same-assets.com/1788609594/2601160062.jpeg"
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute bottom-16 left-20 w-28 h-28 md:w-40 md:h-40">
          <img
            src="https://ext.same-assets.com/1788609594/809282869.jpeg"
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute bottom-20 right-10 w-20 h-20 md:w-32 md:h-32">
          <img
            src="https://ext.same-assets.com/1788609594/1427948257.jpeg"
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24">
          <img
            src="https://ext.same-assets.com/1788609594/1093936682.jpeg"
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Large minimal logo/brand */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light tracking-tighter text-gray-900 dark:text-gray-100 mb-2 md:mb-4 transition-colors">
            REBECCA'S
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light tracking-tighter text-gray-900 dark:text-gray-100 transition-colors">
            REBORNS
          </h2>
        </div>

        {/* Hero tagline */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-light tracking-wide text-gray-900 dark:text-gray-100 mb-4 px-4 transition-colors">
            Handcrafted.Lifelike.Intentional.
          </h3>
        </div>

        {/* CTA */}
        <div>
          <Link
            href="/search"
            className="inline-block bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-6 md:px-8 py-3 text-base md:text-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors minimal-button"
          >
            Shop our dolls
          </Link>
        </div>
      </div>
    </section>
  );
}
