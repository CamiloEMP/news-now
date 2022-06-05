/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps } from 'next'

import { ISOS_CONSTANTS } from 'constants/isos.constants'
import { getTopHeadlines } from 'services/getTopHeadlines'
import { News } from 'types/news.type'
import { New } from 'components/new'

const CountryPage = ({ news }: News): JSX.Element => {
  if (news.status === 'error') {
    return <div>Opps error</div>
  }

  const firstSection = news.articles.slice(0, 2)
  const secondSection = news.articles.slice(2, 3)
  const thirdSection = news.articles.slice(3, 5)
  const restSection = news.articles.slice(5)

  return (
    <main className="mt-8 px-8">
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center gap-8">
        <section className="flex flex-col gap-4 md:col-span-2 md:flex-row xl:flex-col xl:col-span-1">
          {firstSection.map(article => (
            <New key={article.source.id} article={article} containerClass="md:w-96 xl:h-96" />
          ))}
        </section>
        <section className="flex justify-center md:col-span-2 md:mb-16 md:h-80 xl:col-span-2 xl:h-full xl:mb-0">
          {secondSection.map(article => (
            <New
              key={article.source.id}
              article={article}
              containerClass="md:w-2/3 xl:w-full xl:h-3/4"
              imageClass="lg:h-full xl:object-contain"
            />
          ))}
        </section>
        <section className="flex flex-col gap-4 md:flex-row md:col-span-2 xl:flex-col xl:col-span-1">
          {thirdSection.map(article => (
            <New key={article.source.id} article={article} containerClass="md:w-96 xl:h-96" />
          ))}
        </section>
      </section>
      <section className="flex flex-wrap gap-8 justify-center mt-16">
        {restSection.map(article => (
          <New key={article.source.id} article={article} containerClass="md:w-96 xl:h-96" />
        ))}
      </section>
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ISOS_CONSTANTS.map(iso => ({
    params: { iso: iso.code },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const news = await getTopHeadlines(params?.iso as string)

  return {
    props: {
      news,
    },
  }
}

export default CountryPage
