import '@styles/globals.css'
import '@/components/App/styles.css'
import '@/components/Alert/styles.css'
import '@/components/Slider/styles.css'
import '@/components/PoemPost/styles.css'
import '@/components/Footer/styles.css'
import '@/components/MandalaButton/styles.css'
import '@/components/Poem/styles.css'
import '@/components/PoemPost/styles.css'

import 'bootstrap/dist/css/bootstrap.min.css';


import localFont from 'next/font/local'

const microgramma = localFont({
  src: [
    {
      path: '../../public/fonts/microgramma-bold.otf'
    },
  ],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={microgramma.className}>
      <Component {...pageProps} />
    </main>
  )
}
