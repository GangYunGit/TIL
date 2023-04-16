import '@/styles/globals.css'
import "semantic-ui-css/semantic.min.css"
import type { AppProps } from 'next/app'
import Footer from '@/component/Footer'
import Top from '@/component/Top'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ width: 1000, margin: "0 auto" }}>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
