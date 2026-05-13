import '../styles/globals.css'
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// components/Header.js
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <img src="/bjp.png" className="h-10" />
          <span>मुजफ्फरपुर पश्चिमी</span>
        </div>
        <button onClick={()=>setOpen(!open)} className="md:hidden">☰</button>
        <nav className="hidden md:flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/upcoming">Upcoming</Link>
          <Link href="/press">Press</Link>
        </nav>
      </div>
      {open && (
        <div className="flex flex-col p-4 md:hidden gap-2">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/upcoming">Upcoming</Link>
          <Link href="/press">Press</Link>
        </div>
      )}
    </header>
  )
}
