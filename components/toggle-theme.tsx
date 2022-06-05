import { useTheme } from 'next-themes'
import { CgMoon, CgSun } from 'react-icons/cg'
export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme()

  return (
    <>
      {theme === 'dark' ? (
        <CgSun
          className="text-3xl dark:text-white cursor-pointer"
          onClick={() => setTheme(theme === 'dark' ? 'ligth' : 'dark')}
        />
      ) : (
        <CgMoon
          className="text-3xl dark:text-white cursor-pointer"
          onClick={() => setTheme(theme === 'dark' ? 'ligth' : 'dark')}
        />
      )}
    </>
  )
}
