import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Koulen&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-body transition-colors">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
