"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { TestimonialItem } from "@/lib/data";

export function TestimonialCarousel({ items }: { items: TestimonialItem[] }) {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <Carousel plugins={[autoplay.current]} opts={{ loop: true, align: "start" }}>
      <CarouselContent>
        {items.map((item, i) => (
          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
            <Card className="glass-card h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <FontAwesomeIcon icon={faQuoteLeft} className="size-5 text-primary/30 mb-3" />
                <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{item.text}</p>
                <div className="flex gap-0.5 mt-3 mb-1">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <FontAwesomeIcon key={j} icon={faStar} className="size-3.5 text-accent" />
                  ))}
                </div>
                <div className="font-semibold text-sm">{item.name}</div>
                <div className="text-xs text-muted-foreground">{item.role}</div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
