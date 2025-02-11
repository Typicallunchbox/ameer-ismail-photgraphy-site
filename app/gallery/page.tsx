'use client';

import { useEffect, useState } from 'react';
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


export default function Gallery() {
  const [category, setCategory] = useState<string>("all");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const categories = [
    { label: "All", value: "all" },
    { label: "Fashion Catalogue", value: "fashion" },
    { label: "Wedding Catalogue", value: "wedding" }
    ];


  useEffect(() => {
    if (!category) return;

    async function fetchImages() {
      setLoading(true);
      try {
        const response = await fetch(`/api/cloudinary?folder=${category}`);
        const data = await response.json();
        setImages(data || []);

        console.log('data:', data)
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [category]);
  // if (loading) return <p>Loading images...</p>;

  return (
    <div className="min-h-screen pt-20 md:pt-40 px-2 sm:px-8 md:px-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 opacity-0 animate-top-fade-in [animation-delay:.5s]">Gallery</h1>
      {/* <p className='pb-4'>Catalogues:</p> */}

      <div className="flex flex-wrap gap-2 mb-4 opacity-0 animate-top-fade-in [animation-delay:.8s]">
        {categories.map(({ label, value }) => (
          <Button
            key={value}
            onClick={() => setCategory(value)}
            variant={category === value ? "default" : "outline"}
          >
            {label}
          </Button>
        ))}
      </div>
      {loading && <p className="w-fit p-4">Fetching Catalogue<span className={`loader w-6 h-6 ml-4 border-2 border-t-orange-500`}></span></p>}
      {!loading && <div className="columns-2 sm:columns-2 lg:columns-3 gap-2">
        {images && images.length > 0 && images.map((image: any, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div className="relative mb-2 break-inside-avoid">
                <div className="relative w-full overflow-hidden rounded-sm cursor-pointer">
                  <Image
                    src={image.secure_url}
                    alt={image.display_name}
                    width={0}
                    height={0}
                    style={{ width: "100%", height: "auto" }}
                    className={`object-cover transition-transform hover:scale-105 ${index % 2 === 0 ? `opacity-0 animate-top-fade-in [animation-delay:1${index}.5s]`: `opacity-0 animate-left-fade-in [animation-delay:1${index*2}.5s]`}`}
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
                  src={image.secure_url}
                  alt={image.display_name}
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
      </div>}
    </div>
  );
}