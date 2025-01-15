'use client';
import "./globals.css";
import Image from "next/image";
import { useState } from "react";
import logo from '../public/assets/images/logo.png'

import Link from "next/link";
import { Menu, X } from "lucide-react";
import Banner from "./Home/Banner";


export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="en">
      <body>
      <nav className="bg-white">
      <div className="w-11/12 mx-auto px-4 pt-3">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center py-4 px-2">
              <Image src={logo} alt="logo" width={200} />
        
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <a className="py-4 px-2 text-black font-semibold hover:text-blue-800 transition duration-300" href="#/">Home</a>
            <a href="#about" className="py-4 px-2 text-black font-semibold hover:text-blue-800 transition duration-300">About</a>
            <a href="#product" className="py-4 px-2 text-black font-semibold hover:text-blue-800 transition duration-300">Our Product</a>
            <a href="#contact" className="py-4 px-2 text-black font-semibold hover:text-blue-800 transition duration-300">Contact</a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <Link href="/" className="block py-2 px-4 text-sm hover:bg-blue-800 hover:text-white transition duration-300">Home</Link>
        <Link href="/about" className="block py-2 px-4 text-sm hover:bg-blue-800 hover:text-white transition duration-300">About</Link>
        <Link href="/services" className="block py-2 px-4 text-sm hover:bg-blue-800 hover:text-white transition duration-300">Services</Link>
        <Link href="/contact" className="block py-2 px-4 text-sm hover:bg-blue-800 hover:text-white transition duration-300">Contact</Link>
      </div>
    </nav>
     
    <Banner></Banner>
        {children}
      </body>
    </html>
  );
}
