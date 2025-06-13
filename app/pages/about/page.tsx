import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <div className="bg-white dark:bg-neutral-900 transition-colors">
      {/* Hero Section */}
      <section className="px-4 md:px-6 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 dark:text-gray-100 mb-6 md:mb-8 transition-colors">
            Rebecca's Reborns was born out of one woman's passion, a bit of artistry, and more than a little love.
          </h1>
        </div>
      </section>

      {/* Origin Story */}
      <section className="bg-gray-50 dark:bg-neutral-800 py-16 md:py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 dark:text-gray-100 mb-6 md:mb-8 transition-colors">
                Born from creativity
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 transition-colors">
                Our founder, Rebecca, a talented artist who discovered the world of reborn dolls in 2019. She quickly became fascinated with the intricate artistry and emotional connection these lifelike creations could bring to collectors and families alike.
              </p>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                What started as a personal hobby soon became a passion project, driven by the desire to create truly exceptional reborn dolls that capture the essence of real babies with unmatched attention to detail.
              </p>
            </div>
            <div>
              <img
                src="https://ext.same-assets.com/1788609594/3261960806.jpeg"
                alt="Rebecca at work"
                className="w-full h-[400px] md:h-[600px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-white dark:bg-neutral-900 py-16 md:py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://ext.same-assets.com/1788609594/51879043.jpeg"
                alt="The problem with mass-produced dolls"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 dark:text-gray-100 mb-6 md:mb-8 transition-colors">
                The problem
              </h2>
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4 transition-colors">
                Mass-produced dolls lack soul and artistry
              </h3>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                Why were reborn dolls either prohibitively expensive collectibles or cheap, lifeless mass-produced toys? Why couldn't there be a middle ground that offered true artistry, premium materials, and meticulous craftsmanship at an accessible price point? It didn't make sense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="bg-gray-50 dark:bg-neutral-800 py-16 md:py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 dark:text-gray-100 mb-6 md:mb-8 transition-colors">
                The solution
              </h2>
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4 transition-colors">
                Rebecca's Reborns
              </h3>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                So, Rebecca did what any self-respecting artist with a background in fine arts and a passion for bringing joy to families would do – she stepped in to solve the problem. Rebecca's Reborns emerged to fill a gap in the market for quality, affordable reborn dolls with a minimalist aesthetic and exceptional craftsmanship. We're here to make dolls that look as lifelike as they feel, without the pretense.
              </p>
            </div>
            <div>
              <img
                src="https://ext.same-assets.com/1788609594/686812820.jpeg"
                alt="Rebecca's solution"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="bg-white dark:bg-neutral-900 py-16 md:py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 dark:text-gray-100 mb-6 md:mb-8 transition-colors">
            The journey
          </h2>
          <h3 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-100 mb-8 transition-colors">
            Building something special
          </h3>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto transition-colors">
            Slowly, but surely our message is starting to resonate with collectors and families across the United States and beyond our borders. Each doll we create carries a piece of our story and becomes part of someone else's.
          </p>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="bg-gray-50 dark:bg-neutral-800 py-16 md:py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 dark:text-gray-100 mb-6 md:mb-8 transition-colors">
            Craftsmanship over all
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12 transition-colors">
            At Rebecca's, we're not about flash or hype. We're about the craft. Our dolls are designed to be functional art that doesn't need to shout. We're for the collectors who prefer elegance in subtlety, and we're bringing an accessible lineup that doesn't compromise on quality.
          </p>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 dark:bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                <div className="w-6 h-6 bg-white dark:bg-gray-900 rounded-full transition-colors"></div>
              </div>
              <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100 mb-2 transition-colors">
                Handcrafted
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 transition-colors">
                Every doll is meticulously hand-painted and detailed by skilled artisans
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 dark:bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                <div className="w-6 h-6 bg-white dark:bg-gray-900 rounded-full transition-colors"></div>
              </div>
              <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100 mb-2 transition-colors">
                Lifelike
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 transition-colors">
                Premium materials and techniques create incredibly realistic features
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 dark:bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                <div className="w-6 h-6 bg-white dark:bg-gray-900 rounded-full transition-colors"></div>
              </div>
              <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100 mb-2 transition-colors">
                Intentional
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 transition-colors">
                Every detail is carefully considered and purposefully crafted
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Doll */}
      <section className="bg-white dark:bg-neutral-900 py-16 md:py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <Link href="/search" className="group inline-block">
              <div className="relative">
                <img
                  src="https://ext.same-assets.com/1788609594/2065930630.jpeg"
                  alt="Featured reborn doll"
                  className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mx-auto mb-6 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 w-4 h-4 bg-gray-900 dark:bg-gray-100 rounded-full flex items-center justify-center transition-colors">
                  <svg width="8" height="8" viewBox="0 0 16 16" className="text-white dark:text-gray-900">
                    <path fill="currentColor" d="M8 1l2.5 5 5.5.5-4 4 1 5.5L8 13l-5 2.5 1-5.5-4-4 5.5-.5z"/>
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 transition-colors">Featured Creation</p>
              <p className="text-base md:text-lg text-gray-900 dark:text-gray-100 font-medium group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                Diamond shaped collection doll
              </p>
            </Link>
          </div>

          <div className="text-center">
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8 transition-colors">
              In the end, we look to expand globally, but our top priority is to help bring joy and artistry to families across the country where our founder's journey began – one high-quality, lovingly crafted doll at a time. No BS. Just exceptional reborn dolls for collectors who know what they want.
            </p>

            <Link
              href="/search"
              className="inline-block bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-8 py-3 text-base md:text-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors rounded-lg"
            >
              Shop our dolls
            </Link>
          </div>
        </div>
      </section>

      {/* Our Dolls Grid */}
      <section className="bg-gray-50 dark:bg-neutral-800 py-16 md:py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 dark:text-gray-100 mb-6 md:mb-8 transition-colors">
              Dolls in our collection
            </h2>
            <h3 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-100 mb-4 transition-colors">
              Find your perfect companion
            </h3>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto transition-colors">
              Made from the highest quality materials and latest technology used by professional reborn artists for a fraction of the price.
            </p>
            <Link
              href="/search"
              className="inline-block mt-6 text-gray-900 dark:text-gray-100 font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b border-gray-900 dark:border-gray-100 hover:border-gray-600 dark:hover:border-gray-300"
            >
              Shop online
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                image: "https://ext.same-assets.com/1788609594/1215880826.jpeg",
                name: "Galilea Dreams",
                description: "Ideal for collectors who appreciate fine details"
              },
              {
                image: "https://ext.same-assets.com/1788609594/2601160062.jpeg",
                name: "Anuk",
                description: "Perfect for those seeking lifelike realism"
              },
              {
                image: "https://ext.same-assets.com/1788609594/809282869.jpeg",
                name: "Luna",
                description: "Ideal for gentle nurturing and comfort"
              },
              {
                image: "https://ext.same-assets.com/1788609594/1427948257.jpeg",
                name: "Anisa",
                description: "Perfect for advanced collectors seeking artistry"
              }
            ].map((doll, index) => (
              <div key={index} className="group">
                <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4">
                  <img
                    src={doll.image}
                    alt={doll.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100 mb-2 transition-colors">
                  {doll.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">
                  {doll.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: 'About Us - Rebecca\'s Reborns',
  description: 'Learn about the story behind Rebecca\'s Reborns and our commitment to handcrafted, lifelike, and intentional reborn dolls.',
  openGraph: {
    title: 'About Us - Rebecca\'s Reborns',
    description: 'Learn about the story behind Rebecca\'s Reborns and our commitment to handcrafted, lifelike, and intentional reborn dolls.',
    type: 'website'
  }
};
