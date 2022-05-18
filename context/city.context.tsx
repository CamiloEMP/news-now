import { createContext, useState, ReactNode } from 'react'

interface ICityContext {
  city: string
  setCity: (city: string) => void
}

export const CityContext = createContext<ICityContext>({
  city: '',
  setCity: () => {},
})

export const CityProvider = ({ children }: { children: ReactNode }) => {
  const [city, setCity] = useState('')

  return <CityContext.Provider value={{ city, setCity }}>{children}</CityContext.Provider>
}
