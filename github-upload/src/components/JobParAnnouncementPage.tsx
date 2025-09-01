import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Smartphone, 
  Sparkles, 
  Users, 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight,
  Bell,
  Zap,
  Target,
  Globe,
  Heart,
  CheckCircle
} from 'lucide-react';

export default function JobParAnnouncementPage() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);



  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
    }
  };

  const features = [
    {
      icon: Zap,
      title: "AI-Powered Matching",
      description: "Advanced algorithms connect job seekers with perfect opportunities"
    },
    {
      icon: Target,
      title: "Skills Assessment",
      description: "Built-in tools to evaluate and showcase your capabilities"
    },
    {
      icon: Globe,
      title: "Pan-India Opportunities",
      description: "Access jobs across the entire country with migration support"
    },
    {
      icon: Heart,
      title: "Personalized Experience",
      description: "Tailored job recommendations based on your preferences"
    }
  ];

  const benefits = [
    "Bridge the gap between rural talent and urban opportunities",
    "AI-driven job matching for better success rates",
    "Skills development and assessment tools",
    "Real-time application tracking",
    "Migration support and guidance",
    "Direct communication with employers"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
             {/* Hero Section */}
       <section className="relative py-20 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute inset-0">
           <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
           <div className="absolute top-0 right-1/4 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
           <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-accent-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             {/* Left Side - Content */}
             <div className="text-center lg:text-left">
               {/* Coming Soon Badge */}
               <div className="inline-flex items-center bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-full mb-8 animate-pulse">
                 <Sparkles className="w-5 h-5 mr-2" />
                 <span className="font-semibold">Coming Soon</span>
               </div>

               {/* Main Title */}
               <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 animate-slide-up">
                 JobPar
                 <span className="text-primary-600">.ai</span>
               </h1>

               {/* Subtitle */}
               <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-slide-up">
                 We are soon coming up with a Tech-driven solution to bridge gap between job seekers and job providers of Apparel Sector…
               </p>

               {/* Magic Text */}
               <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-12 animate-pulse">
                 Wait for the magic to happen soon!!
               </div>

               {/* Email Signup */}
               <div className="animate-slide-up">
                 {!isSubmitted ? (
                   <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md lg:max-w-none">
                     <input
                       type="email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       placeholder="Enter your email for early access"
                       className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none text-lg"
                       required
                     />
                     <button
                       type="submit"
                       className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-700 hover:to-secondary-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                     >
                       <Bell className="w-5 h-5 mr-2" />
                       Notify Me
                     </button>
                   </form>
                 ) : (
                   <div className="bg-green-100 border-2 border-green-500 text-green-800 px-6 py-4 rounded-xl text-center max-w-md lg:max-w-none">
                     <Sparkles className="w-6 h-6 mx-auto mb-2" />
                     <p className="font-semibold">You're on the list! 🎉</p>
                     <p className="text-sm">We'll notify you as soon as JobPar.ai launches!</p>
                   </div>
                 )}
               </div>
             </div>

                           {/* Right Side - App Interface */}
              <div className="relative animate-slide-up">
                <div className="relative mx-auto w-80 h-96 lg:w-96 lg:h-[500px]">
                  {/* JobPar.ai App Screenshot */}
                  <img 
                    src="/images/Mobileappscreen.jpeg" 
                    alt="JobPar.ai Mobile App Interface" 
                    className="w-full h-full object-contain rounded-3xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      // Fallback to text if image fails to load
                      const fallback = document.createElement('div');
                      fallback.className = 'h-full bg-white p-6 flex flex-col items-center justify-center text-center rounded-3xl';
                      fallback.innerHTML = `
                        <div class="text-2xl font-bold text-gray-900 mb-2">JobPar.ai</div>
                        <div class="text-sm text-gray-600">Your Stitch to Success</div>
                        <div class="text-xs text-orange-500 mt-4">Empowering Mankind...</div>
                      `;
                      target.parentNode?.appendChild(fallback);
                    }}
                  />
                </div>
              </div>
           </div>
         </div>
       </section>

      {/* Features Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What's Coming
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of job searching with cutting-edge AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why JobPar.ai?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Revolutionizing the job search experience for the apparel sector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-lg">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                For Job Seekers & Employers
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                JobPar.ai is designed to serve both sides of the employment equation, creating a seamless ecosystem for the apparel industry.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Users className="w-8 h-8 text-primary-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Job Seekers</h3>
                    <p className="text-gray-600">Find opportunities that match your skills and aspirations, with support for migration and career growth.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Briefcase className="w-8 h-8 text-secondary-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Employers</h3>
                    <p className="text-gray-600">Access a pool of qualified candidates with verified skills and experience in the apparel sector.</p>
                  </div>
                </div>
              </div>
            </div>

                                                                                                       <div className="relative animate-slide-up">
                <div className="relative mx-auto w-80 h-96">
                  {/* JobPar.ai App Screenshot */}
                  <img 
                    src="/images/Mobileappscreen.jpeg" 
                    alt="JobPar.ai Mobile App Interface" 
                    className="w-full h-full object-contain rounded-3xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      // Fallback to text if image fails to load
                      const fallback = document.createElement('div');
                      fallback.className = 'h-full bg-white p-6 flex flex-col items-center justify-center text-center rounded-3xl';
                      fallback.innerHTML = `
                        <div class="text-2xl font-bold text-gray-900 mb-2">JobPar.ai</div>
                        <div class="text-sm text-gray-600">Your Stitch to Success</div>
                        <div class="text-xs text-orange-500 mt-4">Empowering Mankind...</div>
                      `;
                      target.parentNode?.appendChild(fallback);
                    }}
                  />
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Be the First to Experience the Magic
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of job seekers and employers waiting for JobPar.ai to revolutionize the apparel industry
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-700 hover:to-secondary-700 transform hover:scale-105 transition-all duration-300">
              <Bell className="w-5 h-5 mr-2" />
              Get Early Access
            </button>
            <button className="flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              <ArrowRight className="w-5 h-5 mr-2" />
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
