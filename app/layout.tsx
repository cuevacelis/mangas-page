import localFont from '@next/font/local'
import Link from 'next/link'
import './global.css'

interface RootLayoutProps {
  children: any
}

const myFont = localFont({
  src: [
    {
      path: '../assets/fonts/nf-icon-v1-93.woff'
    },
    {
      path: '../assets/fonts/nf-icon-v1-93.ttf'
    },
    {
      path: '../assets/fonts/nf-icon-v1-93.eot'
    }
  ],
  variable: '--font-nf'
})

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="es" dir="ltr">
      <body className={`${myFont.variable} font-sans bg-black antialiased`}>
        <main>{props.children}</main>
        <footer className="pt-8 [background:var(--nextui-colors-backgroundContrast)]">
          <section className="flex gap-4 flex-col justify-start px-8 py-2 md:flex-row md:gap-48 md:px-24">
            <ul className="m-0">
              <li>
                <p>Sitio</p>
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
                <p>Explorar</p>
              </li>
              <li>
                <Link href="/mangas">Biblioteca</Link>
              </li>
            </ul>

            <ul className="m-0">
              <li>
                <p>Contenido</p>
              </li>
              <li>
                <p>
                  La web no realiza las traducciones aquí realizadas y solo es
                  un repositorio con visor propio para que distintos grupos de
                  traducción puedan compartir sus propios proyectos de forma
                  pública y organizada para el disfrute de todos.
                </p>
              </li>
            </ul>
          </section>
        </footer>
      </body>
    </html>
  )
}
