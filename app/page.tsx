import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ImageCarousel from '@/components/ImageCarousel';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

// Sample image data - replace with your actual images
const recentImages = [
  { url: "https://images.unsplash.com/photo-1623091410901-00e2d268901f", alt: "Recent wedding photo 1" },
  { url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a", alt: "Recent wedding photo 2" },
  { url: "https://images.unsplash.com/photo-1519741497674-611481863552", alt: "Recent wedding photo 3" },
  { url: "https://images.unsplash.com/photo-1623091410901-00e2d268901f", alt: "Recent wedding photo 1" },
  { url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a", alt: "Recent wedding photo 2" },
  { url: "https://images.unsplash.com/photo-1519741497674-611481863552", alt: "Recent wedding photo 3" }
];

const weddingImages = [
  { url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed", alt: "Wedding photo 1" },
  { url: "https://images.unsplash.com/photo-1583939411023-14783179e581", alt: "Wedding photo 2" },
  { url: "https://images.unsplash.com/photo-1606800052052-a08af7148866", alt: "Wedding photo 3" },
];

const fashionImages = [
  { url: "https://images.unsplash.com/photo-1509631179647-0177331693ae", alt: "Fashion photo 1" },
  { url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f", alt: "Fashion photo 2" },
  { url: "https://images.unsplash.com/photo-1496747611176-843222e1e57c", alt: "Fashion photo 3" },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="h-screen relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1604017011826-d3b4c23f8914')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
        
        <div className="absolute inset-0 flex flex-col justify-end pb-20 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto">
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-primary">
              156 Happy Clients
            </h4>
            
            <h1 className="text-3xl lg:text-5xl max-w-2xl">
              Crafting <span className='font-bold'>unforgettable moments</span> through elegant, professional photography.
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="w-full sm:w-auto">
                <a href='#getInTouch'>Get in Touch</a>
              </Button>
              
              <Link href="/gallery" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full">
                  View Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Sections */}
      <section className="py-20 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto space-y-20">
        <ImageCarousel title="Recently Captured Memories" images={recentImages} />
        <ImageCarousel title="Wedding Catalogue" images={weddingImages} />
        <ImageCarousel title="Fashion Catalogue" images={fashionImages} />
      </section>

      {/* Contact Section */}
      <section id='getInTouch' className="py-20 sm:px-8 md:px-12 bg-muted/50">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold px-6">Get in Touch</h2>
          <p className="text-lg text-muted-foreground px-6">
            You've found your dream photographer. Let's capture the magic — reach out today to book your session!
          </p>
          
          <div className="bg-accent/50 p-4 rounded-lg text-sm space-y-2">
            <p>Email: contact@ameerismail.com</p>
            <p>Phone: +1 (555) 123-4567</p>
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