'use client'

// 'use client' marca esta página como un componente de cliente
// https://beta.nextjs.org/docs/rendering/server-and-client-components

import { useEffect } from 'react'

export default function Error({
  error,
  reset
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Registre el error en un servicio de informes de errores
    console.error(error)
  }, [error])

  return (
    <section className="flex flex-col w-screen h-screen items-center justify-center">
      <p>¡Algo salió mal!</p>
      <button onClick={() => reset()}>Restablecer límite de error</button>
    </section>
  )
}
