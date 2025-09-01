import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ImageCarousel from './ImageCarousel';
import { Loader2 } from 'lucide-react';

export default function StrapiTestPage() {
  const { t } = useTranslation();
  const [images, setImages] = useState<string[]>([]);
  const [carouselData, setCarouselData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStrapiImages = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch data from your Strapi API endpoint
        const response = await fetch('http://localhost:1337/api/carausel-images?populate=*');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Check if data.data exists and is an array
        if (!data.data || !Array.isArray(data.data)) {
          throw new Error('Invalid data structure from Strapi API');
        }
        
        // Filter only active images and extract image URLs
        const activeImages = data.data
          .filter((item: any) => item?.IsActive === true)
          .map((item: any) => {
            const imageUrl = item?.Image?.url;
            return imageUrl ? `http://localhost:1337${imageUrl}` : null;
          })
          .filter((url: string | null) => url !== null);
        
        setImages(activeImages);
        setCarouselData(data.data.filter((item: any) => item?.IsActive === true));
      } catch (err) {
        console.error("Failed to fetch images from Strapi:", err);
        setError(`Failed to load images from Strapi: ${err instanceof Error ? err.message : 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };

    fetchStrapiImages();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('strapiTestPage.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('strapiTestPage.description')}
          </p>
          {carouselData.length > 0 && (
            <p className="text-sm text-gray-500 mt-4">
              Loaded {carouselData.length} images from Strapi CMS
            </p>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-96">
              <Loader2 className="w-12 h-12 text-primary-500 animate-spin mb-4" />
              <p className="text-gray-600 text-lg">Loading images from Strapi CMS...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center h-96 text-red-600">
              <p className="text-lg">{error}</p>
              <p className="text-sm mt-2">Make sure Strapi is running on http://localhost:1337</p>
            </div>
          ) : (
            <ImageCarousel
              images={images}
              autoPlay={true}
              autoPlayInterval={4000}
              showDots={true}
              showArrows={true}
              className="w-full h-[400px] md:h-[500px] lg:h-[600px]"
            />
          )}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">
            {carouselData.length > 0 
              ? `Successfully loaded ${carouselData.length} images from your Strapi CMS instance.`
              : 'This page demonstrates dynamic content loading from Strapi CMS.'
            }
          </p>
          {carouselData.length > 0 && (
            <div className="mt-4 text-xs text-gray-500">
              <p>Image details:</p>
              {carouselData.map((item, index) => (
                <p key={index}>
                  {index + 1}. {item.Title} - Order: {item.order}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}