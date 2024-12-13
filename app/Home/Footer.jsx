import React from 'react';
import Link from 'next/link';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from 'react-icons/io';


const Footer = () => {
    return (
        <div>
           <footer className="bg-gray-900 text-white pb-4 pt-14 mt-5">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-5">
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>123 Health Street, Cityville</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@deshpharam.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Opening Hours</h3>
            <p>Monday - Friday: 8am - 10pm</p>
            <p>Saturday - Sunday: 9am - 9pm</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4 items-center">
              <Link href="#" className="hover:text-blue-500">
              <FaFacebookSquare className='text-3xl' />
              </Link>
              <Link href="#" className="hover:text-[#f8ae10]">
              <FaSquareInstagram className='text-3xl' />
              </Link>
              <Link href="#" className="hover:text-red-500">
              <IoLogoYoutube className='text-3xl' />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 Desh Pharam. All rights reserved.</p>
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;