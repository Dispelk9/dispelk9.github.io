import type { AppProps } from 'next/app';
import Head from 'next/head';
import BackToTop from "./components/BackToTop";
import StaggeredMenu from './components/StaggeredMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/LiquidEther.css';
import './styles/ScrollTrigger.css';
import './styles/globals.css';
import './styles/StaggeredMenu.css';
import './styles/TextType.css';



export default function MyApp({ Component, pageProps }: AppProps) {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Playground', ariaLabel: 'D9 Playground', link: 'https://analytical.dispelk9.de:8081/login' },
    { label: 'Certcheck', ariaLabel: 'Fetch SMTP Certs', link: 'https://analytical.dispelk9.de:8443/' },
    { label: 'SMTP', ariaLabel: 'Mailcow/Sogo/Docker', link: 'https://mail.dispelk9.de/' },
    { label: 'CheckMK', ariaLabel: 'Monitoring', link: 'https://analytical.dispelk9.de/check_mk/login.py?_origtarget=index.py' },
    { label: 'Terraform', ariaLabel: 'Cloud Infrastructure', link: 'https://app.terraform.io/session' },
    { label: 'Hetzner', ariaLabel: 'Cloud Infrastructure', link: 'https://accounts.hetzner.com/login' },
  ];


  const socialItems = [
    { label: 'GitHub', link: 'https://github.com/Dispelk9'},
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/ai-viet-hoang-111093/' }
  ];
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
      <div>
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#0e0c0cff"
          changeMenuColorOnOpen={true}
          colors={['#B19EEF', '#5227FF']}
          //logoUrl="../public/favicon_io/favicon-32x32.png"
          accentColor="#ff6b6b"
          onMenuOpen={() => console.log('Menu opened')}
          onMenuClose={() => console.log('Menu closed')}
        />
      </div>
      <Component {...pageProps} />
      <BackToTop />
    </>
  );
}