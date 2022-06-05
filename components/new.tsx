/* eslint-disable @next/next/no-img-element */
import { Article } from 'types/news.type'

interface Props {
  article: Article
  containerClass?: string
  imageClass?: string
}

export const New = ({ article, containerClass, imageClass }: Props) => {
  return (
    <article
      className={`flex flex-col gap-2 w-80 h-80 ${
        containerClass || ''
      } cursor-pointer transition-transform hover:scale-105 shadow-md px-2 py-4 dark:shadow-neutral-800`}
      title={article.title}
    >
      <img
        alt={`News now ${article.title}`}
        className={`w-full h-80 object-cover object-center ${imageClass || ''} rounded-sm`}
        src={article.urlToImage}
      />
      <h3 className="mt-2">{article.title}</h3>
    </article>
  )
}
