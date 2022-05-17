import { getApiUrl } from './getApiUrl'

export const getTopHeadlines = async (country: string) => {
  // return `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  const res = await fetch(getApiUrl(`/top-headlines?country=${country}`))
  const data = await res.json()

  return data
}
