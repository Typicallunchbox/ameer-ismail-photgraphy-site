import Link from 'next/link';
import { Camera } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Camera className="h-6 w-6" />
              <span className="text-xl font-semibold">Ameer Ismail</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Capturing life's precious moments with elegance and style.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {/* <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About Me
                </Link>
              </li> */}
              <li>
                <Link href="/gallery" className="text-sm text-muted-foreground hover:text-foreground">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: info@ameerismailphotography.com</li>
              <li>Phone: 079 161 5761</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ameer Ismail Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}