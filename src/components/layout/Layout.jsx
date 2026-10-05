import { Outlet } from 'react-router-dom'
import { useGsapReveal } from '@/hooks/useGsapReveal'
import { useSeo } from '@/hooks/useSeo'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { FloatingWhatsApp } from '../ui/FloatingWhatsApp'

export function Layout() {
  useGsapReveal()
  useSeo()
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="overflow-x-hidden flex-1 flex flex-col">
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <FloatingWhatsApp />
    </div>
  )
}
