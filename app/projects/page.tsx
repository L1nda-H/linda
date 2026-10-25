import Projects from '@/components/projects'

export const metadata = {
  title: 'Projects | Linda',
}

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center px-5 pb-16 pt-24 text-sky-950 dark:text-sky-50 sm:px-8 lg:px-12">
      <Projects />
    </main>
  )
}
