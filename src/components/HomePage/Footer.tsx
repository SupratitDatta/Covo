import React from "react";
import Link from "next/link";
import Image from "next/image";
import FooterLogo from "/public/images/logo.png";

const Footer: React.FC = () => {
    return (
        <footer className="bg-cover bg-top bg-no-repeat bg-dark-3 text-white py-4 mt-10 md:mt-20 lg:mt-20 px-10 md:px-20" id="contact" >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex-shrink-0 mx-auto flex-col w-full min-w-20 md:w-1/3 flex items-center gap-x-4 justify-evenly">
                    <Image src={FooterLogo} alt="Footer Logo" width={400} height={400} className=" w-14 h-14 md:w-20 md:h-20 lg:w-20 lg:h-20 mb-2" />
                    <h1 className="text-5xl font-bold text-white">COVO</h1>
                </div>
                <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-between gap-8 text-center">
                    <div className="flex flex-col items-center md:items-start">
                        <h1 className="text-xl font-semibold mb-4 text-center mx-auto">Quick Links</h1>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-[#4E7BE9] no-underline">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-[#4E7BE9] no-underline">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-[#4E7BE9] no-underline">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-[#4E7BE9] no-underline">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h1 className="text-xl font-semibold mb-4 text-center mx-auto">Contact Us</h1>
                        <ul className="space-y-2">
                            <li>
                                <Link href="mailto:support@covo.com" className="hover:text-[#4E7BE9] no-underline">
                                    support@covo.com
                                </Link>
                            </li>
                            <li>
                                <Link href="tel:+18001234567" className="hover:text-[#4E7BE9] no-underline">
                                    +19 8001234567
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h1 className="text-xl font-semibold mb-4 text-center mx-auto">Follow Us</h1>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#4E7BE9] no-underline"
                                >
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#4E7BE9] no-underline"
                                >
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#4E7BE9] no-underline"
                                >
                                    Twitter
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#4E7BE9] no-underline"
                                >
                                    Facebook
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-500 mt-10 pt-6 text-center text-sm text-gray-400">
                <div>COVO 2025 © All rights reserved.</div>
                <div>
                    Developed and Managed by{" "}
                    <Link href="/team" className="text-[#4E7BE9] font-semibold hover:no-underline">
                        Our Team
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;