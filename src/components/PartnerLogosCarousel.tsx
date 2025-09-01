import React from 'react';
import { useTranslation } from 'react-i18next';

const partners = [
  {
    id: 1,
    name: "Tata Motors",
    logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    category: "Automotive"
  },
  {
    id: 2,
    name: "Mahindra Group",
    logo: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    category: "Manufacturing"
  },
  {
    id: 3,
    name: "Bajaj Auto",
    logo: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    category: "Automotive"
  },
  {
    id: 4,
    name: "Hero MotoCorp",
    logo: "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    category: "Manufacturing"
  },
  {
    id: 5,
    name: "L&T Construction",
    logo: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    category: "Construction"
  },
  {
    id: 6,
    name: "Godrej Industries",
    logo: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    category: "FMCG"
  },
  {
    id: 7,
    name: "Reliance Industries",
    logo: "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    category: "Petrochemicals"
  },
  {
    id: 8,
    name: "Wipro Limited",
    logo: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    category: "IT Services"
  },
  {
    id: 9,
    name: "Infosys",
    logo: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    category: "Technology"
  },
  {
    id: 10,
    name: "Asian Paints",
    logo: "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    category: "Paints"
  }
];

export default function PartnerLogosCarousel() {
  const { t } = useTranslation();

  // Duplicate the partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('partnerLogos.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('partnerLogos.description')}
          </p>
        </div>

        {/* Logos Carousel */}
        <div className="relative">
          <div className="flex animate-scroll-infinite">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 mx-8 group"
              >
                <div className="w-40 h-20 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center p-4 group-hover:shadow-md transition-all duration-300 group-hover:scale-105">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium text-gray-900">{partner.name}</p>
                  <p className="text-xs text-gray-500">{partner.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Stats below carousel */}
        <div className="mt-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-primary-600">500+</div>
              <div className="text-sm text-gray-600">{t('partnerLogos.stats.factories')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary-600">50+</div>
              <div className="text-sm text-gray-600">{t('partnerLogos.stats.brands')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent-purple-600">15+</div>
              <div className="text-sm text-gray-600">{t('partnerLogos.stats.states')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent-orange-600">10+</div>
              <div className="text-sm text-gray-600">{t('partnerLogos.stats.years')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}