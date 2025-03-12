import type { Metadata } from 'next';
import GalleryClient from "./page.client";

export default async function Gallery() {
  return (
    <GalleryClient />
  )
}


export async function generateMetadata({ searchParams }: { searchParams: any }) {
  const title = `Your Favourites | Compare Golf`;
  const description = 'View your favourited golf clubs and compare prices from top retailers in New Zealand. Find the best deals on your saved golf clubs with Compare Golf.';

  const meta: Metadata = {
    title: 'Photography Gallery | Ameer Ismail Photography',
    description:
      'Explore the stunning gallery of wedding and fashion photography by Ameer Ismail. Capturing unforgettable moments with creativity and passion.',
    keywords: [
      'wedding photography',
      'fashion photography',
      'wedding gallery',
      'photography gallery',
      'Ameer Ismail',
      'wedding portraits',
      'fashion editorial',
      'photographer portfolio',
    ]
};
  return meta;
}