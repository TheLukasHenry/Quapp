import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import AuthProvider from './AuthProvider'
import NavMenu from './NavMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavMenu />

          {/* <nav>Navbar in root layout</nav> */}
          <div>
            {/* <div className="w-full fixed top-0 flex flex-row items-center justify-between p-4">
              <Link href="/todos">todos</Link>
              <Link href="/features">features</Link>
              <Link href="/testCases">testCases</Link>
              <AuthCheck>
                <SignOutButton />
              </AuthCheck>
            </div> */}
            {children}{' '}
          </div>
        </body>
      </html>
    </AuthProvider>
  )
}
