import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

export default function AboutSection() {
  const { t } = useTranslation();

  const features = [
    t('aboutSection.feature1'),
    t('aboutSection.feature2'),
    t('aboutSection.feature3'),
    t('aboutSection.feature4')
  ];

  // Sample images for the carousel - replace with your actual images
  const carouselImages = [
    "https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('aboutSection.title').replace('India\'s Future', '')}
              <span className="text-primary-600"> {t('aboutSection.titleHighlight')}</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('aboutSection.paragraph1')}
            </p>

            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-6 h-6 text-secondary-500 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center group">
                {t('aboutSection.learnMoreAboutUs')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transform hover:scale-105 transition-all duration-300">
                {t('aboutSection.viewSuccessStories')}
              </button>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
              <ImageCarousel
                images={carouselImages}
                autoPlay={true}
                autoPlayInterval={5000}
                showDots={true}
                showArrows={true}
                className="w-full h-96"
              />
              <div className="p-6 bg-gradient-to-r from-primary-50 to-secondary-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('aboutSection.cardTitle')}
                </h3>
                <p className="text-gray-600">
                  {t('aboutSection.cardDescription')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}