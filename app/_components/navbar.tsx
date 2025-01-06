"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How it Works" },
    { href: "/blog", label: "Blog" },
    { href: "/ngo", label: "NGO" },
    { href: "/login", label: "Login" },
  ];

  return (
    <nav className="w-full py-4 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/sevadeep-logo.png"
            alt="Sevadeep Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-600 hover:text-gray-900"
            >
              {item.label}
            </Link>
          ))}
          <Button className="bg-[#E84C3D] hover:bg-[#E84C3D]/90 text-white">
            Sponsor a Meal
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                className="bg-[#E84C3D] hover:bg-[#E84C3D]/90 text-white w-full"
                onClick={() => setIsOpen(false)}
              >
                Sponsor a Meal
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
