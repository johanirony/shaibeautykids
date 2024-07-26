import { Nav, NavLink } from "@/app/admin/_components/Nav"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const dynamic = "force-dynamic"

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
    <Navbar/>
      <div className="">{children}</div>
      <Footer/>
    </>
  )
}