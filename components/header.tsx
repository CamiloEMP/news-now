import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useCity } from 'hooks/useCity'
import { HEADING, PrincipalCategorys } from 'constants/header.constants'
import { ISOS_CONSTANTS } from 'constants/isos.constants'

import { ToggleTheme } from './toggle-theme'

export const Header = (): JSX.Element => {
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
      <header className="flex flex-col items-center justify-center shadow-md gap-2 lg:flex-row lg:justify-between pt-3 lg:pt-0 sticky top-0 z-40 bg-slate-50 dark:bg-neutral-900">
        <section className="flex items-center gap-4 px-3 py-0">
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
          {city.name !== '' && <div className="ml-2 scale-[2.0] mr-6">{city.icon}</div>}
          <ToggleTheme />
        </section>
        <nav className="w-full lg:w-max overflow-hidden overflow-x-scroll md:overflow-auto bg-black py-4 px-2 md:px-6 lg:py-3">
          <ul className="flex justify-between lg:gap-4">
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
