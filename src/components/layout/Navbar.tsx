"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faFish, faPhone, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Gallery" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Notification Bar */}
      <div className="bg-gradient-to-r from-primary via-secondary to-accent text-white overflow-hidden animate-flash">
        <div className="flex animate-marquee whitespace-nowrap py-2 text-sm font-semibold tracking-wide">
          <span className="inline-block px-8">
            Now booking for summer season — call {siteConfig.phone} to reserve your date!
          </span>
          <span className="inline-block px-8">
            Now booking for summer season — call {siteConfig.phone} to reserve your date!
          </span>
        </div>
      </div>

      {/* Nav */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav" : "bg-transparent"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
              <FontAwesomeIcon icon={faFish} className="size-6" />
              <span>{siteConfig.name}</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="inline-flex ml-2">
                <Button size="sm">
                  <FontAwesomeIcon icon={faCalendarCheck} className="size-3.5 mr-1.5" />
                  Book a Trip
                </Button>
              </Link>
            </nav>

            {/* Mobile Nav */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="md:hidden">
                <Button variant="ghost" size="icon">
                  <FontAwesomeIcon icon={faBars} className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 pt-12">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                        pathname === link.href
                          ? "text-primary bg-primary/10"
                          : "text-foreground/70 hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link href="/contact" className="inline-flex mt-3" onClick={() => setOpen(false)}>
                    <Button className="w-full">
                      <FontAwesomeIcon icon={faCalendarCheck} className="size-3.5 mr-1.5" />
                      Book a Trip
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
