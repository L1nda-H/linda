import Gallery from '@/components/gallery'

export const metadata = {
  title: 'Gallery | Linda',
}

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-sky-950">
      <Gallery />
    </main>
  )
}
