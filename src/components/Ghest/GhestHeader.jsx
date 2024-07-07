import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { navbar } from "../../data/Data";
import { useEffect, useState } from "react";
import Auth from "../Auth/Auth";


function GhestHeader() {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const scrollUpDown = () => {
            window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
        };
        window.addEventListener("scroll", scrollUpDown);

        return () => {
            window.removeEventListener("scroll", scrollUpDown);
        };
    }, []);

    return (
        <header
            className={`border-b border-black sticky top-0 z-50  
        ${isActive ? "bg-white" : "bg-topHeader"}
        transition-all
        duration-500
        `}
        >
            <div className="size h-[50px] flexBetween">
                <Link to="/">
                    <img className="h-[3.5rem]" src={logo} alt="logo" />
                </Link>
                <div className="flex items-center gap-5">
                    <div className="navbar">
                        {navbar.map((nav, index) => (
                            <Link key={index} to={nav.path}>
                                {nav.title}
                            </Link>
                        ))}
                    </div>
                    <div className="relative">
                        <button className="navbar">Login</button>
                        <Auth />
                    </div>
                    <button
                        className={`  text-white rounded-full px-3 p-2 text-sm font-medium 
                        ${isActive ? "bg-green-700" : "bg-black"}
                        transition-all
                        duration-500
                        `}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </header>
    );
}

export default GhestHeader;
