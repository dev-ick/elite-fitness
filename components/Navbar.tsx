"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dumbbell, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/classes", label: "Plans+" },
    { href: "/trainers", label: "Personal Training+" },
    { href: "/facilities", label: "Facilities" },
    { href: "/nutrition", label: "Nutrition+" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 md:gap-4">
          <Dumbbell className="h-10 w-10 md:h-12 md:w-12 text-green-500 flex-shrink-0" />
          <Link
            href="/"
            className="text-3xl md:text-4xl font-bold tracking-tight text-white"
          >
            Elite Fitness
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-10 text-lg">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative pb-3 font-bold transition-colors ${
                  isActive ? "text-green-400" : "text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-0 bottom-0 h-[2px] bg-green-400
                    transform origin-center transition-transform duration-500 ease-in-out
                    ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                />
              </Link>
            );
          })}
        </div>

        {/* Join Us Button (Desktop & Tablet) */}
        <Link
          href="/membership"
          className="hidden md:block text-white font-bold text-lg px-8 py-3
            border border-green-400 rounded-lg
            shadow-[0_0_15px_rgba(0,250,154,0.4)]
            hover:shadow-[0_0_25px_rgba(0,250,154,0.6)]
            transition duration-300"
        >
          Join Us
        </Link>

        {/* Hamburger Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/30 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col items-center space-y-6 py-6 text-lg">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-bold transition-colors ${
                    isActive ? "text-green-400" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile Join Us Button */}
            <Link
              href="/membership"
              onClick={() => setIsOpen(false)}
              className="mt-2 text-white font-bold text-lg px-6 py-2 border border-green-400 rounded-lg
                shadow-[0_0_15px_rgba(0,250,154,0.4)]
                hover:shadow-[0_0_25px_rgba(0,250,154,0.6)]
                transition duration-300"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}

    </nav>
  );
}
