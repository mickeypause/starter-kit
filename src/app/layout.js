import '../assets/styles/global.css'
import '../assets/styles/constants.css'
import { Open_Sans } from 'next/font/google'
import Header from '@/components/ui/Header'
import Providers from './providers'

export const metadata = {
  title: 'Starter Kit',
  description: 'Starter Kit',
}

const font = Open_Sans({
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={font.className}
    >
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
