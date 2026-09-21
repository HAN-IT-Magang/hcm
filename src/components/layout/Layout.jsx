import { useReveal } from '@/hooks/useReveal'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { FloatingWhatsApp } from '../ui/FloatingWhatsApp'

export function Layout({ children }) {
  useReveal()
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="overflow-x-hidden flex-1 flex flex-col">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <FloatingWhatsApp />
    </div>
  )
}
