import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* フォントの読み込み */}
        <link
          href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&family=Kosugi+Maru&family=Montserrat&family=Luckiest+Guy&family=DM+Sans&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* ビューポートの設定 */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
