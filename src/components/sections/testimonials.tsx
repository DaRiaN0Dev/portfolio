"use client";

import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { GlassCard } from "@/components/shared/glass-card";
import { SectionHeader } from "@/components/shared/section-header";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/data/testimonials";
import { revealOnScroll, slideUp } from "@/lib/animations";

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <SectionWrapper id="testimonials" className="bg-muted/20">
      <SectionHeader
        label="Testimonials"
        title="Client feedback"
        description="What collaborators say about working together."
        align="center"
      />

      <motion.div {...revealOnScroll} initial="hidden" variants={slideUp()}>
        <div className="relative mx-auto max-w-3xl">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-0 flex-[0_0_100%] px-2">
                  <AnimatePresence mode="wait">
                    <GlassCard className="relative text-center">
                      <Quote className="mx-auto mb-4 h-8 w-8 text-primary/40" />
                      <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                      <div className="mt-6">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </GlassCard>
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <Button variant="outline" size="icon" onClick={scrollPrev} aria-label="Previous">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === selectedIndex ? "w-6 bg-primary" : "w-2 bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={scrollNext} aria-label="Next">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
