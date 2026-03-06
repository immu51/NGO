import { Outlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import FloatingDonateButton from '../components/FloatingDonateButton'

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main className="pt-24">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingDonateButton />
    </div>
  )
}
