import { Hero } from '@/components/home/hero'
import { Philosophy } from '@/components/home/philosophy'
import { CategoriesPreview } from '@/components/home/categories-preview'
import { CtaStrip } from '@/components/home/cta-strip'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <CategoriesPreview />
      <CtaStrip />
    </>
  )
}
