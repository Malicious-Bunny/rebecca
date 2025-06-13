export function RebeccaDifference() {
  return (
    <section className="bg-gray-50 dark:bg-neutral-800 py-12 md:py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
            The Rebecca difference
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-light tracking-tight text-gray-900 dark:text-gray-100 px-4 transition-colors">
            Craft. Care. Unmatched.
            <br />
            Meet Rebecca's Reborns.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://ext.same-assets.com/1788609594/1215880826.jpeg"
              alt="Reborn doll crafting"
              className="w-full h-[400px] md:h-[600px] object-cover minimal-rounded"
            />
          </div>

          <div className="space-y-6 md:space-y-8 order-1 md:order-2">
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
              Rebecca's Reborns was born in 2022, in the heart of artisan craftsmanship.
              Built for a community of passionate collectors who demanded high-quality reborn dolls
              that would fit their sophisticated taste and didn't break the bank.
            </p>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-900 dark:bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 transition-colors">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-white dark:bg-gray-900 rounded-full transition-colors"></div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100 mb-2 transition-colors">Handcrafted</h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 transition-colors">
                    Our dolls feature meticulous hand-painting and rooting, perfect for those who
                    prefer artistry with authentic details.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-900 dark:bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 transition-colors">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-white dark:bg-gray-900 rounded-full transition-colors"></div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100 mb-2 transition-colors">All Collectors</h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 transition-colors">
                    All our dolls are suitable for collectors of all levels, from beginners
                    to advanced enthusiasts.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-900 dark:bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 transition-colors">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-white dark:bg-gray-900 rounded-full transition-colors"></div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100 mb-2 transition-colors">Quality</h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 transition-colors">
                    Our dolls feature the highest quality materials including premium vinyl,
                    mohair, and weighted bodies for ultimate realism.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
