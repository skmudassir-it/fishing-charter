"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faClock, faPaperPlane, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig, services } from "@/lib/data";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, service, message }),
      });
      if (res.ok) setSubmitted(true);
    } catch {}
    setLoading(false);
  };

  if (submitted) {
    return (
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-lg px-4 text-center">
          <Card className="glass-card p-8">
            <FontAwesomeIcon icon={faCheckCircle} className="size-16 text-primary mb-4" />
            <h1 className="text-2xl font-bold mb-2">Quote Request Sent!</h1>
            <p className="text-muted-foreground mb-6">
              Thanks, {name}! We&apos;ll get back to you within 24 hours to confirm availability and pricing.
            </p>
            <Link href="/" className="inline-flex">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Book Your Charter</h1>
          <div className="gradient-divider w-24 mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to reel in the big one? Fill out the form below and we&apos;ll get back to you within 24 hours with availability and a custom quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="glass-card">
              <CardContent className="p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faPhone} className="size-4 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">Phone</div>
                    <div className="text-sm text-muted-foreground">{siteConfig.phone}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faEnvelope} className="size-4 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">Email</div>
                    <div className="text-sm text-muted-foreground">{siteConfig.email}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faLocationDot} className="size-4 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">Location</div>
                    <div className="text-sm text-muted-foreground">{siteConfig.address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faClock} className="size-4 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">Hours</div>
                    <div className="text-sm text-muted-foreground">Daily 6:00 AM – 8:00 PM</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Request a Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Name *</label>
                      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Email *</label>
                      <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@email.com" required />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Phone</label>
                      <Input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="(555) 000-0000" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Service</label>
                      <Select value={service} onValueChange={(v: string | null) => setService(v || "")}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a charter..." />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((s) => (
                            <SelectItem key={s.slug} value={s.title}>{s.title}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Message</label>
                    <Textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your preferred dates, number of anglers, and any special requests..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    <FontAwesomeIcon icon={faPaperPlane} className="size-4 mr-2" />
                    {loading ? "Sending..." : "Send Quote Request"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
