import { CgMenu } from 'react-icons/cg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useState } from 'react'

import { HEADING, PrincipalCategorys } from 'constants/header.constants'
import { Sidebar } from 'components/sidebar'

export const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  return (
    <>
      <Head>
        <title>
          {HEADING}{' '}
          {router.asPath !== '/' ? ` | ${router.asPath.slice(1).toLocaleUpperCase()}` : ''}
        </title>
      </Head>
      <header className="flex flex-col items-center justify-center shadow-md gap-4 lg:flex-row lg:justify-between pt-3 lg:pt-0 ">
        <section className="flex items-center gap-8 md:gap-4 px-3 py-0">
          <div className="cursor-pointer" role="button" onClick={() => setIsOpen(true)}>
            <CgMenu className="text-4xl" />
          </div>
          <Sidebar isOpen={isOpen} onClose={setIsOpen} />
          <Link href="/">
            <a className="flex text-3xl font-heading">
              {HEADING.split('').map((letter, index) => (
                <span
                  key={index}
                  className={`px-2 even:bg-black even:text-white dark:odd:bg-white dark:odd:text-black ${
                    letter === ' ' ? '' : 'odd:border-2 border-black'
                  }`}
                >
                  {letter}
                </span>
              ))}
            </a>
          </Link>
        </section>
        <nav className="bg-black py-3 px-6">
          <ul className="flex flex-wrap gap-6">
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
