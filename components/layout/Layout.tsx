import Footer from "../footer/footer";
import MobileNavBar from "../navigation/MobileNavBar";
import Header from "../header/Header";
import { ReactNode } from 'react'
import { toJS } from "mobx";

interface LayoutProps{
    children: ReactNode;
    className?: string

  }

export default function Layout({ children, className }:LayoutProps) {
    
    return (
        <>
            <Header/>
      {/*       <MobileNavBar /> */}
            <main>{children}</main>
        {/*     <Footer/> */}
    
        </>
    )
}