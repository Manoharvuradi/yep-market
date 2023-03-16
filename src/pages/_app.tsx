import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { gordita } from '@/utils/fonts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={gordita.variable}>
      <Component {...pageProps} />
    </div>
  )
}
