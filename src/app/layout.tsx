import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/footer/Footer';
import { Providers } from "@/components/providers/Providers";


export const metadata: Metadata = {
  title: 'CodeWithJameel',
  description: 'A community of passionate coders, eager to learn the latest tech trends, and looking to connect with like-minded individuals. CodeWithJameel is a gateway to a vibrant and supportive community of developers from all corners of Nigeria.',
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
          <Footer />
        </Providers>
        </body>
    </html>
  )
}
