import { css } from 'styled-system/css'
import { Center, Flex } from 'styled-system/jsx'

import ReactLogo from '../assets/splash.svg?react'

function Splash() {
  const styles = css({
    width: '50vw',
    height: '50vh',
  })

  return (
    <div className={styles}>
      <img src='./assets/ocean-splash-low-poly-2.png' />
    </div>
  )
}

function ConstructionText() {
  const styles = css({
    // textTransform: 'uppercase',
    fontSize: '4rem',
    fontWeight: 'bold',
    color: 'hsl(211, 56%, 18%)',
    fontFamily: 'pacifico',
    letterSpacing: 'widest'
  })
  return (
    <h1 className={styles}>
      under construction
    </h1>
  )
}

export default function App() {
  const styles = css({
    backgroundImage: 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)',
  })

  return (
    <Flex width='100vw' height='100vh' flexDir='column' className={styles} alignItems='center'>
      <ReactLogo />
      <ConstructionText />
    </Flex>
  )
}
