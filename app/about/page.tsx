'use client';

import Image from 'next/image';
import { Camera, Award, Heart, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        <h1 className="text-4xl font-bold mb-12">About Me</h1>
        
        {/* Hero Section */}
        <div className="space-y-8 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-[4/3] w-full max-w-md mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1633114127188-99b4dd741180"
                alt="Ameer Ismail - Professional Photographer"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">Ameer Ismail</h2>
              <p className="text-lg text-muted-foreground">
                With over a decade of experience capturing life's most precious moments, 
                I've developed a passion for creating timeless photographs that tell unique stories.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="p-4 bg-card rounded-lg border">
              <p className="font-bold text-2xl">10+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="p-4 bg-card rounded-lg border">
              <p className="font-bold text-2xl">500+</p>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Specialties Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-card rounded-lg border space-y-4">
            <Camera className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-semibold">Wedding Photography</h3>
            <p className="text-muted-foreground">
              Specializing in capturing the magic of your special day with a blend of 
              candid moments and artistic portraits.
            </p>
          </div>
          
          <div className="p-6 bg-card rounded-lg border space-y-4">
            <Heart className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-semibold">Fashion Photography</h3>
            <p className="text-muted-foreground">
              Creating stunning fashion portfolios that highlight the beauty and 
              essence of both the subject and the style.
            </p>
          </div>
          
          <div className="p-6 bg-card rounded-lg border space-y-4">
            <Users className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-semibold">Event Coverage</h3>
            <p className="text-muted-foreground">
              Documenting special events with attention to detail, ensuring no 
              precious moment goes uncaptured.
            </p>
          </div>
        </div>

        {/* Journey Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold mb-6">My Journey</h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              My journey in photography began with a simple passion for capturing moments. 
              What started as a hobby quickly evolved into a lifelong pursuit of visual storytelling.
            </p>
            <p>
              Having worked across multiple genres of photography, from intimate weddings to 
              high-fashion shoots, I've developed a versatile style that adapts to each 
              unique situation while maintaining artistic consistency.
            </p>
            <p>
              I believe that great photography is about more than just technical skill—it's 
              about connecting with people and understanding their vision. This philosophy 
              has helped me build lasting relationships with clients who trust me to capture 
              their most important moments.
            </p>
          </div>
        </div>

        {/* Awards Section */}
        <div className="bg-muted/50 rounded-lg p-8 mb-16">
          <div className="flex items-center gap-4 mb-6">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-semibold">Recognition & Awards</h2>
          </div>
          <ul className="space-y-4 text-muted-foreground">
            <li>🏆 Best Wedding Photographer 2023 - Local Photography Awards</li>
            <li>🎯 Featured in Professional Photography Magazine</li>
            <li>⭐ Top 10 Fashion Photographers in the Region</li>
            <li>📸 Member of Professional Photographers Association</li>
          </ul>
        </div>
      </div>
    </div>
  );
}