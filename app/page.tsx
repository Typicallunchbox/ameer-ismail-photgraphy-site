'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ImageCarousel from '@/components/ImageCarousel';
import ContactForm from "../components/ContactForm";
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Mail, PhoneIcon } from 'lucide-react';

export default function Home() {
    const [images1, setImages1] = useState([]);
    const [images2, setImages2] = useState([]);
    const [images3, setImages3] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
      const fetchImages = async () => {
        const folders = ["fashion-catalogue", "wedding-catalogue", "recently-captured-memories"];
      
        try {
          const responses = await Promise.all(
            folders.map((folder) =>
              fetch(`/api/cloudinary?folder=home/${folder}`).then((res) => res.json())
            )
          );
      
          const [fashionImages, weddingImages, recentImages] = responses;
        
          setImages1(fashionImages)
          setImages2(weddingImages)
          setImages3(recentImages)
        } catch (error) {
          console.error("Error fetching images:", error);
          return { fashionImages: [], weddingImages: [], recentImages: [] };
        }
      };
      fetchImages();
    }, [])
    

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="h-screen relative"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dt9bynx31/image/upload/v1739296390/home/hero.webp')",
          backgroundSize: 'cover',
          backgroundPositionX: '57%'
        }}
      >
       
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-heroforeground/80" />
        
        <div className="absolute inset-0 flex flex-col justify-end bottom-10 md:bottom-20 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto">
          <div className="space-y-6">            
            <h1 className="text-3xl lg:text-5xl max-w-2xl text-secondary opacity-0 animate-left-fade-in [animation-delay:.5s]">
              Crafting <span className='font-bold text-primary'>unforgettable moments</span> through elegant, professional photography.
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="w-full sm:w-auto opacity-0 animate-top-fade-in [animation-delay:1s]">
                <a href='#getInTouch'>Get in Touch</a>
              </Button>
              
              <Link href="/gallery" className="w-full sm:w-auto opacity-0 animate-top-fade-in [animation-delay:1.25s]">
                <Button variant="outline" size="lg" className="w-full">
                  View Gallery
                </Button>
              </Link>
            </div>
            <div className='flex items-center gap-3'>
              <div className="w-[40px] h-[40px] bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 p-1 rounded-full">
                <a target="_blank" href="https://www.instagram.com/ameer.ismail.wedding/" rel="noopener noreferrer">
                  <Image
                    src={'/icons/instagram.svg'}
                    alt={'instagram-icon'}
                    width={25}
                    height={25}
                    className="invert mix-blend-screen mx-auto my-1"
                  />
                </a>
              </div>
              <a  target="_blank" href="https://www.facebook.com/ameer.ismail.photo/" rel="noopener noreferrer">
                <Image
                  src={'/icons/facebook.svg'}
                  alt={'facebook-icon'}
                  width={35}
                  height={35}
                  className='invert'
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Sections */}
      <section className="py-20 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto space-y-20">
        <ImageCarousel title="Recently Captured Memories" images={images3} />
        <ImageCarousel title="Wedding Catalogue" images={images2} />
        <ImageCarousel title="Fashion Catalogue" images={images1} />
      </section>

      {/* Contact Section */}
      <section id='getInTouch' className="py-20 sm:px-8 md:px-12 bg-muted/50">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold px-6">Get in Touch</h2>
          <p className="text-md md:text-lg text-muted-foreground px-6">
            You've found your dream photographer. Let's capture the magic — reach out today to book your session!
          </p>
          
          <div className="bg-accent/50 p-4 rounded-lg text-sm space-y-2">
            <div className="flex items-center space-x-2 justify-center">
              <Mail className="h-6 w-6" />
              <a className='font-bold underline' href="mailto:info@ameerismailphotography.com">info@ameerismailphotography.com</a>

            </div>
            <div className="flex items-center space-x-2 justify-center pt-2">
              <PhoneIcon className="h-6 w-6" />
              <a className='font-bold underline'href="tel:0791615761">079 161 5761</a>
            </div>

            <div className='flex items-center justify-center md:gap-3 pt-10'>
              <h3 className="text-lg">Social Links:</h3>
              <div className="w-[40px] h-[40px] bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 p-1 rounded-full">
                <a target="_blank" href="https://www.instagram.com/ameer.ismail.wedding/" rel="noopener noreferrer">
                  <Image
                    src={'/icons/instagram.svg'}
                    alt={'instagram-icon'}
                    width={25}
                    height={25}
                    className="invert mix-blend-screen mx-auto my-1"
                  />
                </a>
              </div>
              <a  target="_blank" href="https://www.facebook.com/ameer.ismail.photo/" rel="noopener noreferrer">
                <Image
                  src={'/icons/facebook.svg'}
                  alt={'facebook-icon'}
                  width={35}
                  height={35}
                />
              </a>
            </div>
            
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm text-left">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}