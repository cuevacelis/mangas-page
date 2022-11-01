import imgCard1 from '@assets/img/card-example1.jpeg'
import imgCard2 from '@assets/img/card-example2.jpeg'
import imgCard3 from '@assets/img/card-example3.jpeg'
import Layout from '@layouts/Layout'
import { Button, Card, Col, Text, Textarea } from '@nextui-org/react'
import { NextSeo } from 'next-seo'
import Image from 'next/image'

export const Card1 = () => (
  <Card css={{ w: '100%', h: '350px' }}>
    <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          ¿Qué ver?
        </Text>
        <Text h4 color="white">
          Contribuye con recomendaciones
        </Text>
      </Col>
    </Card.Header>
    <Image
      src={imgCard1}
      fill
      className="object-cover"
      alt="contenido manga "
      placeholder="blur"
    />
  </Card>
)

export const Card2 = () => (
  <Card css={{ w: '100%', h: '350px' }}>
    <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Retroalimentación
        </Text>
        <Text h4 color="white">
          Tú sugerencia ó comentario nos ayuda.
        </Text>
      </Col>
    </Card.Header>
    <Image
      fill
      src={imgCard2}
      className="object-cover"
      alt="feedback manga "
      placeholder="blur"
    />
  </Card>
)

export const Card3 = () => (
  <Card css={{ w: '100%', h: '350px' }}>
    <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Interfaz
        </Text>
        <Text h4 color="white">
          Ayudanos a crear interfaces geniales.
        </Text>
      </Col>
    </Card.Header>
    <Image
      src={imgCard3}
      fill
      className="object-cover"
      alt="interfaz manga "
      placeholder="blur"
    />
  </Card>
)

export default function FeedbackPage(props) {
  return (
    <Layout>
      <NextSeo
        title="Feedback | Manga "
        description="Ayudanos a mejorar deja tu feddback :)"
      />
      <section className="text-center [background:var(--nextui-colors-backgroundContrast)] pt-4">
        <div>
          <Text
            h1
            size={80}
            css={{
              textGradient: '45deg, $blue600 -20%, $pink600 50%'
            }}
            className="m-0"
            weight="bold"
          >
            Ayudanos
          </Text>
          <Text
            h1
            size={80}
            css={{
              textGradient: '45deg, $purple600 -20%, $pink600 100%'
            }}
            className="m-0"
            weight="bold"
          >
            a mejorar
          </Text>

          <Text className="my-6 text-[#666]" size="1.25rem">
            Póngase en contacto y háganos saber cómo podemos ayudar🤖🚀.
          </Text>
        </div>

        <div className="grid justify-center gap-8 mx-10 pb-8 [grid-template-columns:repeat(auto-fit,_minmax(250px,_1fr))]">
          <div>
            <Card1 />
          </div>
          <div>
            <Card2 />
          </div>
          <div>
            <Card3 />
          </div>
        </div>
      </section>

      <section className="[background:var(--nextui-colors-background)] px-2 pt-8 pb-12 text-center">
        <Text className="my-6" size="1.25rem">
          Dejenos un comentario y háganos saber cómo podemos mejorar.
        </Text>
        <div className="max-w-lg m-auto">
          <Textarea
            id="text-area-comments"
            aria-labelledby="feedback"
            className="shadow-md"
            width="100%"
            status={'default'}
            helperColor={'default'}
            placeholder="Ingresa tú comentario 🦁☕⚡✍."
          />
          <Button className="mt-6 ml-auto" color="gradient" size="lg" auto>
            Enviar ✈
          </Button>
        </div>
      </section>
    </Layout>
  )
}
