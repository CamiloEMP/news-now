import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CgMenu, CgClose } from 'react-icons/cg'

import { useCity } from 'hooks/useCity'
import { Sidebar } from 'components/sidebar'
import { HEADING, PrincipalCategorys } from 'constants/header.constants'
import { ISOS_CONSTANTS } from 'constants/isos.constants'
import { ISO } from 'types/city.types'

export const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const { city, setCity } = useCity()
  const router = useRouter()

  useEffect(() => {
    if (router.query.iso) {
      const citySelect = ISOS_CONSTANTS.find(iso => iso.code === router.query.iso)

      setCity(citySelect!)
    }
  }, [router, setCity])

  return (
    <>
      <Head>
        <title>
          {HEADING}{' '}
          {router.asPath !== '/' ? ` | ${router.asPath.slice(1).toLocaleUpperCase()}` : ''}
        </title>
      </Head>
      <header className="flex flex-col items-center justify-center shadow-md gap-4 lg:flex-row lg:justify-between pt-3 lg:pt-0">
        {isOpen && <Sidebar />}
        <section className="flex items-center gap-4 px-3 py-0">
          <button
            className="cursor-pointer text-2xl lg:text-4xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <CgClose /> : <CgMenu />}
          </button>
          <Link href="/">
            <a className="flex text-xl lg:text-3xl font-heading">
              {HEADING.split('').map((letter, index) => (
                <span
                  key={index}
                  className={`px-2 even:bg-black even:text-white dark:even:bg-white dark:even:text-black ${
                    letter === ' ' ? '' : 'odd:border-2 border-black dark:border-white'
                  }`}
                >
                  {letter}
                </span>
              ))}
            </a>
          </Link>
          {city.name !== '' && <div className="ml-2 scale-[2.0]">{city.icon}</div>}
        </section>
        <nav className="max-w-full overflow-hidden overflow-x-scroll md:overflow-auto bg-black py-4 px-2 md:px-6 lg:py-3">
          <ul className="flex gap-6">
            {PrincipalCategorys.map((category, index) => (
              <li
                key={index}
                className={`text-xl text-white font-heading p-1 hover:bg-white hover:text-black rounded transition-colors ${
                  router.asPath === category.url ? 'bg-white text-black' : ''
                }`}
              >
                <Link href={category.url}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}
