import About from '@/components/about'
import Intro from '@/components/intro'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-sky-950 dark:text-sky-50">
      <Intro />
      <About />
    </main>
  )
}
