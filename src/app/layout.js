"use client"
import Menu from './components/menu'
import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react'
import 'bootstrap/dist/js/bootstrap.min.js'
import './styles.css'
import Footer from './components/footer'


const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
 
  return (
    
    <html lang="en">
      <body className={inter.className}>
      <Menu />
      {children}
      <Footer />
      </body>
    </html>
  )
}
