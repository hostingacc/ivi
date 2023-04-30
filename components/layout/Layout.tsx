import Footer from "../footer/footer";
import MobileNavBar from "../navbar/MobileNavBar";
import { NavBar } from "../navbar/NavBar";
import { ReactNode } from 'react'

interface LayoutProps{
    children: ReactNode;
    className?: string
  }

export default function Layout({ children, className }:LayoutProps) {
    return (
        <>
            <NavBar />
            <MobileNavBar />
            <main>{children}</main>
            <Footer/>
        </>
    )
}