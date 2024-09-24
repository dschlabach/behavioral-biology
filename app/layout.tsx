import Header from '@/app/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Libre_Baskerville } from 'next/font/google'
import Footer from '@/app/Footer'

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Human Behavioral Biology Companion',
  description: "Free companion to Dr. Robert Sapolsky's Human Behavioral Biology lectures at Stanford",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${libreBaskerville.variable} bg-stone-950 text-stone-300`}>
        <div className="mx-auto flex min-h-screen flex-col items-center">
          {/* <Header /> */}
          <div className="flex w-full max-w-screen-xl grow flex-col py-4 font-sans lg:py-10">{children}</div>
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
