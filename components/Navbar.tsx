'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, GalleryVerticalEnd } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="text-xl font-semibold">
              Ameer Ismail
            </Link>
          </div>

          {/* Desktop Navigation */}
          <Link href="/gallery">
            <div className='bg-blue-400 px-5 py-2 text-white rounded-md items-center hidden md:flex md:gap-2 hover:bg-blue-300'>
             <GalleryVerticalEnd className="h-4 w-4" />

              
            <p className="text-sm font-medium transition-colors ">
            
              Gallery
              </p> 
            </div>
            </Link>


          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link 
                    href="/gallery"
                    className="text-lg font-medium hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Gallery
                  </Link>
                  <Link 
                    href="#getInTouch"
                    className="text-lg font-medium hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Get in touch
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}