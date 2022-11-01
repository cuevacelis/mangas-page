import { Text } from '@nextui-org/react'
import Link from 'next/link'

export default function Footer(props) {
  return (
    <footer className="pt-8 [background:var(--nextui-colors-backgroundContrast)]">
      <section className="flex gap-4 flex-col justify-start px-8 py-2 md:flex-row md:gap-48 md:px-24">
        <ul className="m-0">
          <li>
            <Text size={20}>Sitio</Text>
          </li>
          <li>
            <Link href="/feedback">Colaborar</Link>
          </li>
          <li>
            <Link href="/privacy">Privacidad</Link>
          </li>
        </ul>

        <ul className="m-0">
          <li>
            <Text size={20}>Explorar</Text>
          </li>
          <li>
            <Link href="/mangas">Biblioteca</Link>
          </li>
        </ul>

        <ul className="m-0">
          <li>
            <Text size={20}>Contenido</Text>
          </li>
          <li>
            <Text>
              La web no realiza las traducciones aquí realizadas y solo es un
              repositorio con visor propio para que distintos grupos de
              traducción puedan compartir sus propios proyectos de forma pública
              y organizada para el disfrute de todos.
            </Text>
          </li>
        </ul>
      </section>
    </footer>
  )
}
