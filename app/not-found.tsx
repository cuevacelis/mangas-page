'use client'

import imgGifTravolta from '@assets/gifs/confused-travolta.gif'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()
  return (
    <>
      <section className="flex flex-col mt-8 items-center justify-center">
        <Image src={imgGifTravolta} alt="Manga 404" />
        <h1 className="text-center">🤖404 Not Found💩</h1>
        <div className="flex flex-col items-center">
          <button color="gradient" onClick={() => router.push('/')}>
            Go to Home
          </button>
          <button color="secondary" onClick={() => router.back()}>
            Ir a página anterior
          </button>
        </div>
      </section>
    </>
  )
}
