import Prose from 'components/prose';
import { VendorContact } from 'components/vendor-contact';
import { Product } from 'lib/shopify/types';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  const price = parseFloat(product.priceRange.maxVariantPrice.amount);

  return (
    <div className="space-y-8">
      {/* Product Title */}
      <div>
        <h1 className="text-4xl font-light tracking-tight text-gray-900 dark:text-gray-100 mb-4 transition-colors">
          {product.title}
        </h1>
        <div className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-6 transition-colors">
          ${price.toFixed(0)}
        </div>
      </div>

      {/* Description */}
      <div>
        {product.descriptionHtml ? (
          <div className="prose prose-lg text-gray-600 dark:text-gray-400 max-w-none transition-colors">
            <Prose html={product.descriptionHtml} />
          </div>
        ) : (
          <div className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
            <p>This doll is designed for collectors who appreciate authentic craftsmanship and are looking for a piece that provides exceptional realism. The detailed hand-painting naturally facilitates lifelike features, making it perfect for display or nurturing play.</p>
            <p className="mt-4">The premium vinyl construction helps create incredible durability and realistic feel during handling. Each doll is individually crafted with attention to detail, which is ideal for collectors who value uniqueness and quality.</p>
          </div>
        )}
      </div>

      {/* Product Details */}


      {/* Variant Selector */}
      <VariantSelector options={product.options} variants={product.variants} />

      {/* Vendor Contact */}
      <VendorContact />
    </div>
  );
}
