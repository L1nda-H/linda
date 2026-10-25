import Gallery from '@/components/gallery'

export const metadata = {
  title: 'Gallery | Linda',
}

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center px-4 pb-16 pt-24 text-sky-950 dark:text-sky-50 sm:px-6 lg:px-10">
      <Gallery />
    </main>
  )
}
