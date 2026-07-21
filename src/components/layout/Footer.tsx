import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish, faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/data";

const footerLinks = {
  services: [
    { href: "/services/deep-sea-fishing", label: "Deep Sea Fishing" },
    { href: "/services/inshore-fishing", label: "Inshore Fishing" },
    { href: "/services/fly-fishing", label: "Fly Fishing" },
    { href: "/services/sunset-cruises", label: "Sunset Cruises" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Gallery" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="glass-nav mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
              <FontAwesomeIcon icon={faFish} className="size-6" />
              <span>{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground">{siteConfig.description}</p>
            <div className="flex gap-3 pt-1">
              <a href={siteConfig.social.facebook} className="text-muted-foreground hover:text-primary transition-colors">
                <FontAwesomeIcon icon={faFacebook} className="size-4" />
              </a>
              <a href={siteConfig.social.instagram} className="text-muted-foreground hover:text-primary transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="size-4" />
              </a>
              <a href={siteConfig.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                <FontAwesomeIcon icon={faTwitter} className="size-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-3 text-sm tracking-wide uppercase text-muted-foreground">Charters</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3 text-sm tracking-wide uppercase text-muted-foreground">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3 text-sm tracking-wide uppercase text-muted-foreground">Contact</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faPhone} className="size-3.5 mt-0.5 text-primary" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="size-3.5 mt-0.5 text-primary" />
                <span>{siteConfig.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faLocationDot} className="size-3.5 mt-0.5 text-primary" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
            <Link href="/contact" className="inline-flex mt-4">
              <Button size="sm" variant="outline">Book Now</Button>
            </Link>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
