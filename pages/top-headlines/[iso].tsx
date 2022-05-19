import { GetStaticPaths, GetStaticProps } from 'next'

import { ISOS_CONSTANTS } from 'constants/isos.constants'
import { getTopHeadlines } from 'services/getTopHeadlines'
import { News } from 'types/news.type'
const CountryPage = ({ news }: News): JSX.Element => {
  if (news.status === 'error') {
    return <div>Opps error</div>
  }
  console.log(news)

  return (
    <div>
      <h1>Country Page</h1>
    </div>
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
