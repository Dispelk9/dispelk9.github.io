import type { NextPage } from 'next';
import LiquidEther from '../components/LiquidEther'
import TextType from '../components/TextType';
import Footer from './footer';
import ScrollFloat from '../components/ScrollTrigger';
import StaggeredMenu from '../components/StaggeredMenu';
import LogoLoop from '../components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiAnsible, SiTerraform, SiPython, SiGo, SiGithub, SiGitlab, SiAmazonwebservices, SiHetzner,SiDocker } from 'react-icons/si';

const Home: NextPage = () => {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Playground', ariaLabel: 'D9 Playground', link: 'https://demo.dispelk9.de' },
    { label: 'Certcheck', ariaLabel: 'Fetch SMTP Certs', link: 'https://analytical.dispelk9.de:8443/' },
    { label: 'SMTP', ariaLabel: 'Mailcow/Sogo/Docker', link: 'https://mail.dispelk9.de/' },
    { label: 'CheckMK', ariaLabel: 'Monitoring', link: 'https://analytical.dispelk9.de/check_mk/login.py?_origtarget=index.py' },
    { label: 'Terraform', ariaLabel: 'Cloud Infrastructure', link: 'https://app.terraform.io/session' },
    { label: 'Hetzner', ariaLabel: 'Cloud Infrastructure', link: 'https://accounts.hetzner.com/login' },
    { label: 'Cloudflare', ariaLabel: 'Cloud Infrastructure', link: 'https://dash.cloudflare.com/login' },
  ];


  const socialItems = [
    { label: 'GitHub', link: 'https://github.com/Dispelk9'},
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/ai-viet-hoang-111093/' },
    { label: 'Credly', link: 'https://www.credly.com/users/ai-viet-hoang/badges#credly' },
  ];

  const techLogos = [
    { node: <SiReact />, title: "React", href: "" },
    { node: <SiTerraform />, title: "Terraform", href: "" },
    { node: <SiNextdotjs />, title: "Next.js", href: "" },
    { node: <SiTypescript />, title: "TypeScript", href: "" },
    { node: <SiAnsible />, title: "Ansible", href: "" },
    { node: <SiGithub />, title: "Github", href: "" },
    { node: <SiGo />, title: "Golang", href: "" },
    { node: <SiGitlab />, title: "Gitlab", href: "" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "" },
    { node: <SiPython />, title: "Python", href: "" },
    { node: <SiAmazonwebservices />, title: "AWS", href: "" },
    { node: <SiHetzner />, title: "Hetzner", href: "" },
    { node: <SiDocker />, title: "Docker", href: "" },
  ];

  // Alternative with image sources
  // const imageLogos = [
  //   { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  //   { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  //   { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
  // ];

  return (
    <div>
      <div>
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={false}
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
    <main  style={{ minHeight: '100vh', display: 'grid',  placeItems: 'center',  fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif', }}>
      
      <div style={{ width: '100%', height: 600, position: 'relative' }}>
        <LiquidEther
          colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
        <div style={{position: 'absolute',inset: 0,display: 'grid',placeItems: 'center',pointerEvents: 'none',zIndex: 1,padding: '0 16px',textAlign: 'center', }}>
          <TextType 
              as="h1"
              className="m-0 text-[clamp(32px,6vw,80px)] font-extrabold leading-tight tracking-tight"
              text={["Dispelk9 x Ai Viet Hoang","present","D9 Playground"]}
              typingSpeed={75}
              onSentenceComplete={() => {}}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="_"
              />
        </div>
      </div>
      <div style={{ height: 250 }} />
      <div>
        <TextType 
              as="h1"
              className="m-0 text-[clamp(32px,6vw,80px)] font-extrabold leading-tight tracking-tight"
              text={["Introduction", ""]}
              typingSpeed={75}
              onSentenceComplete={() => {}}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="_"
              />
          <p>
          The <strong>Best</strong> thing I have learned after the master program in Germany is that, 
          nothing can hit you harder than 4 Maxwell Equations.<br/>
          Therefore, I'm always optimistic that a person can learn <strong>Everything</strong>, given some time to achieve that.<br/>
          With the background of <strong>ET-IT</strong> with the main focus of computer networking, 
          I'm pursuing the career in <strong>IT industry</strong>.<br/>
          I'm an enthusiastic tech guy with the knowledge of <strong>DDI, Networking/Protocols.</strong><br/> 
          <strong>Scripting and Automation</strong> are what I eat and breath.<br/> 
          <strong>Calm</strong> is my nature, which I guess it would be very helpful in any <strong>Critical</strong> situation, 
          whenever in resolving <strong>IT Ticket</strong> at service desks or in <strong>Life</strong>.
          </p>
      </div>  
      <div style={{ height: 250 }} />
      <div style={{ width: '100%', height: 600, position: 'relative' }}>
        <LiquidEther
          colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
        <div style={{position: 'absolute',inset: 0,display: 'grid',placeItems: 'center',pointerEvents: 'none',zIndex: 1,padding: '0 16px',textAlign: 'center', }}>
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
            textClassName="fs-75"
          >
          To thrive in this infinite domain
          </ScrollFloat>
          {/* <div style={{ height: 50 }} /> */}
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
            textClassName="fs-75"
          >
          Be versatile.
          </ScrollFloat>
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
            textClassName="fs-75"
          >
          Stay valuable.
          </ScrollFloat>
        </div>
      </div>
      <div style={{ height: 500 }} />
      <div>
        <div>
          <TextType
            as="h1"
            style={{ margin: 0, fontSize: 'clamp(32px,6vw,80px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.02em' }}
            text={['Bluecat', 'Apache','Nginx','Bind9','NS1','Github Actions']}
            typingSpeed={75}
            onSentenceComplete={() => {}}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
          />
        </div>
        <div>
          <TextType
            as="h1"
            style={{ margin: 0, fontSize: 'clamp(32px,6vw,80px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.02em' }}
            text={['Ansible', 'Terraform','Python','Docker','FastAPI','Gitlab CI']}
            typingSpeed={75}
            onSentenceComplete={() => {}}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
          />
        </div>
        <div>
          <TextType
            as="h1"
            style={{ margin: 0, fontSize: 'clamp(32px,6vw,80px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.02em' }}
            text={['SMTP', 'DNS','Go','Znuny/OTRS','Flask','PGP']}
            typingSpeed={75}
            onSentenceComplete={() => {}}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
          />
        </div>
        <div>
          <TextType
            as="h1"
            style={{ margin: 0, fontSize: 'clamp(28px,5.5vw,72px)', fontWeight: 800, lineHeight: 1.1 }}
            text={['Amazon Web Services', 'Hetzner','CheckMK','Next.js']}
            typingSpeed={75}
            onSentenceComplete={() => {}}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
          />
        </div>
      </div>
      <div style={{ height: 500 }} />
      <div>
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
        >
          And many more...
        </ScrollFloat>
      </div>
      <div style={{ height: 200 }} />
      <p>
          This is D9 playground: My Source for IT Knowledge and Innovation<br/><br/>

          In today's rapidly evolving digital landscape, 
          staying informed about the latest developments in information technology 
          is more important than ever.<br/>
          Whether you're a seasoned IT professional, an aspiring tech enthusiast, 
          or a business leader looking to leverage technology for competitive advantage,<br/>
          my playground is here to provide you with the knowledge and insights you need.
      </p>
      <div style={{ height: 200 }} />
      <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
            {/* Basic horizontal loop */}
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={60}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology partners"
            />
            
            {/* Vertical loop with deceleration on hover */}
            {/* <LogoLoop
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={60}
              gap={60}
              hoverSpeed={0}
              fadeOut
            /> */}
          </div>
      <div style={{ width: '100%', height: 600, position: 'relative' }}>
        <LiquidEther
          colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
        <div style={{position: 'absolute',inset: 0,display: 'grid',placeItems: 'center',pointerEvents: 'none',zIndex: 1,padding: '0 16px',textAlign: 'center', }}>
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
              textClassName="fs-75"
            >
              Let's connect
            </ScrollFloat>
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=50%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
              textClassName="fs-75"
            >
              My fellow IT professionals
            </ScrollFloat>
        </div>
      </div>
      <Footer/>
    </main>
    </div>
  );
};

export default Home;
