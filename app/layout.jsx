import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
});

export const metadata = {
  title: 'President Home',
  description: 'Tutorial by Brad Traversy',
  keywords: 'Web Development, Next'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body className={ poppins.className }>
        <main className='container'>
          { children }
        </main>
      </body>
    </html>
  )
}
