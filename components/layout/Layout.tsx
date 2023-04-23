import Footer from "../footer/footer";
import MobileNavBar from "../navbar/MobileNavBar";
import { NavBar } from "../navbar/NavBar";
import Link from "next/link";

export default function Layout({ children }: { children: any }) {
    return (
        <>
            <NavBar />
            <MobileNavBar />
            <main>{children}</main>

            <Link
    
                href={{
                pathname: `/filmCard/${1}`,
                query: {
                    id:1,
                },
                }}
            >
                ЭТО ССЫЛКА НА ФИЛЬМ
                </Link>
                

         {/*    <Footer/> */}
        </>
    )
}