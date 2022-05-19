import { createContext, useState, ReactNode } from 'react'

import { ISO } from 'types/city.types'

interface ICityContext {
  setCity: ({ code, icon, name }: ISO) => void
  city: ISO
}

export const CityContext = createContext<ICityContext>({
  setCity: () => {},
  city: {
    code: '',
    icon: null,
    name: '',
  },
})

export const CityProvider = ({ children }: { children: ReactNode }) => {
  const [city, setCity] = useState<ISO>({
    code: '',
    icon: null,
    name: '',
  })

  return <CityContext.Provider value={{ city, setCity }}>{children}</CityContext.Provider>
}
