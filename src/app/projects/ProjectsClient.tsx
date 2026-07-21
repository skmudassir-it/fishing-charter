"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { gallery } from "@/lib/data";

const categories = ["All", "Deep Sea", "Inshore", "Fly Fishing", "Family", "Sunset Cruise", "Corporate"];

export default function ProjectsClient() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? gallery : gallery.filter((p) => p.category === filter);

  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-3">Photo Gallery</h1>
            <div className="gradient-divider w-24 mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our latest catches, happy anglers, and stunning Gulf Coast moments.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((item, i) => (
              <Card key={i} className="glass-card overflow-hidden group">
                <div className="relative w-full h-56 bg-muted flex items-center justify-center overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <Badge className="absolute top-3 left-3 text-xs bg-white/80 text-foreground backdrop-blur-sm">
                    {item.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                  <CardDescription className="text-xs">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <FontAwesomeIcon icon={faSearch} className="size-12 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground">No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
