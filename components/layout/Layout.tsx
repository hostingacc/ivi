import Footer from "../footer/footer";
import MobileNavBar from "../navbar/MobileNavBar";
import { NavBar } from "../navbar/NavBar";


export default function Layout({ children }: { children: any }) {
    return (
        <>
            <NavBar />
            <MobileNavBar />
            <main>{children}</main>
            <Footer/>
        </>
    )
}