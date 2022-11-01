import imgGifTravolta from '@assets/gifs/confused-travolta.gif'
import Layout from '@layouts/Layout'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import { useRouter } from 'next/router'

function Custom404() {
  const router = useRouter()
  return (
    <Layout>
      <section className="flex flex-col mt-8 items-center justify-center">
        <Image src={imgGifTravolta} alt="Manga 404" />
        <h1 className="text-center">🤖404 Not Found💩</h1>
        <div className="flex flex-col items-center">
          <Button shadow color="gradient" auto onClick={() => router.push('/')}>
            Go to Home
          </Button>
          <Button light color="secondary" auto onClick={() => router.back()}>
            Ir a página anterior
          </Button>
        </div>
      </section>
    </Layout>
  )
}
export default Custom404
