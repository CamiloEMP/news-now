import Link from 'next/link'
import { BiWorld } from 'react-icons/bi'

import { ISOS_CONSTANTS } from 'constants/isos.constants'

const Home = (): JSX.Element => {
  return (
    <section className="mt-12 flex flex-col items-center gap-12">
      <div>
        <h2 className="text-5xl font-heading lg:text-7xl text-center mb-12">top headlines</h2>
        <section className="flex items-center justify-center max-w-3xl flex-wrap gap-8">
          {ISOS_CONSTANTS.map(iso => (
            <Link
              key={iso.code}
              href={`/top-headlines/${iso.code}`}
              // onClick={() => setCity(iso.code)}
            >
              <a className="flex flex-col justify-center items-center border-2 rounded-lg w-52 pt-4 pb-8 cursor-pointer gap-4 hover:bg-gray-200 dark:hover:bg-neutral-800">
                <span className="text-3xl font-heading text-center">{iso.name}</span>
                <span className="scale-[2.2]">{iso.icon}</span>
              </a>
            </Link>
          ))}
        </section>
      </div>
      <span className="text-3xl font-heading lg:text-5xl bg-black text-white p-4 rounded-lg">
        or
      </span>
      <div className="flex flex-col gap-8 px-2">
        <h2 className="text-5xl font-heading lg:text-7xl text-center">Search any something</h2>
        <div className="border-2 border-black flex items-center pr-4">
          <BiWorld className="text-5xl text-white bg-gray-800 p-1 mr-4" />
          <input
            className="text-xl border-none outline-none w-full font-bold bg-transparent"
            placeholder="example: CamiloEMP"
            type="text"
          />
        </div>
        <button className="w-full font-heading border-2 border-black hover:bg-black hover:text-white text-3xl py-2 transition-colors">
          Search
        </button>
      </div>
    </section>
  )
}

export default Home
