'use client'

import imagePrincipal from '@assets/img/manga-principal.png'
import imageTitlePrincipal from '@assets/img/titulo.png'
import Image from 'next/image'

export default function Carrousel() {
  return (
    <section className="grid grid-cols-[1fr] sm:grid-cols-[1fr_409px] px-[153px] items-center">
      <div className="flex flex-col items-center text-center">
        <Image
          priority
          className="w-full"
          src={imageTitlePrincipal}
          alt="titulo"
        />
        <p className="text-white">
          Cuando su padre murió, Denji se vio obligado a saldar una gran deuda y
          no había forma de pagarla. Pero gracias a la ayuda de un Demonio Perro
          que salvó llamado Pochita, Denji es capaz de sobrevivir convirtiéndose
          en un Cazador Demonio a sueldo haciendo trabajos para los Yakuza. Los
          poderes motosierra de Pochita son útiles contra estos poderosos
          demonios.
        </p>
      </div>
      <div className="flex justify-center">
        <Image
          priority
          className="w-full"
          src={imagePrincipal}
          alt="manga principal"
        />
      </div>
    </section>
  )
}
