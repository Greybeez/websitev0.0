import React from 'react';
import { BookOpen, MapPin, TrendingUp, ArrowRight } from 'lucide-react';

const programs = [
  {
    id: 1,
    icon: BookOpen,
    title: "Comprehensive Training",
    description: "Industry-relevant skills training designed in partnership with leading manufacturers",
    features: ["Technical skills development", "Soft skills enhancement", "Industry certifications"],
    gradient: "from-primary-500 to-primary-600",
    bgGradient: "from-primary-50 to-primary-100"
  },
  {
    id: 2,
    icon: MapPin,
    title: "Migration Support",
    description: "End-to-end support for safe and successful migration to employment opportunities",
    features: ["Safe accommodation", "Local orientation", "Ongoing mentorship"],
    gradient: "from-secondary-500 to-secondary-600",
    bgGradient: "from-secondary-50 to-secondary-100"
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Career Growth",
    description: "Continuous support for career advancement and skill upgradation",
    features: ["Performance tracking", "Advancement opportunities", "Leadership development"],
    gradient: "from-accent-purple-500 to-accent-purple-600",
    bgGradient: "from-purple-50 to-purple-100"
  }
];

export default function ProgramSpotlight() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AMAS Program Spotlight
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our flagship Aggregate Model for Skilling program provides comprehensive solutions 
            for workforce development and employment generation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={program.id}
                className="group bg-white rounded-2xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${program.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {program.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full bg-gradient-to-r ${program.bgGradient} text-gray-900 py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center group`}>
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}