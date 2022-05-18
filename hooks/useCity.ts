import { useContext } from 'react'

import { CityContext } from 'context/city.context'

export const useCity = () => {
  const { city, setCity } = useContext(CityContext)

  return { city, setCity }
}
