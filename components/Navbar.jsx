"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { sections } from "./content";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const Navbar = () => {

    const [activeSection, setActiveSection] = useState("/");

    const pathname = usePathname()


    return (
        <>
            <nav className=" fixed z-[999] top-4 left-1/2 -translate-x-1/2 p-1 rounded-full border border-white border-opacity-[.08] bg-white bg-opacity-[.08] backdrop-blur-sm">
                <ul className="flex justify-center items-center gap-2 text-white">
                    {sections.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={`${link.href}`}

                                className={`${pathname === link.href ? 'text-black font-medium' : ''} relative text-sm py-2 px-4 tracking-wide inline-block`}>
                                {link.heading}
                                {pathname === link.href && (
                                    <motion.div
                                        layoutId="bubble"
                                        className=" absolute inset-0 -z-10 bg-white text-black rounded-full"
                                        transition={{ type: "spring", duration: .5 }}>
                                    </motion.div>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};
export default Navbar;