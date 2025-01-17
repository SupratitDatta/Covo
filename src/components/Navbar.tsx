"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";

import MobileNav from "./MobileNav";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navLinks = [
        { route: "/", label: "Home" },
        { route: "/upcoming", label: "Upcoming" },
        { route: "/previous", label: "Previous" },
        { route: "/recordings", label: "Recordings" },
        { route: "/personal-room", label: "Personal Room" },
    ];

    return (
        <nav
            className={`fixed flex-between z-50 w-auto md:w-auto px-4 py-3 sm:px-6 sm:py-4 md:px-8 lg:px-10 xl:px-12 transition-all duration-300 ${isScrolled
                    ? "top-2 sm:top-3 md:top-4 left-1 sm:left-4 md:left-6 right-2 sm:right-4 md:right-6 bg-gray-300 backdrop-blur-lg shadow-lg rounded-xl"
                    : "top-0 left-0 right-0 bg-gray-100 backdrop-blur-lg shadow-none"
                }`}

        >
            <Link href="/" className="flex justify-between items-center gap-1 ml-10">
                <p className="text-[26px] flex font-extrabold text-black max-sm:hidden">
                    <img src="/images/logo.png" alt="" className="w-10 h-10 mix-blend-multiply rounded-lg mr-2" />
                    COVO
                </p>
            </Link>

            <div className="hidden md:flex gap-6">
                {navLinks.map((link) => (
                    <Link
                        key={link.route}
                        href={link.route}
                        className="flex items-center gap-2 text-black hover:text-blue-700"
                    >
                        <span className="font-medium text-lg">{link.label}</span>
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-5">
                <SignedIn>
                    <UserButton afterSignOutUrl="/sign-in" />
                </SignedIn>
                <MobileNav />
            </div>
        </nav>
    );
};

export default Navbar;