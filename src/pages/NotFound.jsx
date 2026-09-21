import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function NotFound() {
  const { t } = useTranslation()
  return (
    <Container className="py-24 text-center">
      <p className="text-6xl font-extrabold text-ink-900">404</p>
      <p className="mt-3 text-ink-500">{t('notFound.message')}</p>
      <Button to="/" className="mt-6">{t('notFound.back')}</Button>
    </Container>
  )
}
