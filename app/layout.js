import NavBarDesktop from './components/NavBar/NavBarDesktop'
import NavBarMobile from './components/NavBar/NavBarMobile'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Furnituria Galleria',
  description: 'A fancy sounding furniture gallery for fancy people.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={`${inter.className} w-screen h-screen`}>
        {/* for mobile */}
        <div className="sm:hidden fixed w-screen"><NavBarMobile /></div>
        {/* for desktop */}
        <div className="xs:max-sm:hidden fixed w-screen"><NavBarDesktop /></div>
        {children}</body>
    </html>
  )
}
