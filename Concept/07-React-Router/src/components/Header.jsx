import { Link , NavLink } from "react-router-dom";

function Header(){
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between">
            <h1 className="text-xl font-bold">CurrencyApp</h1>
            <nav className="flex gap-4">
            <NavLink to="/" className={({isActive}) => isActive ? "text-orange-400" : " text-white"} >Home</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "text-orange-400" : "text-white"} >About</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "text-orange-400" : "text-white"} >Contact</NavLink>
            </nav>
        </header>
    );
}

export default Header