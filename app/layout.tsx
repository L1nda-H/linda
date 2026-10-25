import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Linda | Personal Portfolio',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-sky-50`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
