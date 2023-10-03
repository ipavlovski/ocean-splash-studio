import { css } from 'styled-system/css'

export default function App() {
  const styles = css({
    background: 'slate.500',
    color: 'slate.100'
  })

  return <h1 className={styles}>Ocean Splash</h1>
}
