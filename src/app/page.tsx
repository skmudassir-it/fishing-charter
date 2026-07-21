import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck, faPhone, faEnvelope, faArrowRight,
  faCheckCircle, faClock, faUsers, faFish, faAnchor,
  faCompass, faUmbrellaBeach, faShip, faStar, faAward,
  faLifeRing, faCertificate
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { siteConfig, services, testimonials, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "ReelTime Fishing Charters — Gulf Coast Fishing Adventures",
};

const heroServices = services.slice(0, 3);
const allServices = services;

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/10" />
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-secondary/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 text-xs" variant="secondary">30+ Years on the Gulf Coast</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Your Premier{" "}
              <span className="text-primary">Gulf Coast</span>{" "}
              Fishing Experience
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              From deep sea battles with trophy game fish to relaxing inshore trips with the family — ReelTime Fishing Charters delivers unforgettable adventures on the Emerald Coast.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex">
                <Button size="lg">
                  <FontAwesomeIcon icon={faCalendarCheck} className="size-4 mr-2" />
                  Book Your Trip
                </Button>
              </Link>
              <Link href="/services" className="inline-flex">
                <Button size="lg" variant="outline">
                  Explore Charters
                  <FontAwesomeIcon icon={faArrowRight} className="size-4 ml-2" />
                </Button>
              </Link>
            </div>
            {/* Trust Stats */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-12 pt-8 border-t border-border/50">
              {[
                { icon: faStar, label: "500+", desc: "5-Star Reviews" },
                { icon: faShip, label: "3,000+", desc: "Trips Completed" },
                { icon: faAward, label: "30+", desc: "Years Experience" },
                { icon: faFish, label: "15+", desc: "Species Targeted" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <FontAwesomeIcon icon={stat.icon} className="size-5 text-primary mb-1.5" />
                  <div className="text-2xl font-bold">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-3">Our Fishing Charters</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">Choose from six unique fishing experiences — from half-day family trips to full-day offshore adventures.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allServices.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group">
                <Card className="glass-card overflow-hidden h-full">
                  <div className="w-full h-44 bg-muted flex items-center justify-center overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <FontAwesomeIcon icon={service.icon} className="size-4" />
                      </div>
                      <div>
                        <CardTitle className="text-base">{service.title}</CardTitle>
                        <CardDescription className="text-xs">{service.duration} · {service.capacity}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    <div className="flex items-center gap-2 mt-3 text-sm font-semibold text-primary">
                      From {service.price.split(" - ")[0]}
                      <FontAwesomeIcon icon={faArrowRight} className="size-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-transparent via-muted/30 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-3">Why Fish With ReelTime?</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">Three decades on the water means we know exactly where the fish are — and how to make your trip unforgettable.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: faCertificate, title: "Expert Captains", desc: "USCG licensed with decades of Gulf Coast experience. Tournament-winning anglers who live for fishing." },
              { icon: faLifeRing, title: "Safety First", desc: "Fully insured and equipped. All vessels meet or exceed USCG safety requirements with modern life-saving equipment." },
              { icon: faClock, title: "Flexible Scheduling", desc: "Morning, afternoon, and evening departures available. Last-minute bookings welcome when available." },
              { icon: faStar, title: "Guaranteed Fish", desc: "Our family trips come with a guarantee — if you don't catch fish, your next trip is on us." },
            ].map((item, i) => (
              <Card key={i} className="glass-card text-center">
                <CardContent className="p-6">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-4">
                    <FontAwesomeIcon icon={item.icon} className="size-5" />
                  </div>
                  <CardTitle className="text-base mb-2">{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-3">What Our Anglers Say</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
            <p className="text-muted-foreground">500+ five-star reviews from happy anglers across the country.</p>
          </div>
          <TestimonialCarousel items={testimonials} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-3">Frequently Asked Questions</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
          </div>
          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <details key={i} className="glass-card group p-0 overflow-hidden">
                <summary className="cursor-pointer list-none p-4 font-medium flex items-center justify-between">
                  {faq.q}
                  <svg className="size-4 transition-transform group-open:rotate-180 shrink-0 ml-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
                </summary>
                <p className="px-4 pb-4 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Card className="glass-card p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to Reel In the Big One?</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">Call us today or book online. Spots fill fast — especially during peak season!</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex">
                <Button size="lg">
                  <FontAwesomeIcon icon={faCalendarCheck} className="size-4 mr-2" />
                  Book Your Charter
                </Button>
              </Link>
              <a href={`tel:${siteConfig.phone}`} className="inline-flex">
                <Button size="lg" variant="outline">
                  <FontAwesomeIcon icon={faPhone} className="size-4 mr-2" />
                  {siteConfig.phone}
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
