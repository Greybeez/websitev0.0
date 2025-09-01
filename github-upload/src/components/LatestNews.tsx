import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const news = [
  {
    id: 1,
    title: "New Partnership with Leading Automotive Manufacturer",
    excerpt: "GreyBeez announces strategic partnership to train 2,000 youth for automotive sector opportunities across three states.",
    image: "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    date: "March 15, 2025",
    category: "Partnership",
    categoryColor: "bg-primary-100 text-primary-800"
  },
  {
    id: 2,
    title: "Rural Youth Skilling Initiative Wins National Award",
    excerpt: "Our innovative approach to rural skilling recognized with the National Social Impact Award for Excellence in Workforce Development.",
    image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    date: "March 10, 2025",
    category: "Recognition",
    categoryColor: "bg-secondary-100 text-secondary-800"
  },
  {
    id: 3,
    title: "Expansion to Northeast India: New Training Centers",
    excerpt: "Opening state-of-the-art training facilities in Assam and Meghalaya to serve tribal communities with specialized programs.",
    image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    date: "March 5, 2025",
    category: "Expansion",
    categoryColor: "bg-accent-purple-100 text-accent-purple-800"
  }
];

export default function LatestNews() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest News
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with our latest initiatives, partnerships, and success stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <article
              key={article.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${article.categoryColor}`}>
                  {article.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {article.date}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <button className="flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300 group">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transform hover:scale-105 transition-all duration-300">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
}