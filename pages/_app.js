import Head from 'next/head';

import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'devicon';

// meta information
const title = "Cooper Saye";
const description = "Cooper Saye, web and game developer. Fan of open source and creative coding. Working primarily in React, C#, and Python.";
const image = "https://csaye.com/img/cover.png";

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* links */}
        <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap" rel="stylesheet" />
        <link href="https://csaye.com" rel="canonical" />
        {/* open graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://csaye.com" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        {/* twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@csaye_" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
