/* eslint-disable import/no-default-export */
import '@/styles/globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'
import { Poppins } from 'next/font/google'

import Decorator from '@/components/Common/Layout/Background'
import Footer from '@/components/Common/Layout/Footer'
// import {HeaderLanding} from '@/components/Common/Layout/Header'
import MobileHeader from '@/components/Common/Layout/Header/Mobile'

export const metadata: Metadata = {
  title: 'XPAY Finance',
  description: 'Finance App',
}

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./favicon 3.svg" />
      </Head>
      <body suppressHydrationWarning={true} className={`${poppins.className} relative`}>
        {/* <Header />{} */}
        <MobileHeader />
        {children}
        <Footer />

        <Decorator />
      </body>
    </html>
  )
}
