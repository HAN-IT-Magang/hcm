import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function NotFound() {
  const { t } = useTranslation()
  return (
    <Container className="py-24 text-center">
      <p data-gsap="zoom" className="type-display font-sans text-ink-900">404</p>
      <p data-gsap="fade" data-gsap-delay="0.1" className="type-body mt-3 font-sans text-ink-500">{t('notFound.message')}</p>
      <Button to="/" data-gsap="pop" data-gsap-delay="0.18" className="mt-6">{t('notFound.back')}</Button>
    </Container>
  )
}
