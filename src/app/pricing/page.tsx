import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { pricingTiers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for all our Gulf Coast fishing charters. Half-day, full-day, fly fishing, and sunset cruise packages available. Book online today!",
};

export default function PricingPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-3">Charter Pricing</h1>
            <div className="gradient-divider w-24 mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing. No hidden fees. All gear, licenses, bait, and fish cleaning included in every trip.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricingTiers.map((tier, i) => (
              <Card key={i} className={`glass-card relative ${tier.highlighted ? "ring-2 ring-primary shadow-lg" : ""}`}>
                {tier.highlighted && (
                  <Badge className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-lg">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">/ {tier.duration}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <FontAwesomeIcon icon={faCheck} className="size-3.5 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="block">
                    <Button variant={tier.highlighted ? "default" : "outline"} className="w-full">
                      <FontAwesomeIcon icon={faCalendarCheck} className="size-3.5 mr-1.5" />
                      Book Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Custom Quote */}
          <Card className="glass-card mt-12 p-8 text-center">
            <h2 className="text-xl font-bold mb-2">Need a Custom Package?</h2>
            <p className="text-muted-foreground mb-4 max-w-lg mx-auto">
              Corporate events, multi-day packages, or special requests — we&apos;ll build a charter that fits your exact needs.
            </p>
            <Link href="/contact" className="inline-flex">
              <Button variant="outline">Request Custom Quote</Button>
            </Link>
          </Card>
        </div>
      </section>
    </>
  );
}
