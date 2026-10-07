import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { PortfolioPage } from '@/pages/Portfolio'
import { ServicePage } from '@/pages/ServicePage'
import { NotFound } from '@/pages/NotFound'
import { localizePath, readStoredLang, STORAGE_KEY } from '@/lib/locale'
import { services } from '@/data/services'
import i18n from '@/i18n'
import { createBrowserRouter, Outlet, redirect } from 'react-router-dom'

function locationTail(request) {
  const url = new URL(request.url)
  const hash = url.hash || window.location.hash || ''
  return `${url.search}${hash}`
}

function rootLoader({ request }) {
  const url = new URL(request.url)
  return redirect(`${localizePath(url.pathname, readStoredLang())}${locationTail(request)}`)
}

async function localeLoader({ params, request }) {
  const { lang } = params
  if (lang !== 'id' && lang !== 'en') {
    const url = new URL(request.url)
    return redirect(`${localizePath(url.pathname, readStoredLang())}${locationTail(request)}`)
  }

  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
  }

  const active = (i18n.resolvedLanguage || i18n.language || '').split('-')[0]
  if (active !== lang) await i18n.changeLanguage(lang)
  return { lang }
}

function layananLoader({ params }) {
  return redirect(`/${params.lang}/layanan/${services[0].slug}`)
}

function LocaleShell() {
  return <Outlet />
}

export const router = createBrowserRouter([
  { path: '/', loader: rootLoader },
  {
    path: '/:lang',
    loader: localeLoader,
    Component: LocaleShell,
    children: [
      {
        Component: Layout,
        children: [
          { index: true, Component: Home },
          { path: 'about', Component: About },
          { path: 'portofolio', Component: PortfolioPage },
          { path: 'layanan', loader: layananLoader },
          { path: 'layanan/:slug', Component: ServicePage },
          { path: '*', Component: NotFound },
        ],
      },
    ],
  },
])
