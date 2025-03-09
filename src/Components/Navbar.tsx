"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  interface NavLink {
    name: string;
    href: string;
  }

  const [isOpen, setIsOpen] = useState(false);

  const links: NavLink[] = [
    { name: "About", href: "#about" },
    { name: "Schedule", href: "#schedule" },
    { name: "Speakers", href: "#speakers" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Community Partners", href: "#compats" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="sticky w-full top-0 ">
      <div className="flex justify-around items-center p-5 md:px-10">
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6  bg-white/10 backdrop-blur-md shadow-lg z-50 px-10 py-3 rounded-4xl gap-5">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-black hover:bg-lime-500 text-white font-semibold p-2 rounded-full"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-black/80 py-5 space-y-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white font-semibold hover:text-amber-200"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
