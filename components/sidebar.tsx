import { useTheme } from 'next-themes'
import { CgMoon, CgSun } from 'react-icons/cg'

export const Sidebar = () => {
  const { theme, setTheme } = useTheme()

  return (
    <section
      className="absolute bg-black text-white w-full left-full top-14 z-50 px-4 py-12 animate-fadeInRight border-b-2
      "
    >
      <button
        className="flex items-center gap-2 border-2 border-white py-2 px-4 rounded-lg hover:bg-white hover:text-black transition-colors"
        onClick={() => setTheme(theme === 'dark' ? 'ligth' : 'dark')}
      >
        <span className="text-xl lg:text-2xl font-heading">Change theme</span>
        {theme === 'dark' ? <CgSun className="text-3xl" /> : <CgMoon className="text-3xl" />}
      </button>
    </section>
  )
}
