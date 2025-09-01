import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Program Graduate",
    location: "Jharkhand",
    content: "GreyBeez transformed my life completely. From a small village to working in a top manufacturing company, the journey has been incredible. The training and support were exceptional.",
    rating: 5,
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    type: "trainee"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "HR Director",
    company: "Manufacturing Corp",
    content: "Partnering with GreyBeez has been game-changing for our workforce needs. Their candidates are well-trained, motivated, and ready to contribute from day one.",
    rating: 5,
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    type: "partner"
  },
  {
    id: 3,
    name: "Sunita Devi",
    role: "Program Graduate",
    location: "Odisha",
    content: "The migration support and ongoing mentorship made all the difference. I now have a stable job and can support my family while pursuing further career growth.",
    rating: 5,
    image: "https://images.pexels.com/photos/3785087/pexels-photo-3785087.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    type: "trainee"
  }
];

export default function Testimonials() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our graduates and partners about the transformative impact of our programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center space-x-1 mb-6">
                {renderStars(testimonial.rating)}
              </div>

              <Quote className="w-8 h-8 text-primary-500 mb-4" />
              
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
                    {testimonial.role}
                    {testimonial.type === 'trainee' ? ` • ${testimonial.location}` : ` • ${testimonial.company}`}
                  </p>
                </div>
              </div>

              <div className={`mt-4 inline-block px-3 py-1 rounded-full text-xs font-medium ${
                testimonial.type === 'trainee' 
                  ? 'bg-primary-100 text-primary-800' 
                  : 'bg-secondary-100 text-secondary-800'
              }`}>
                {testimonial.type === 'trainee' ? 'Graduate' : 'Partner'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}