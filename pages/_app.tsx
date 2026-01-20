import type { AppProps } from 'next/app';
import Head from 'next/head';
import BackToTop from "./components/BackToTop";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/LiquidEther.css';
import './styles/ScrollTrigger.css';
import './styles/globals.css';
import './styles/StaggeredMenu.css';
import './styles/TextType.css';
import './styles/LogoLoop.css';



export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
      {/* basic favicon */}
        <link rel="icon" href="/favicon_io/favicon.ico?v=1" />
        <link rel="apple-touch-icon" href="/favicon_io/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
      </Head>
      <Component {...pageProps} />
      <BackToTop />
    </>
  );
}