'use client';

import { HeroSection, TrustSection } from './sections';
import { section } from './index.css';
import { Header } from '@/components';

export default function Index() {
  return (
    <div>
      <Header />
      <section className={section.hero}>
        <HeroSection />
      </section>
      <TrustSection />
    </div>
  );
}
