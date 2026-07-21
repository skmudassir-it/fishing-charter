import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faClock, faUsers, faArrowLeft, faCalendarCheck, faLifeRing } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/data";

const servicesMap = Object.fromEntries(services.map((s) => [s.slug, s]));

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesMap[slug];
  if (!service) return { title: "Not Found" };
  return { title: service.title, description: service.description };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesMap[slug];
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
            <FontAwesomeIcon icon={faArrowLeft} className="size-3" />
            All Services
          </Link>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FontAwesomeIcon icon={service.icon} className="size-5" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{service.title}</h1>
                  <div className="flex gap-3 text-sm text-muted-foreground mt-1">
                    <span><FontAwesomeIcon icon={faClock} className="size-3 mr-1" />{service.duration}</span>
                    <span><FontAwesomeIcon icon={faUsers} className="size-3 mr-1" />{service.capacity}</span>
                  </div>
                </div>
              </div>
              <div className="w-full h-64 sm:h-80 bg-muted rounded-xl flex items-center justify-center overflow-hidden mb-6">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              <h2 className="text-xl font-bold mb-4">What&apos;s Included</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="size-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="glass-card sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Book This Charter</CardTitle>
                  <CardDescription>Reserve your date today</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-sm text-muted-foreground">Duration</span>
                    <span className="text-sm font-medium">{service.duration}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-sm text-muted-foreground">Capacity</span>
                    <span className="text-sm font-medium">{service.capacity}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-sm text-muted-foreground">Price</span>
                    <span className="text-lg font-bold text-primary">{service.price.split(" - ")[0]}</span>
                  </div>
                  <Link href="/contact" className="block">
                    <Button className="w-full">
                      <FontAwesomeIcon icon={faCalendarCheck} className="size-4 mr-2" />
                      Reserve Now
                    </Button>
                  </Link>
                  <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
                    <FontAwesomeIcon icon={faLifeRing} className="size-3" />
                    Free cancellation up to 48 hours
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Services */}
          <div className="mt-16 pt-12 border-t">
            <h2 className="text-2xl font-bold mb-6">Other Charters You Might Like</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {related.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="group">
                  <Card className="glass-card overflow-hidden h-full">
                    <div className="w-full h-36 bg-muted flex items-center justify-center overflow-hidden">
                      <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-1">
                        <FontAwesomeIcon icon={s.icon} className="size-4 text-primary" />
                        <CardTitle className="text-base">{s.title}</CardTitle>
                      </div>
                      <CardDescription className="text-xs line-clamp-2">{s.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
