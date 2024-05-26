import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "The Wedding of Sumarni & Muhammad Amsori",
  description: "Wedding Website, Wedding of Sumarni  & Muhammad Amsori",
  icons: {
    icon: "/background/3.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-200`}>{children}</body>
    </html>
  )
}
