import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
    return (
        <div className="flex flex-col min-h-screen" >
            <Header />
            <main className=" flex flex-grow p-4" >
                <Outlet />{/* Dynamic content (Home, About, etc.) goes here */}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;