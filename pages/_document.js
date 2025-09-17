import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="PKS Capital Advisory LLP - Your Growth Partner in Investment Banking & Advisory" />
        <meta name="keywords" content="investment banking, mergers acquisitions, capital raising, strategic advisory, venture capital" />
        <meta name="author" content="PKS Capital Advisory LLP" />
        <link rel="icon" href="/images/logo/companylogo.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
