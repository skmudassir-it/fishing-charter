import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faStar, faShip, faAnchor, faLifeRing, faUsers, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig, team } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the ReelTime Fishing Charters team. USCG licensed captains with 30+ years of Gulf Coast fishing experience. Your guides to the best fishing in Destin, FL.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-3">About ReelTime</h1>
            <div className="gradient-divider w-24 mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Three decades on the Gulf Coast. Three thousand trips. One mission: give every angler the fishing trip of a lifetime.
            </p>
          </div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Captain Dave Morrison founded ReelTime Fishing Charters in 1994 with one boat, a passion for fishing, and a vision to share the incredible Gulf Coast fishery with anglers from around the world. What started as a one-man operation out of Destin Harbor has grown into the premier charter fleet on the Emerald Coast.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Today, ReelTime operates three fully equipped vessels and a team of USCG-licensed captains who know these waters like the back of their hand. Whether it&apos;s trolling the deep blue for marlin, stalking redfish on the flats, or teaching a 7-year-old how to cast their first line — we treat every trip like it&apos;s the most important one we&apos;ve ever run.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We&apos;re not just a charter company. We&apos;re a family of anglers dedicated to conservation, sustainable fishing practices, and passing on the love of the water to the next generation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: faAward, label: "30+ Years", desc: "Serving the Gulf Coast" },
                { icon: faShip, label: "3,000+", desc: "Trips Completed" },
                { icon: faStar, label: "500+", desc: "Five-Star Reviews" },
                { icon: faAnchor, label: "100%", desc: "Safety Record" },
              ].map((stat, i) => (
                <Card key={i} className="glass-card text-center">
                  <CardContent className="p-5">
                    <FontAwesomeIcon icon={stat.icon} className="size-6 text-primary mb-2" />
                    <div className="text-2xl font-bold">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.desc}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-3">Meet Your Captains</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
            {team.map((member, i) => (
              <Card key={i} className="glass-card text-center overflow-hidden">
                <div className="w-24 h-24 mx-auto mt-6 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <Card className="glass-card p-8 sm:p-12 text-center">
            <h2 className="text-2xl font-bold mb-3">Come Fish With Us</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Whether you&apos;re a seasoned angler chasing a trophy or a family looking for a fun day on the water — we&apos;ve got the perfect charter for you.
            </p>
            <Link href="/contact" className="inline-flex">
              <Button size="lg">
                <FontAwesomeIcon icon={faCalendarCheck} className="size-4 mr-2" />
                Book Your Adventure
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </>
  );
}
