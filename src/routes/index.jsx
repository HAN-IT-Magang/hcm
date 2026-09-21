import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'
import { Route, Routes } from 'react-router-dom'

/** Semua route terpusat — tambah page baru cukup tambah <Route> di sini */
export function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
