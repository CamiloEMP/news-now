const BASE_URL = process.env.NEXT_PUBLIC_URL_API
const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export const getApiUrl = (path: string) => {
  return `${BASE_URL}${path}&apiKey=${API_KEY}`
}
