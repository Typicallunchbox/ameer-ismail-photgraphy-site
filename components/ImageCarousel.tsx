'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ImageCarouselProps {
  title: string;
  images: { secure_url: string; display_name: string; }[];
}

export default function ImageCarousel({ title, images }: ImageCarouselProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                <Image
                  src={image.secure_url}
                  alt={image.display_name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}