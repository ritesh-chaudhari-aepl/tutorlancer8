// import Header from '@/pages/header'
import './globals.css'
import Header from '@/components/header/Header'
import Footer from '@/pages/Footer'

export const metadata = {
  title: 'Alpha Tutor',
  description: 'Solve you homework issues in a minute',
}

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <body>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
    </>
  )
}
