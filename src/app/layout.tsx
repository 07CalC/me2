import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";



const robot = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Vinayak Maheshwari",
  description: "I am Vinayak Maheshwari, passionate about software development with a strong interest in web and mobile applications. I enjoy learning new technologies and building projects that solve real-world problems",
  icons: {
    icon: 'https://avatars.githubusercontent.com/u/96346957?v=4',
    shortcut: 'https://avatars.githubusercontent.com/u/96346957?v=4',
  },
  openGraph: {
    images: [
      {
        url: 'https://vinm.me/opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Vinayak Maheswari - Portfolio',

      }
    ],
    title: "Vinayak Maheshwari",
    description: "I am Vinayak Maheshwari, passionate about software development with a strong interest in web and mobile applications. I enjoy learning new technologies and building projects that solve real-world problems",
    url: 'https://vinm.me',
    siteName: 'Vinayak Maheshwari',
    type: 'website',
    locale: 'en_IN',

  },
  twitter: {
    card: 'summary_large_image',
    title: "Vinayak Maheshwari",
    description: "I am Vinayak Maheshwari, passionate about software development with a strong interest in web and mobile applications. I enjoy learning new technologies and building projects that solve real-world problems",
    images: ['https://vinm.me/opengraph.png'],
    creator: '@not_calc',
  },
  authors: [{ name: 'Vinayak Maheshwari', url: 'https://vinm.me' }],
  keywords: [
    'Vinayak Maheshwari',
    'Portfolio',
    'Software Developer',
    'Web Developer',
    'Mobile Developer',
    'IIIT Allahabad',
    'Engineer',
    'Student',
    'Learner',
    'Open Source',
    'Rust',
    'TypeScript',
    'Next.js',
    'React',
    'React Native',
    'Neovim',
  ],
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://vinm.me'),

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robot.className} scrollbar-hidden text-white pt-16 bg-[#161411] antialiased`}
      >
        <Analytics />
        <Navbar />
        {children}
      </body>
    </html>

  );
}
