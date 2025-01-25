'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const allImages = {
  'Fashion Catalogue': [
    { url: "https://images.unsplash.com/photo-1509631179647-0177331693ae", alt: "Fashion photo 1" },
    { url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f", alt: "Fashion photo 2" },
    { url: "https://images.unsplash.com/photo-1496747611176-843222e1e57c", alt: "Fashion photo 3" },
    { url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b", alt: "Fashion photo 4" },
    { url: "https://images.unsplash.com/photo-1495385794356-15371f348c31", alt: "Fashion photo 5" },
  ],
  'Wedding Catalogue': [
    { url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed", alt: "Wedding photo 1" },
    { url: "https://images.unsplash.com/photo-1583939411023-14783179e581", alt: "Wedding photo 2" },
    { url: "https://images.unsplash.com/photo-1606800052052-a08af7148866", alt: "Wedding photo 3" },
    { url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc", alt: "Wedding photo 4" },
    { url: "https://images.unsplash.com/photo-1519741497674-611481863552", alt: "Wedding photo 5" },
  ],
  'Recently Captured Memories': [
    { url: "https://images.unsplash.com/photo-1623091410901-00e2d268901f", alt: "Recent photo 1" },
    { url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a", alt: "Recent photo 2" },
    { url: "https://images.unsplash.com/photo-1519741497674-611481863552", alt: "Recent photo 3" },
    { url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b", alt: "Recent photo 4" },
    { url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff", alt: "Recent photo 5" },
  ],
};

export default function Gallery() {
  const [category, setCategory] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const getFilteredImages = () => {
    if (category === "All") {
      return Object.values(allImages).flat();
    }
    return allImages[category as keyof typeof allImages] || [];
  };

  return (
    <div className="min-h-screen pt-20 px-6 sm:px-8 md:px-12">
      <h1 className="text-4xl font-bold mb-8">Gallery</h1>
      
      <div className="mb-8">
        <Select
          value={category}
          onValueChange={setCategory}
        >
          <SelectTrigger className="w-full sm:w-[280px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Fashion Catalogue">Fashion Catalogue</SelectItem>
            <SelectItem value="Wedding Catalogue">Wedding Catalogue</SelectItem>
            <SelectItem value="Recently Captured Memories">Recently Captured Memories</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="columns-2 sm:columns-2 lg:columns-3 gap-4">
        {getFilteredImages().map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div className="relative mb-4 break-inside-avoid">
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg cursor-pointer">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJyEkKSQ4MDAwMDAwODAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/2wBDAR0XFyAeIB4kHh4kMCQoJDA4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDD/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] max-h-[95vh] p-0">
              <div className="relative w-full h-[90vh]">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-contain"
                  priority
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                  // onClick={() => document.querySelector('button[aria-label="Close"]')?.click()}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}