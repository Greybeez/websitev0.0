import React from 'react';
import { ArrowRight, Users, Building } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Lives?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Join us in creating sustainable employment opportunities and building a skilled workforce for India's future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* B2C CTA */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1">
            <Users className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Looking for Training & Jobs?
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Discover comprehensive skills training programs designed to secure your future with leading employers
            </p>
            <button className="w-full bg-white text-primary-600 py-4 px-6 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 flex items-center justify-center group">
              Explore Opportunities
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* B2B CTA */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1">
            <Building className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Partner with Us
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Build a reliable, skilled workforce through our proven training and placement programs
            </p>
            <button className="w-full border-2 border-white text-white py-4 px-6 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center group">
              Start Partnership
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-white/80 text-lg">
            Join <span className="font-semibold text-white">50,000+ success stories</span> and counting
          </p>
        </div>
      </div>
    </section>
  );
}