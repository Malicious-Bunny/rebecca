import { MinimalHero } from 'components/minimal-hero';
import { RebeccaDifference } from 'components/rebecca-difference';
import { MinimalProductShowcase } from 'components/minimal-product-showcase';
import { CraftsmanshipSection } from 'components/craftsmanship-section';
import { CommunitySection } from 'components/community-section';
import Footer from 'components/layout/footer';

export const metadata = {
  description:
    'Handcrafted reborn dolls with artisan quality. Rebecca\'s Reborns - where artistry meets intention.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <MinimalHero />

      <RebeccaDifference />

      <MinimalProductShowcase />

      <CraftsmanshipSection />

      <CommunitySection />

      <Footer />
    </>
  );
}
