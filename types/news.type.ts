interface Article {
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
  source: {
    id: string | null
    name: string
  }
}

export type News = {
  news: {
    status: string
    totalResults: number
    articles: Article[]
  }
}
