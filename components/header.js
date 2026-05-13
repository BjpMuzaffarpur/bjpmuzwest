import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header style={{background:'#FF9933', color:'white'}}>
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <img src="/bjp.png" className="h-10" />
          <b>मुजफ्फरपुर पश्चिमी</b>
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
        <div style={{background:'#138808'}} className="flex flex-col p-4 md:hidden gap-2">
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