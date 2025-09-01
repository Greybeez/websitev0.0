import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Factory, TrendingUp, DollarSign } from 'lucide-react';

const impacts = [
  {
    id: 1,
    icon: Users,
    number: "50,000+",
    label: "Lives Transformed",
    description: "Rural and tribal youth empowered with skills",
    gradient: "from-primary-500 to-primary-600",
    color: "text-primary-600"
  },
  {
    id: 2,
    icon: Factory,
    number: "500+",
    label: "Partner Factories",
    description: "Leading companies trust our workforce solutions",
    gradient: "from-secondary-500 to-secondary-600",
    color: "text-secondary-600"
  },
  {
    id: 3,
    icon: TrendingUp,
    number: "95%",
    label: "Placement Rate",
    description: "Exceptional success in job placement",
    gradient: "from-accent-purple-500 to-accent-purple-600",
    color: "text-accent-purple-600"
  },
  {
    id: 4,
    icon: DollarSign,
    number: "₹15,000",
    label: "Average Salary",
    description: "Competitive wages for our graduates",
    gradient: "from-accent-orange-500 to-accent-orange-600",
    color: "text-accent-orange-600"
  }
];

export default function ImpactHighlights() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('impactHighlights.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('impactHighlights.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            const impactKey = impact.id === 1 ? 'livesTransformed' : 
                             impact.id === 2 ? 'partnerFactories' : 
                             impact.id === 3 ? 'placementRate' : 'averageSalary';
            return (
              <div
                key={impact.id}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${impact.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <div className={`text-4xl font-bold ${impact.color} mb-2`}>
                  {t(`impactHighlights.${impactKey}.number`)}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t(`impactHighlights.${impactKey}.label`)}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {t(`impactHighlights.${impactKey}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}