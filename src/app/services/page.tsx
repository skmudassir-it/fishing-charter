import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faClock, faUsers, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Fishing Charters & Services",
  description: "Explore our range of Gulf Coast fishing charters — from deep sea excursions to family-friendly inshore trips. Half-day, full-day, and custom packages available.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-3">Our Fishing Charters</h1>
            <div className="gradient-divider w-24 mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Six unique experiences tailored to every angler — from first-timers to seasoned pros. All gear, licenses, and fish cleaning included.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service, i) => (
              <Card key={service.slug} className="glass-card overflow-hidden">
                <div className="grid md:grid-cols-3">
                  <div className="md:col-span-1">
                    <div className="w-full h-48 md:h-full bg-muted flex items-center justify-center overflow-hidden">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <FontAwesomeIcon icon={service.icon} className="size-4" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold">{service.title}</h2>
                        <div className="flex gap-3 text-xs text-muted-foreground mt-0.5">
                          <span><FontAwesomeIcon icon={faClock} className="size-3 mr-1" />{service.duration}</span>
                          <span><FontAwesomeIcon icon={faUsers} className="size-3 mr-1" />{service.capacity}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-2 mb-5">
                      {service.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <FontAwesomeIcon icon={faCheckCircle} className="size-3.5 text-primary mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <span className="text-lg font-bold text-primary">From {service.price.split(" - ")[0]}</span>
                      <Link href={`/services/${service.slug}`} className="inline-flex">
                        <Button>
                          View Details
                          <FontAwesomeIcon icon={faArrowRight} className="size-3.5 ml-1.5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
