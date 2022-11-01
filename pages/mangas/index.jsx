import LayoutPrincipal from '@layouts/Layout'
import { Text } from '@nextui-org/react'
import { NextSeo } from 'next-seo'

function MangasPage(props) {
  return (
    <LayoutPrincipal>
      <NextSeo
        noindex
        title="Todos los mangas | Manga"
        description="En esta sección encontrarás todos los Mangas"
      />
      <section className="pt-2 pb-4 flex flex-col items-center xl:py-8 [background:var(--nextui-colors-backgroundContrast)]">
        <Text
          h1
          className="text-center mt-2"
          css={{
            textGradient: '45deg, $blue600 -20%, $pink600 50%'
          }}
          weight="bold"
        >
          Todos los Mangas 📎
        </Text>
      </section>

      <section className="mx-3 xl:mx-10 2xl:mx-40 pt-4">
        <p className="font-semibold text-2xl">
          {props?.dataMangasFiltering?.totalElements} resultados 🧐
        </p>
        <section className="flex flex-row flex-wrap items-center justify-center gap-6 pt-4">
          {/* <SearchManga className="mb-4" {...parammetersChild} />
          <FiltersFromMangas {...parammetersChild} /> */}
        </section>

        {/* <ListFromMangasFiltering {...parammetersChild} /> */}
        <div className="flex justify-center my-5 overflow-x-auto">
          {/* <Pagination
            initialPage={Number(props.dataMangasFiltering.pageActual)}
            total={Number(props.dataMangasFiltering.totalPages)}
            animated={false}
            onChange={changePagination}
            size={'md'}
            controls={false}
          /> */}
        </div>
      </section>
    </LayoutPrincipal>
  )
}

export default MangasPage
