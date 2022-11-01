import imagePrincipal from '@assets/img/manga-principal.png'
import imageTitlePrincipal from '@assets/img/titulo.png'
import LayoutPrincipal from '@layouts/Layout'
import { Button, Text, Tooltip } from '@nextui-org/react'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Index(props: any) {
  const router = useRouter()

  return (
    <LayoutPrincipal>
      <NextSeo
        noindex
        title="Ver Mangas"
        description="🚀🚀🚀🚀🚀Bienvenido a Manga online, mira gratis weas"
      />

      <section className="flex flex-col gap-8">
        <section className="grid grid-cols-[1fr] sm:grid-cols-[2fr_1fr] pt-8 items-center [background:var(--nextui-colors-backgroundContrast)]">
          <div className="flex flex-col items-center text-center mb-10 sm:mb-0 pb-2">
            <Image
              priority
              src={imageTitlePrincipal}
              alt="titulo"
              className="h-full w-96"
            />
            <Text className="my-4 p-[0_10%]">
              Cuando su padre murió, Denji se vio obligado a saldar una gran
              deuda y no había forma de pagarla. Pero gracias a la ayuda de un
              Demonio Perro que salvó llamado Pochita, Denji es capaz de
              sobrevivir convirtiéndose en un Cazador Demonio a sueldo haciendo
              trabajos para los Yakuza. Los poderes motosierra de Pochita son
              útiles contra estos poderosos demonios.
            </Text>
            <div className="flex flex-row gap-2">
              <Tooltip
                content={'Todos los mangas 😎'}
                trigger="hover"
                rounded
                color="primary"
              >
                <Button
                  shadow
                  rounded
                  color="gradient"
                  auto
                  onClick={() => router.push('/mangas')}
                >
                  Ver Mangas
                </Button>
              </Tooltip>
              <Tooltip
                content={'Escribe tu comentario 😤'}
                rounded
                trigger="hover"
                color="secondary"
              >
                <Button
                  auto
                  color="secondary"
                  rounded
                  flat
                  onClick={() => router.push('/feedback')}
                >
                  Feedback
                </Button>
              </Tooltip>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              priority
              src={imagePrincipal}
              alt="manga  principal"
              className="h-full w-96"
            />
          </div>
        </section>

        <section className="grid grid-cols-1 gap-12 pb-4 md:grid-cols-4 mx-3 xl:mx-10 2xl:mx-40">
          <div className="sm:col-start-1 sm:col-span-3">
            {/* <UltimosSubidos dataUltimosSubidos={props.dataApiUltimosSubidos} /> */}
          </div>
          <div>
            {/* <MasRecomendados
              dataMasRecomendados={props.dataApiMasRecomendados}
            /> */}
          </div>
        </section>
      </section>
    </LayoutPrincipal>
  )
}
