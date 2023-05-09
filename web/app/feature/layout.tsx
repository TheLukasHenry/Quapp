// import Link from 'next/link'
// import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function FeatureLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div lang="en">
      {/* <body> */}
      <div className="pt-16">{children} </div>
      {/* </body> */}
    </div>
  )
}
