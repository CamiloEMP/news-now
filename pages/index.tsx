import { GetStaticProps, GetStaticPaths } from 'next'

import { News } from 'types/news.type'
import { getTopHeadlines } from 'services/getTopHeadlines'
import { ISOS_CONSTANTS } from 'constants/isos.constants'
import { useCity } from 'hooks/useCity'

const Home = (): JSX.Element => {
  const { setCity } = useCity()

  return (
    <section className="mt-8 flex flex-col items-center gap-6">
      <div>
        <h2 className="text-5xl font-heading lg:text-6xl text-center mb-8">Select a city</h2>
        <section className="flex items-center justify-center max-w-3xl flex-wrap gap-8">
          {ISOS_CONSTANTS.map(iso => (
            <article
              key={iso.code}
              className="flex flex-col justify-center items-center border-2 rounded-lg w-52 pt-4 pb-8 cursor-pointer gap-4 hover:bg-gray-200"
              onClick={() => setCity(iso.code)}
            >
              <span className="text-3xl font-heading text-center">{iso.name}</span>
              <span className="scale-[2.2]">{iso.icon}</span>
            </article>
          ))}
        </section>
      </div>
      <span className="text-3xl font-heading lg:text-4xl">or</span>
      <div>
        {/*TODO: make the input for use the api with everything  */}
        <h2 className="text-5xl font-heading lg:text-6xl">Search any something</h2>
        <input placeholder="here" type="text" />
      </div>
    </section>
  )
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = ISOS_CONSTANTS.map(iso => ({
//     params: { iso: iso.code },
//   }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const news = await getTopHeadlines(params?.iso as string)

//   return {
//     props: {
//       news,
//     },
//   }
// }

export default Home
