import Link from 'next/link';

interface Collection {
  title: string;
  href: string;
  description: string;
}

const collections: Collection[] = [
  {
    title: 'Babies Available',
    href: '/search/dolls',
    description: 'Immediate shipping - Ready to join your family'
  },
  {
    title: 'Babies On Order',
    href: '/search/new-arrivals',
    description: 'Personalize the baby of your dreams'
  },
  {
    title: 'Boutique',
    href: '/search/trending',
    description: 'Hours of play and fun with our accessories'
  },
  {
    title: 'Artist Corner',
    href: '/search/toys',
    description: 'Materials and courses for reborn artists'
  }
];

export function FeaturedCollections() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-satoshi text-4xl font-bold text-[var(--color-primary)] sm:text-5xl">
            Discover our babies
          </h2>
          <p className="font-elegant text-xl italic text-[var(--color-text-light)]">
            Click and we will send it to you!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection, index) => (
            <Link
              key={collection.title}
              href={collection.href}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="aspect-square bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 rounded-xl mb-6 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center">
                  <span className="text-white font-satoshi font-bold text-xl">
                    {index + 1}
                  </span>
                </div>
              </div>
              <h3 className="mb-3 font-satoshi text-xl font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                {collection.title}
              </h3>
              <p className="font-body text-[var(--color-text-light)] leading-relaxed">
                {collection.description}
              </p>

              {/* Arrow indicator */}
              <div className="absolute bottom-6 right-6 w-8 h-8 bg-[var(--color-accent)] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
