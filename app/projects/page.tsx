import Projects from '@/components/projects'

export const metadata = {
  title: 'Projects | Linda',
}

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-sky-950 dark:text-sky-50">
      <Projects />
    </main>
  )
}
