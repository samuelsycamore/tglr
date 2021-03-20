import React, { useState, useRef } from "react";
import { useOnClickOutside } from "./hooks";

import Link from "next/link";

function NavItem({ location, label }) {
  return (
    <li className="block p-5">
      <Link href={location}>{label}</Link>
    </li>
  );
}

function SimplerNav() {
  const [isOpen, setOpen] = useState(false);
  const mobileRef = useRef();
  useOnClickOutside(mobileRef, () => setOpen(false));
  return (
    <div className="sans uppercase tracking-tighter text-gray-900 z-50">
      <div className="flex print:hidden">
        <nav className="p-3">
          <div className="hidden sm:flex justify-evenly md:items-center">
            <ul className="flex text-right flex-wrap">
              <NavItem location="/" label="Blog" />
              <NavItem location="/shop" label="Shop" />
              <NavItem location="/about" label="About" />
            </ul>
          </div>
          {/* mobile nav - column */}
          <div className="sm:hidden">
            <ul>
              <li className="flex justify-center items-center">
                {isOpen ? (
                  <ul
                    ref={mobileRef}
                    className="flex flex-col text-center bg-gray-900 bg-opacity-90 absolute bottom-14 right-0 px-10"
                    onClick={() => setOpen(false)}
                  >
                    <NavItem location="/" label="Blog" />
                    <NavItem location="/shop" label="Shop" />
                    <NavItem location="/about" label="About" />
                  </ul>
                ) : (
                  <button onClick={() => setOpen(true)} className="mx-auto">
                    <svg
                      className="text-blue-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      height="30"
                      width="30"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default SimplerNav;
