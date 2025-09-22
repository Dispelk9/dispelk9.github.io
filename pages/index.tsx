import type { NextPage } from 'next';
import LiquidEther from './components/LiquidEther'
import TextType from './components/TextType';
import CardNavBar from './navbar'
import Footer from './footer';
import ScrollFloat from './components/ScrollTrigger';

const Home: NextPage = () => {
  return (
    <main  style={{ minHeight: '100vh', display: 'grid',  placeItems: 'center',  fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif', }}>
      {/* Nav on top */}
      {/* <CardNavBar /> */}

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
              text={["Dispelk9 x Ai Viet Hoang", "Welcome to Dispelk9"]}
              typingSpeed={75}
              variableSpeed={false}
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
              variableSpeed={false}
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
          >
          To thrive in this ever-changing domain and secure a role in the IT Industry
          </ScrollFloat>
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
          >
          Possessing a wide-ranging skill set is vital
          </ScrollFloat>
        </div>
      </div>
      <div style={{ height: 250 }} />
      <div>
        <div>
          <TextType
            as="h1"
            style={{ margin: 0, fontSize: 'clamp(32px,6vw,80px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.02em' }}
            text={['Ansible', 'Terraform','Python','Docker','FastAPI']}
            typingSpeed={75}
            variableSpeed={false}
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
            text={['SMTP', 'DNS','Go','Znuny/OTRS','Flask']}
            typingSpeed={75}
            variableSpeed={false}
            onSentenceComplete={() => {}}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
          />
        </div>

        <div>
          <TextType
            as="h3"
            style={{ margin: 0, fontSize: 'clamp(28px,5.5vw,72px)', fontWeight: 800, lineHeight: 1.1 }}
            text={['Amazon Web Services', 'Hetzner','CheckMK','Next.js']}
            typingSpeed={75}
            variableSpeed={false}
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
            >
              Interessted? Then let's connect :D
            </ScrollFloat>
        </div>
      </div>
      <Footer/>
    </main>
  );
};

export default Home;