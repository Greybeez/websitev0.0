import React from 'react';
import { useTranslation } from 'react-i18next';
import { Lightbulb, Users, BarChart, Heart } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Lightbulb,
    title: "Program Design",
    description: "Custom-designed skilling programs tailored to industry requirements and local contexts",
    features: ["Curriculum development", "Assessment frameworks", "Quality assurance"],
    color: "primary",
    hoverColor: "hover:bg-primary-600"
  },
  {
    id: 2,
    icon: Users,
    title: "Mobilization Strategy",
    description: "Community-driven approach to identify and engage potential beneficiaries",
    features: ["Community partnerships", "Awareness campaigns", "Candidate screening"],
    color: "secondary",
    hoverColor: "hover:bg-secondary-600"
  },
  {
    id: 3,
    icon: Heart,
    title: "CSR Activities",
    description: "Comprehensive Corporate Social Responsibility programs that create measurable social impact",
    features: ["Impact measurement", "Community development", "Sustainability reporting"],
    color: "accent-orange",
    hoverColor: "hover:bg-accent-orange-600"
  },
  {
    id: 4,
    icon: BarChart,
    title: "Monitoring & Evaluation",
    description: "Comprehensive tracking and impact measurement throughout the program lifecycle",
    features: ["Real-time tracking", "Impact assessment", "Continuous improvement"],
    color: "accent-purple",
    hoverColor: "hover:bg-accent-purple-600"
  }
];

export default function ServicesSnapshot() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('servicesSnapshot.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('servicesSnapshot.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-${service.color}-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 ${service.hoverColor}`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className={`w-2 h-2 bg-${service.color}-500 rounded-full mr-3 flex-shrink-0`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}