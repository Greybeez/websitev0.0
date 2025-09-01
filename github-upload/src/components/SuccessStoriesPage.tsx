import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Users, 
  Star, 
  Quote, 
  ArrowRight,
  Calendar,
  Eye,
  Heart,
  Award,
  TrendingUp,
  Video,
  FileText,
  BookOpen,
  Sparkles
} from 'lucide-react';

interface SuccessStory {
  id: number;
  title: string;
  type: 'article' | 'video' | 'testimonial';
  description: string;
  content?: string;
  image?: string;
  videoUrl?: string;
  author?: string;
  date?: string;
  rating?: number;
  category?: string;
  isActive: boolean;
  featured?: boolean;
}

interface SuccessStoriesData {
  stories: SuccessStory[];
}

export default function SuccessStoriesPage() {
  const [storiesData, setStoriesData] = useState<SuccessStoriesData | null>(null);
  const [loading, setLoading] = useState(true);

  // Default data structure for CMS integration
  const defaultData: SuccessStoriesData = {
    stories: [
      // Featured Stories (Large Cards)
      {
        id: 1,
        title: "Athena Students Survey Outcomes - 95% Success Rate!",
        type: "article",
        description: "Our latest survey reveals incredible results with 95% employment rate within 6 months of program completion.",
        content: "The comprehensive analysis shows remarkable improvements in employment rates, skill confidence, and overall satisfaction. Students are finding meaningful careers in the apparel industry.",
        image: "/images/athena-survey.jpg",
        author: "Research Team",
        date: "2024",
        rating: 4.8,
        category: "Survey Analysis",
        isActive: true,
        featured: true
      },
      {
        id: 2,
        title: "Priya'\''s Amazing Journey: From Village to Industry Leader",
        type: "testimonial",
        description: "Watch how Priya transformed her life from a rural village to becoming a skilled professional in the apparel industry.",
        content: "Priya'\''s story is truly inspiring. She went from uncertainty to confidence, from rural life to urban success, all through our skill development program.",
        image: "/images/priya-story.jpg",
        author: "Priya Kumari",
        date: "2024",
        rating: 5.0,
        category: "Student Success",
        isActive: true,
        featured: true
      },
      // Regular Stories (Medium Cards)
      {
        id: 3,
        title: "AMAS Program Impact: Rural Employment Revolution",
        type: "article",
        description: "Quantitative analysis shows AMAS program'\''s effectiveness in rural employment generation.",
        content: "Survey results from AMAS program participants show significant improvements in employment opportunities and income levels.",
        image: "/images/amas-survey.jpg",
        author: "Impact Assessment Team",
        date: "2024",
        rating: 4.9,
        category: "Program Impact",
        isActive: true
      },
      {
        id: 4,
        title: "Rahul'\''s Video Story: Transformation in Action",
        type: "video",
        description: "Watch Rahul share his experience of skill development and career transformation.",
        videoUrl: "https://www.youtube.com/embed/example1",
        author: "Rahul Singh",
        date: "2024",
        rating: 5.0,
        category: "Video Testimonial",
        isActive: true
      },
      {
        id: 5,
        title: "Women Empowerment: Breaking Barriers",
        type: "article",
        description: "Analysis of women'\''s empowerment through skill development and employment.",
        content: "Our women empowerment program has shown remarkable results in increasing women'\''s participation in the workforce.",
        image: "/images/women-empowerment.jpg",
        author: "Gender Studies Team",
        date: "2024",
        rating: 4.7,
        category: "Women Empowerment",
        isActive: true
      },
      {
        id: 6,
        title: "Meera'\''s Success: Homemaker to Professional",
        type: "testimonial",
        description: "From homemaker to successful apparel professional - an inspiring transformation.",
        content: "Meera'\''s transformation showcases the power of skill development and determination.",
        image: "/images/meera-story.jpg",
        author: "Meera Patel",
        date: "2024",
        rating: 5.0,
        category: "Career Transformation",
        isActive: true
      },
      {
        id: 7,
        title: "SWABHIMAN Documentary: Migrant Success Stories",
        type: "video",
        description: "A comprehensive documentary showcasing the SWABHIMAN program'\''s impact on migrant communities.",
        videoUrl: "https://www.youtube.com/embed/example2",
        author: "Documentary Team",
        date: "2024",
        rating: 4.8,
        category: "Program Documentary",
        isActive: true
      },
      {
        id: 8,
        title: "Rajesh'\''s Journey: Migrant to Supervisor",
        type: "testimonial",
        description: "How skill development changed Rajesh'\''s life and career prospects.",
        content: "Rajesh, a migrant worker from Uttar Pradesh, found new opportunities through our skill development program.",
        image: "/images/rajesh-story.jpg",
        author: "Rajesh Kumar",
        date: "2024",
        rating: 4.9,
        category: "Career Growth",
        isActive: true
      },
      {
        id: 9,
        title: "Training Center Tour: Where Dreams Take Shape",
        type: "video",
        description: "Virtual tour of our training centers with student interviews and success stories.",
        videoUrl: "https://www.youtube.com/embed/example4",
        author: "Training Team",
        date: "2024",
        rating: 4.7,
        category: "Center Tour",
        isActive: true
      },
      {
        id: 10,
        title: "Sunita'\''s Empowerment: Leading by Example",
        type: "testimonial",
        description: "Empowering women through skill development and employment opportunities.",
        content: "Sunita'\''s story represents the empowerment of women through skill development.",
        image: "/images/sunita-story.jpg",
        author: "Sunita Devi",
        date: "2024",
        rating: 5.0,
        category: "Women Empowerment",
        isActive: true
      },
      {
        id: 11,
        title: "AMAS Success Stories: Video Compilation",
        type: "video",
        description: "Video compilation of AMAS program participants sharing their success stories.",
        videoUrl: "https://www.youtube.com/embed/example3",
        author: "AMAS Team",
        date: "2024",
        rating: 4.9,
        category: "Program Stories",
        isActive: true
      },
      {
        id: 12,
        title: "SWABHIMAN Metrics: Program Success Analysis",
        type: "article",
        description: "Comprehensive evaluation of the SWABHIMAN program'\''s impact on migrant communities.",
        content: "The SWABHIMAN program has successfully helped migrants get trained and absorbed in the apparel industry.",
        image: "/images/swabhiman-survey.jpg",
        author: "Program Evaluation Team",
        date: "2024",
        rating: 4.6,
        category: "Program Evaluation",
        isActive: true
      }
    ]
  };

  useEffect(() => {
    const fetchSuccessStoriesData = async () => {
      try {
        setLoading(true);
        
        console.log(" Fetching success stories data from Strapi...");
        
        // Fetch from Strapi (when CMS is ready)
        const response = await fetch("http://localhost:1337/api/success-stories?populate=*");
        const result = await response.json();
        
        console.log(" Strapi Response:", result);
        
        if (result.data) {
          const data = result.data;
          console.log(" Strapi Data:", data);
          
          // Transform Strapi data to our format
          const transformedData: SuccessStoriesData = {
            stories: data.stories?.map((story: any) => ({
              id: story.id,
              title: story.title,
              type: story.type,
              description: story.description,
              content: story.content,
              image: story.image?.url ? `http://localhost:1337${story.image.url}` : undefined,
              videoUrl: story.videoUrl,
              author: story.author,
              date: story.date,
              rating: story.rating,
              category: story.category,
              isActive: story.isActive,
              featured: story.featured
            })) || defaultData.stories
          };
          
          console.log(" Transformed Data:", transformedData);
          setStoriesData(transformedData);
        } else {
          console.log(" No data from Strapi, using default data");
          setStoriesData(defaultData);
        }
      } catch (error) {
        console.error(" Failed to fetch success stories data:", error);
        setStoriesData(defaultData);
      } finally {
        setLoading(false);
      }
    };

    fetchSuccessStoriesData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-primary-600 border-t-transparent"></div>
      </div>
    );
  }

  if (!storiesData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Failed to load success stories</h2>
          <p className="text-gray-600">Please try again later.</p>
        </div>
      </div>
    );
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'article': return BookOpen;
      case 'testimonial': return Quote;
      default: return BookOpen;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-red-100 text-red-700';
      case 'article': return 'bg-blue-100 text-blue-700';
      case 'testimonial': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getGradientClass = (type: string) => {
    switch (type) {
      case 'video': return 'from-red-500 to-pink-500';
      case 'article': return 'from-blue-500 to-indigo-500';
      case 'testimonial': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const featuredStories = storiesData.stories.filter(story => story.featured);
  const regularStories = storiesData.stories.filter(story => !story.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
      {/* Happy Header */}
      <section className="relative py-16 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-pink-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-orange-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-purple-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-full text-lg font-semibold mb-6 shadow-lg">
              <Sparkles className="w-6 h-6 mr-2" />
              Success Stories
              <Sparkles className="w-6 h-6 ml-2" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Celebrating Our
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent"> Success Stories</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover the amazing journeys of transformation, achievement, and empowerment that make us proud! 
            </p>
            <div className="flex justify-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center">
                <BookOpen className="w-4 h-4 mr-1" />
                Articles & Surveys
              </span>
              <span className="flex items-center">
                <Video className="w-4 h-4 mr-1" />
                Video Stories
              </span>
              <span className="flex items-center">
                <Quote className="w-4 h-4 mr-1" />
                Testimonials
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      {featuredStories.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Stories
              </h2>
              <p className="text-lg text-gray-600">
                Our most inspiring success stories that showcase the power of transformation
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {featuredStories.map((story) => {
                const TypeIcon = getTypeIcon(story.type);
                return (
                  <div
                    key={story.id}
                    className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group transform hover:scale-105"
                  >
                    <div className="relative h-64 overflow-hidden">
                      {story.videoUrl ? (
                        <div className="w-full h-full bg-gray-900 flex items-center justify-center relative">
                          <iframe
                            src={story.videoUrl}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Play className="w-16 h-16 text-white" />
                          </div>
                        </div>
                      ) : story.image ? (
                        <img 
                          src={story.image} 
                          alt={story.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = document.createElement('div');
                            fallback.className = `w-full h-full bg-gradient-to-br ${getGradientClass(story.type)} flex items-center justify-center`;
                            fallback.innerHTML = `
                              <div class="text-center text-white">
                                <div class="text-3xl font-bold mb-2">${story.title}</div>
                                <div class="text-lg">${story.category}</div>
                              </div>
                            `;
                            target.parentNode?.appendChild(fallback);
                          }}
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${getGradientClass(story.type)} flex items-center justify-center`}>
                          <div className="text-center text-white">
                            <div className="text-3xl font-bold mb-2">{story.title}</div>
                            <div className="text-lg">{story.category}</div>
                          </div>
                        </div>
                      )}

                      {/* Featured Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                           Featured
                        </span>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(story.type)} shadow-lg`}>
                          {story.category}
                        </span>
                      </div>

                      {/* Type Icon */}
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center shadow-lg">
                          <TypeIcon className="w-6 h-6 text-gray-700" />
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2">
                        {story.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                        {story.description}
                      </p>

                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          {story.author && (
                            <div className="flex items-center text-gray-600">
                              <Users className="w-4 h-4 mr-2" />
                              <span className="font-medium">{story.author}</span>
                            </div>
                          )}
                          {story.date && (
                            <div className="flex items-center text-gray-600">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span>{story.date}</span>
                            </div>
                          )}
                        </div>
                        {story.rating && (
                          <div className="flex items-center">
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                            <span className="ml-1 text-gray-700 font-bold">{story.rating}</span>
                          </div>
                        )}
                      </div>

                      <button className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-4 rounded-xl font-semibold hover:from-primary-700 hover:to-secondary-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-lg">
                        {story.type === 'video' ? (
                          <>
                            <Play className="w-5 h-5 mr-2" />
                            Watch Video
                          </>
                        ) : (
                          <>
                            <Eye className="w-5 h-5 mr-2" />
                            Read Full Story
                          </>
                        )}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Stories Collage */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              More Amazing Stories
            </h2>
            <p className="text-lg text-gray-600">
              Every story is unique, every journey is inspiring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {regularStories.map((story) => {
              const TypeIcon = getTypeIcon(story.type);
              return (
                <div
                  key={story.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:scale-105"
                >
                  <div className="relative h-48 overflow-hidden">
                    {story.videoUrl ? (
                      <div className="w-full h-full bg-gray-900 flex items-center justify-center relative">
                        <iframe
                          src={story.videoUrl}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Play className="w-12 h-12 text-white" />
                        </div>
                      </div>
                    ) : story.image ? (
                      <img 
                        src={story.image} 
                        alt={story.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = `w-full h-full bg-gradient-to-br ${getGradientClass(story.type)} flex items-center justify-center`;
                          fallback.innerHTML = `
                            <div class="text-center text-white">
                              <div class="text-lg font-bold mb-1">${story.title}</div>
                              <div class="text-sm">${story.category}</div>
                            </div>
                          `;
                          target.parentNode?.appendChild(fallback);
                        }}
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${getGradientClass(story.type)} flex items-center justify-center`}>
                        <div className="text-center text-white">
                          <div className="text-lg font-bold mb-1">{story.title}</div>
                          <div className="text-sm">{story.category}</div>
                        </div>
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(story.type)} shadow-md`}>
                        {story.category}
                      </span>
                    </div>

                    {/* Type Icon */}
                    <div className="absolute bottom-3 left-3">
                      <div className="w-8 h-8 bg-white/90 rounded-lg flex items-center justify-center shadow-md">
                        <TypeIcon className="w-4 h-4 text-gray-700" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 mb-3 leading-relaxed line-clamp-2 text-sm">
                      {story.description}
                    </p>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        {story.author && (
                          <div className="flex items-center text-gray-600 text-xs">
                            <Users className="w-3 h-3 mr-1" />
                            <span>{story.author}</span>
                          </div>
                        )}
                      </div>
                      {story.rating && (
                        <div className="flex items-center">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="ml-1 text-gray-700 text-xs font-medium">{story.rating}</span>
                        </div>
                      )}
                    </div>

                    <button className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-2 rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center text-sm">
                      {story.type === 'video' ? (
                        <>
                          <Play className="w-4 h-4 mr-1" />
                          Watch
                        </>
                      ) : (
                        <>
                          <Eye className="w-4 h-4 mr-1" />
                          Read
                        </>
                      )}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
