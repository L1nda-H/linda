import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import ThemeToggle from '@/components/theme-toggle'
import Script from 'next/script'

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
    <html lang="en" className='!scroll-smooth' suppressHydrationWarning>
      <body className={`${inter.className} bg-sky-50 text-sky-950 dark:bg-[#1E233B] dark:text-sky-50`}>
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{var t=localStorage.getItem('theme');if(t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}`}
        </Script>
        <Header />
        {children}
        <Footer />
        <ThemeToggle />
      </body>
    </html>
  )
}
