import About from '@/components/about'
import Intro from '@/components/intro'
import Projects from '@/components/projects'
import Experience from '@/components/experience'
import SectionDivider from '@/components/sectiondivider'
import Gallery from '@/components/gallery'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-sky-950">
      <Intro />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Gallery />
    </main>
  )
}
