export function CommunitySection() {
  return (
    <section className="bg-white dark:bg-neutral-900 py-16 md:py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
            Community
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-gray-900 dark:text-gray-100 mb-6 md:mb-8 px-4 transition-colors">
            Join the Rebecca's Reborns Collector Circle
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 transition-colors">
            Connect with fellow collectors and see our latest creations...
          </p>
        </div>

        <div className="flex justify-center items-center mb-8 md:mb-12">
          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center space-x-3 text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-3 md:p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-800"
            >
              <span className="text-base md:text-lg font-medium">Instagram</span>
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Instagram-style preview cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="aspect-square bg-gray-100 dark:bg-neutral-700 minimal-rounded overflow-hidden transition-colors group">
            <img
              src="https://ext.same-assets.com/1788609594/1093936682.jpeg"
              alt="Reborn doll showcase"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square bg-gray-100 dark:bg-neutral-700 minimal-rounded overflow-hidden transition-colors group sm:col-span-1 md:col-span-1">
            <img
              src="https://ext.same-assets.com/1788609594/186025156.jpeg"
              alt="Behind the scenes"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square bg-gray-100 dark:bg-neutral-700 minimal-rounded overflow-hidden transition-colors group sm:col-span-2 md:col-span-1">
            <img
              src="https://ext.same-assets.com/1788609594/809282869.jpeg"
              alt="Collector feature"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
