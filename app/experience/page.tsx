import Experience from '@/components/experience'

export const metadata = {
  title: 'Experience | Linda',
}

export default function ExperiencePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-sky-950 dark:text-sky-50">
      <Experience />
    </main>
  )
}
