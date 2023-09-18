import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/footer/Footer';
import { Providers } from "@/components/providers/Providers";


export const metadata: Metadata = {
  title: 'CodeWithJameel',
  description: 'Strong community of javascript developers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
        <Footer />
        </body>
    </html>
  )
}
