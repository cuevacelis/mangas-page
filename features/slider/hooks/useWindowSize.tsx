import { useEffect, useState } from 'react'

interface Size {
  width?: number
  height?: number
}

export default function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined
  })

  function handleResize() {
    console.log('se llama')
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEffect(() => {
    console.log('entro console useEffect')
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return windowSize
}
