import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Smartphone, 
  Download, 
  Star, 
  Users, 
  Briefcase, 
  MapPin, 
  CheckCircle, 
  ArrowRight,
  Play,
  Apple,
  PlayCircle
} from 'lucide-react';

const features = [
  {
    icon: Briefcase,
    title: "Smart Job Matching",
    description: "AI-powered algorithm matches candidates with relevant opportunities based on skills, location, and preferences"
  },
  {
    icon: MapPin,
    title: "Location-Based Search",
    description: "Find jobs near you or explore opportunities in different cities with migration support"
  },
  {
    icon: Users,
    title: "Skills Assessment",
    description: "Built-in assessments help validate your skills and improve your job matching accuracy"
  },
  {
    icon: CheckCircle,
    title: "Application Tracking",
    description: "Track your job applications, interview schedules, and placement status in real-time"
  }
];

const stats = [
  { number: "50K+", label: "Active Users", description: "Job seekers using the platform" },
  { number: "10K+", label: "Job Listings", description: "Active opportunities available" },
  { number: "500+", label: "Partner Companies", description: "Trusted employers on platform" },
  { number: "95%", label: "Success Rate", description: "Successful job placements" }
];

const testimonials = [
  {
    name: "Amit Kumar",
    role: "Factory Worker",
    location: "Bihar → Bangalore",
    content: "JobPar.ai helped me find a perfect job match in Bangalore. The migration support made the transition smooth and stress-free.",
    rating: 5,
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
  },
  {
    name: "Priya Sharma",
    role: "Quality Inspector",
    location: "Jharkhand → Chennai",
    content: "The skills assessment feature helped me understand my strengths and find jobs that matched my abilities perfectly.",
    rating: 5,
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
  }
];

export default function JobParPage() {
  const { t } = useTranslation();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="flex items-center mb-6">
                <Smartphone className="w-12 h-12 text-white mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold text-white">
                  JobPar.ai
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Your AI-powered companion for finding the perfect job. Connecting rural and tribal youth 
                with opportunities across India through smart technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="flex items-center justify-center bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300">
                  <Apple className="w-6 h-6 mr-3" />
                  Download on App Store
                </button>
                <button className="flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
                  <PlayCircle className="w-6 h-6 mr-3" />
                  Get it on Google Play
                </button>
              </div>

              <div className="flex items-center text-white/80">
                <div className="flex items-center mr-6">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  <span className="font-semibold mr-2">4.8</span>
                  <span>App Store Rating</span>
                </div>
                <div className="flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  <span>50K+ Downloads</span>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="relative mx-auto w-80 h-96">
                {/* Phone mockup */}
                <div className="absolute inset-0 bg-gray-900 rounded-3xl shadow-2xl transform rotate-6"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-900">
                  <div className="bg-gray-100 h-6 flex items-center justify-center">
                    <div className="w-16 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                  <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
                    alt="JobPar.ai App Interface"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              JobPar.ai combines artificial intelligence with human insight to create 
              the most effective job search experience for rural and tribal youth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-50 rounded-2xl p-8 hover:shadow-lg hover:bg-white transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How JobPar.ai Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Simple steps to find your dream job with AI-powered assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create Profile",
                description: "Sign up and complete your profile with skills, experience, and job preferences"
              },
              {
                step: "02",
                title: "AI Matching",
                description: "Our AI analyzes your profile and matches you with relevant job opportunities"
              },
              {
                step: "03",
                title: "Apply & Track",
                description: "Apply to jobs directly through the app and track your application status"
              }
            ].map((step, index) => (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real stories from users who found their dream jobs through JobPar.ai
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your Dream Job?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of job seekers who have found success with JobPar.ai
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300">
              <Apple className="w-6 h-6 mr-3" />
              Download on App Store
            </button>
            <button className="flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              <PlayCircle className="w-6 h-6 mr-3" />
              Get it on Google Play
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}