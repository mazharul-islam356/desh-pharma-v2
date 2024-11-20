'use client';
import "./globals.css";
import { Button, IconButton, Navbar, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from '../public/assets/images/logo (2).png'

export default function RootLayout({ children }) {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {['Pages', 'Account', 'Blocks', 'Docs'].map((text) => (
        <Typography
          key={text}
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="#" className="flex items-center">
            {text}
          </a>
        </Typography>
      ))}
    </ul>
  );

  return (
    <html lang="en">
      <body>
        <nav>
          <div className="mt-6">
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-3xl px-4 lg:px-8 lg:py-3 py-4 w-10/12 mx-auto">
              <div className="flex items-center justify-between text-blue-gray-900">
                <div className="font-semibold flex items-center">
                  <Image width={50} height={50} alt="logo" src={logo}></Image>
                </div>

                <div className="hidden lg:flex items-center">{navList}</div>

                <div className="flex items-center gap-4">
                  <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                    <span>Let&apos;s Talk</span>
                  </Button>
                  <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                  >
                    {openNav ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    )}
                  </IconButton>
                </div>
              </div>

              {openNav && <div className="lg:hidden">{navList}</div>}
            </Navbar>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
