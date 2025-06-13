export function CraftsmanshipSection() {
  return (
    <section className="bg-gray-50 dark:bg-neutral-800 py-16 md:py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
            Our craftsmanship
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-gray-900 dark:text-gray-100 px-4 transition-colors">
            Dolls made with the most advanced techniques
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-20">
          <div className="order-2 lg:order-1">
            <img
              src="https://ext.same-assets.com/1788609594/2601160062.jpeg"
              alt="Hand painting details"
              className="w-full h-[300px] md:h-[500px] object-cover minimal-rounded"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-900 dark:text-gray-100 mb-4 md:mb-6 transition-colors">
              We are vinyl crafting obsessed
            </h3>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4 md:mb-6 transition-colors">
              We love premium vinyl for its incredible durability, lifelike feel and of course aesthetic.
              Our dolls are made with the finest vinyl compounds, the same used by professional reborn
              artists and utilized in museum-quality collectibles. ALL of our dolls feature weighted
              limbs and bodies for added realism.
            </p>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
              Each doll undergoes a meticulous process of hand-painting, with multiple layers of
              specialized paints to achieve the most realistic skin tones and features.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="lg:order-2">
            <img
              src="https://ext.same-assets.com/1788609594/1427948257.jpeg"
              alt="Hair rooting process"
              className="w-full h-[300px] md:h-[500px] object-cover minimal-rounded"
            />
          </div>

          <div className="lg:order-1">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-900 dark:text-gray-100 mb-4 md:mb-6 transition-colors">
              Authentic hair rooting mastery
            </h3>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4 md:mb-6 transition-colors">
              Our hair rooting process uses only the finest mohair and human hair, individually
              rooted strand by strand to create the most natural appearance. This time-intensive
              process ensures each doll has unique personality and character.
            </p>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
              From newborn peach fuzz to full heads of curly locks, each doll's hair is carefully
              styled and finished to perfection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
