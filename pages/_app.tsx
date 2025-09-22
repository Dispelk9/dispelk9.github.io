import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.css';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      /> */}
      <Component {...pageProps} />
    </>
  );
}