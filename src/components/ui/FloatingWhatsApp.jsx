import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/config/site'

export function FloatingWhatsApp() {
  const { i18n } = useTranslation()
  const isEn = i18n.language === 'en'
  const [hovered, setHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Show button when scrolled past Hero section (e.g., 400px)
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const message = isEn
    ? 'Hello HCM, I want to scale my e-commerce brand.'
    : 'Halo HCM, saya mau konsultasi untuk scale brand e-commerce saya.'

  const waUrl = `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(message)}`

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-4"
          initial={{ y: -100, opacity: 0 }} // "Jatuh dari atas"
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0 }} // "Terjun ke bawah"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div
            className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFFFFF] border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] text-[#00104D] text-xs font-montserrat font-bold uppercase tracking-wide transition-all duration-300 ${
              hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
            }`}
          >
            <span className="w-3 h-3 rounded-full bg-[#25D366] border-2 border-[#00104D] animate-pulse" />
            <span>{isEn ? 'Chat with HCM Growth Team' : 'Konsultasi Gratis di WhatsApp'}</span>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#00104D] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-200"
            aria-label="Chat via WhatsApp"
          >
            <svg className="w-7 h-7 fill-white relative z-10 drop-shadow-[2px_2px_0_rgba(0,16,77,1)]" viewBox="0 0 24 24">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.8 11.64c-.26-.13-1.56-.77-1.8-.86-.24-.09-.42-.13-.6.13-.17.26-.69.86-.84 1.04-.16.17-.31.2-.57.07-.26-.13-1.1-.4-2.09-1.29-.77-.69-1.3-1.54-1.45-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.31.39-.46.13-.16.17-.26.26-.44.09-.17.04-.33-.02-.46-.07-.13-.6-1.45-.82-1.99-.22-.52-.44-.45-.6-.46-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.33-.24.26-.94.92-.94 2.24s.96 2.6 1.1 2.78c.13.17 1.9 2.9 4.61 4.07.65.28 1.15.44 1.54.57.65.21 1.25.18 1.72.11.52-.08 1.56-.64 1.78-1.25.22-.61.22-1.13.15-1.25-.07-.11-.25-.18-.51-.31z" />
            </svg>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
