import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";

const robot = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Vinayak Maheswari",
  description: 'Hi I am Vinayak Maheshwari, a fresher at the Indian Institute of Information Technology Allahabad. I am passionate about software development, particularly in web and mobile applications. I enjoy learning new technologies and building projects that solve real-world problems.',
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
    description: 'Hi I am Vinayak Maheshwari, a fresher at the Indian Institute of Information Technology Allahabad. I am passionate about software development, particularly in web and mobile applications. I enjoy learning new technologies and building projects that solve real-world problems.',
    url: 'https://vinm.me',
    siteName: 'Vinayak Maheshwari',
    type: 'website',
    locale: 'en_IN',

  },
  twitter: {
    card: 'summary_large_image',
    title: "Vinayak Maheshwari",
    description: 'Hi I am Vinayak Maheshwari, a fresher at the Indian Institute of Information Technology Allahabad. I am passionate about software development, particularly in web and mobile applications. I enjoy learning new technologies and building projects that solve real-world problems.',
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
        className={`${robot.className} text-white pt-16 bg-[#161411] antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
