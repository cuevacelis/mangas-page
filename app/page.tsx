import Carrousel from '@features/carrousel'
import Slider from '@features/slider/components/slider'

export default function Page(props: any) {
  return (
    <>
      <Carrousel />

      <section className="flex flex-col gap-8">
        <p className="text-white">En Tendencia</p>

        <Slider></Slider>
      </section>
    </>
  )
}
