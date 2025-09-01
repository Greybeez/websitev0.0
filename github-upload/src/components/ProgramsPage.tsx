import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Users, 
  GraduationCap, 
  Building, 
  ArrowRight,
  Play,
  ExternalLink,
  Star,
  Award,
  Target,
  Heart,
  Globe
} from 'lucide-react';

interface Program {
  id: number;
  name: string;
  partner?: string;
  description: string;
  logo?: string;
  image?: string;
  category: 'government' | 'csr' | 'training';
  states?: string[];
  companies?: string[];
  isActive: boolean;
}

interface ProgramsPageData {
  heroSection: {
    title: string;
    subtitle: string;
    amasHero: {
      title: string;
      description: string;
      bannerImage?: string;
      logo?: string;
      states: string[];
      isActive: boolean;
    };
  };
  programs: Program[];
  trainingPrograms: Program[];
}

export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState<'government' | 'csr' | 'training'>('government');
  const [programsData, setProgramsData] = useState<ProgramsPageData | null>(null);
  const [loading, setLoading] = useState(true);

  // Default data structure for CMS integration
  const defaultData: ProgramsPageData = {
    heroSection: {
      title: "Programs",
      subtitle: "Transforming Lives Through Skill Development",
      amasHero: {
        title: "AMAS - Assisted Migration for Apparel Sector",
        description: "This is a pan-India initiative to link rural and tribal youth, especially women, with gainful employment through a systematic handholding and training process. This program is being successfully implemented in states of Bihar, Jharkhand, Uttar Pradesh and Madhya Pradesh.",
        bannerImage: "/images/amas-banner.jpg",
        logo: "/images/amas-logo.svg",
        states: ["Bihar", "Jharkhand", "Uttar Pradesh", "Madhya Pradesh"],
        isActive: true
      }
    },
         programs: [
       {
         id: 1,
         name: "SWABHIMAN",
         partner: "Rotary Club Gurgaon",
         description: "A joint venture with Rotary Club Gurgaon to help migrants residing in Gurgaon get trained and quickly absorbed in the apparel manufacturing industry, thus starting livelihood to sustain themselves and their families.",
         logo: "/images/swabhiman-logo.pdf",
         image: "/images/swabhiman-banner.jpg",
         category: "csr",
         isActive: true
       },
             {
         id: 2,
         name: "SAMARTH",
         partner: "Ministry of Textiles",
         description: "GreyBeez helps apparel industry players to onboard SAMARTH Program of Ministry of Textiles, for placement linked skill development initiative in PPP mode for enhancing their capacity in textiles and apparel sector.",
         logo: "/images/samarth-logo.svg",
         image: "/images/samarth-banner.jpg",
         category: "government",
         isActive: true
       },
       {
         id: 3,
         name: "BMRC",
         partner: "Bihar Migrant Resource Center",
         description: "Bihar Migrant Resource Center, Gurgaon - A dedicated center supporting migrants with resources, training, and opportunities in the apparel sector. We provide comprehensive support for skill development and employment placement.",
         logo: "/images/bmrc-logo.svg",
         image: "/images/bmrc-banner.jpg",
         category: "csr",
         isActive: true
       },
       {
         id: 4,
         name: "Rural Skill Development",
         partner: "Government of India",
         description: "Focused skill development programs for rural youth, providing them with industry-relevant training and connecting them with employment opportunities in the apparel sector across India.",
         logo: "/images/rural-skill-logo.svg",
         image: "/images/rural-skill-banner.jpg",
         category: "government",
         isActive: true
       },
       {
         id: 5,
         name: "Women Empowerment",
         partner: "CSR Partners",
         description: "Specialized programs designed to empower women through skill development, confidence building, and sustainable employment opportunities in the apparel manufacturing sector.",
         logo: "/images/women-empowerment-logo.svg",
         image: "/images/women-empowerment-banner.jpg",
         category: "csr",
         isActive: true
       }
    ],
    trainingPrograms: [
      {
        id: 1,
        name: "Supervisors Training",
        description: "Comprehensive training program for supervisors in apparel manufacturing, covering leadership, quality control, production management, and team coordination. Designed to develop strong leadership skills and operational excellence.",
        companies: ["FA", "Zeel", "PAPL"],
        category: "training",
        isActive: true
      },
      {
        id: 2,
        name: "Quality Team Training",
        description: "Specialized training for quality assurance teams, focusing on international standards, testing procedures, quality management systems, and continuous improvement methodologies.",
        companies: ["Zeel", "PAPL"],
        category: "training",
        isActive: true
      },
      {
        id: 3,
        name: "Soft Skills Training",
        description: "Essential soft skills development including communication, teamwork, problem-solving, workplace etiquette, and professional development. Critical for career growth and workplace success.",
        companies: ["All Partners"],
        category: "training",
        isActive: true
      },
      {
        id: 4,
        name: "Technical Skills Training",
        description: "Advanced technical training in apparel manufacturing processes, machinery operation, pattern making, cutting, sewing, and finishing techniques for industry professionals.",
        companies: ["FA", "Zeel", "PAPL", "All Partners"],
        category: "training",
        isActive: true
      },
      {
        id: 5,
        name: "Management Training",
        description: "Executive-level training programs focusing on strategic planning, resource management, supply chain optimization, and business development in the apparel sector.",
        companies: ["FA", "Zeel", "PAPL"],
        category: "training",
        isActive: true
      },
      {
        id: 6,
        name: "Digital Skills Training",
        description: "Modern digital skills training including CAD/CAM, digital pattern making, 3D design, e-commerce, and digital marketing for the apparel industry.",
        companies: ["All Partners"],
        category: "training",
        isActive: true
      }
    ]
  };

  useEffect(() => {
    const fetchProgramsData = async () => {
      try {
        setLoading(true);
        
        console.log('🔍 Fetching programs data from Strapi...');
        
        // Fetch from Strapi
        const response = await fetch('http://localhost:1337/api/pragrams-page?populate=*');
        const result = await response.json();
        
        console.log('📡 Strapi Response:', result);
        
        if (result.data) {
          const data = result.data;
          console.log('📊 Strapi Data:', data);
          
          // Transform Strapi data to our format
          const transformedData: ProgramsPageData = {
            heroSection: {
              title: data.title || "Programs",
              subtitle: data.subtitle || "Transforming Lives Through Skill Development",
              amasHero: {
                title: data.amasTitle || "AMAS - Assisted Migration for Apparel Sector",
                description: data.amasDescription || "",
                bannerImage: data.amasBannerImage?.url ? `http://localhost:1337${data.amasBannerImage.url}` : undefined,
                logo: data.amasLogo?.url ? `http://localhost:1337${data.amasLogo.url}` : undefined,
                states: data.amasStates || [],
                isActive: true
              }
            },
            programs: data.programs?.filter((p: any) => p.name && p.category !== 'training').map((program: any, index: number) => ({
              id: program.id || index + 1,
              name: program.name,
              partner: program.partner,
              description: program.description,
              logo: program.logo?.url ? `http://localhost:1337${program.logo.url}` : undefined,
              image: program.image?.url ? `http://localhost:1337${program.image.url}` : undefined,
              category: program.category,
              states: program.states,
              isActive: program.isActive
            })) || [],
            trainingPrograms: data.programs?.filter((p: any) => p.name && p.category === 'training').map((program: any, index: number) => ({
              id: program.id || index + 1,
              name: program.name,
              description: program.description,
              companies: program.companies,
              category: program.category,
              isActive: program.isActive
            })) || []
          };
          
          console.log('✅ Transformed Data:', transformedData);
          setProgramsData(transformedData);
        } else {
          console.log('⚠️ No data from Strapi, using default data');
          // Fallback to default data
          setProgramsData(defaultData);
        }
      } catch (error) {
        console.error('❌ Failed to fetch programs data:', error);
        setProgramsData(defaultData);
      } finally {
        setLoading(false);
      }
    };

    fetchProgramsData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!programsData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Failed to load programs</h2>
          <p className="text-gray-600">Please try again later.</p>
        </div>
      </div>
    );
  }

  const filteredPrograms = programsData.programs.filter(program => 
    activeTab === 'training' ? false : program.category === activeTab
  );

  const trainingPrograms = activeTab === 'training' ? programsData.trainingPrograms : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Hero Section - AMAS Focus */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {programsData.heroSection.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              {programsData.heroSection.subtitle}
            </p>
          </div>

          {/* AMAS Hero Section */}
          {programsData.heroSection.amasHero.isActive && (
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="flex flex-col">
                {/* Top Section - Content */}
                <div className="p-8 lg:p-12">
                  {/* AMAS Logo */}
                  {programsData.heroSection.amasHero.logo && (
                    <div className="mb-6">
                      <img 
                        src={programsData.heroSection.amasHero.logo} 
                        alt="AMAS Logo" 
                        className="h-16 w-auto object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}

                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {programsData.heroSection.amasHero.title}
                  </h2>

                  {/* Description */}
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {programsData.heroSection.amasHero.description}
                  </p>

                  {/* States Covered */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-primary-600" />
                      States Covered
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {programsData.heroSection.amasHero.states.map((state, index) => (
                        <span 
                          key={index}
                          className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                        >
                          {state}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Star className="w-5 h-5 mr-2 text-primary-600" />
                      Key Features
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        <span>Rural & Tribal Youth Focus</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        <span>Women Empowerment</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        <span>Systematic Handholding</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        <span>Employment Guarantee</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="inline-flex items-center bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-700 hover:to-secondary-700 transform hover:scale-105 transition-all duration-300">
                    <Globe className="w-5 h-5 mr-2" />
                    Learn More About AMAS
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>

                {/* Bottom Section - Banner Image */}
                <div className="relative h-64 lg:h-80">
                  {programsData.heroSection.amasHero.bannerImage ? (
                    <img 
                      src={programsData.heroSection.amasHero.bannerImage} 
                      alt="AMAS Program Banner" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        // Show fallback content
                        const fallback = document.createElement('div');
                        fallback.className = 'w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center';
                        fallback.innerHTML = `
                          <div class="text-center text-white">
                            <div class="text-4xl font-bold mb-2">AMAS</div>
                            <div class="text-lg">Assisted Migration for Apparel Sector</div>
                          </div>
                        `;
                        target.parentNode?.appendChild(fallback);
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-4xl font-bold mb-2">AMAS</div>
                        <div className="text-lg">Assisted Migration for Apparel Sector</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { key: 'government', label: 'Government Programs', icon: Building },
              { key: 'csr', label: 'CSR Initiatives', icon: Heart },
              { key: 'training', label: 'Training Programs', icon: GraduationCap }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {activeTab === 'government' && 'Government Programs'}
              {activeTab === 'csr' && 'CSR Initiatives'}
              {activeTab === 'training' && 'Training Programs'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {activeTab === 'government' && 'Collaborating with government bodies to create sustainable employment opportunities'}
              {activeTab === 'csr' && 'Partnering with organizations to drive social impact and community development'}
              {activeTab === 'training' && 'Comprehensive training solutions for apparel industry professionals'}
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTab === 'training' ? (
              // Training Programs
              trainingPrograms.map((program) => (
                <div
                  key={program.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Program Header */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        Training
                      </span>
                    </div>

                    {/* Program Name */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {program.name}
                    </h3>

                                         {/* Description */}
                     <p className="text-gray-600 mb-6 leading-relaxed">
                       {program.description}
                     </p>

                     {/* Companies */}
                     {program.companies && (
                       <div className="mb-6">
                         <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                           <Building className="w-4 h-4 mr-1" />
                           Available for:
                         </h4>
                         <div className="flex flex-wrap gap-2">
                           {program.companies.map((company, index) => (
                             <span 
                               key={index}
                               className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                             >
                               {company}
                             </span>
                           ))}
                         </div>
                       </div>
                     )}

                     {/* Training Features */}
                     <div className="mb-6">
                       <h4 className="text-sm font-semibold text-gray-700 mb-2">Training Features</h4>
                       <div className="space-y-1">
                         <div className="flex items-center text-xs text-gray-600">
                           <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></div>
                           <span>Industry Experts</span>
                         </div>
                         <div className="flex items-center text-xs text-gray-600">
                           <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></div>
                           <span>Practical Training</span>
                         </div>
                         <div className="flex items-center text-xs text-gray-600">
                           <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></div>
                           <span>Certification</span>
                         </div>
                         <div className="flex items-center text-xs text-gray-600">
                           <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2"></div>
                           <span>Placement Support</span>
                         </div>
                       </div>
                     </div>

                     {/* CTA Button */}
                    <button className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 rounded-xl font-semibold hover:from-primary-700 hover:to-secondary-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                      <Target className="w-5 h-5 mr-2" />
                      Enroll Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              // Government and CSR Programs
              filteredPrograms.map((program) => (
                <div
                  key={program.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Program Image */}
                  <div className="relative h-48 overflow-hidden">
                    {program.image ? (
                      <img 
                        src={program.image} 
                        alt={`${program.name} Banner`} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          // Show fallback
                          const fallback = document.createElement('div');
                          fallback.className = 'w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center';
                          fallback.innerHTML = `
                            <div class="text-center text-white">
                              <div class="text-2xl font-bold mb-1">${program.name}</div>
                              <div class="text-sm">${program.partner || ''}</div>
                            </div>
                          `;
                          target.parentNode?.appendChild(fallback);
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-2xl font-bold mb-1">{program.name}</div>
                          <div className="text-sm">{program.partner || ''}</div>
                        </div>
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        program.category === 'government' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {program.category === 'government' ? 'Government' : 'CSR'}
                      </span>
                    </div>

                    {/* Logo Overlay */}
                    {program.logo && (
                      <div className="absolute bottom-4 left-4">
                        <img 
                          src={program.logo} 
                          alt={`${program.name} Logo`} 
                          className="h-8 w-auto bg-white/90 rounded-lg p-1"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Program Content */}
                  <div className="p-6">
                    {/* Program Name */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {program.name}
                    </h3>

                    {/* Partner */}
                    {program.partner && (
                      <p className="text-sm text-primary-600 font-medium mb-3">
                        with {program.partner}
                      </p>
                    )}

                                         {/* Description */}
                     <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                       {program.description}
                     </p>

                     {/* States Covered - Only for AMAS */}
                     {program.states && program.states.length > 0 && (
                       <div className="mb-6">
                         <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                           <MapPin className="w-4 h-4 mr-1" />
                           States Covered
                         </h4>
                         <div className="flex flex-wrap gap-1">
                           {program.states.map((state, index) => (
                             <span 
                               key={index}
                               className="px-2 py-1 bg-primary-50 text-primary-600 rounded-full text-xs font-medium"
                             >
                               {state}
                             </span>
                           ))}
                         </div>
                       </div>
                     )}

                     {/* Key Benefits */}
                     <div className="mb-6">
                       <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Benefits</h4>
                       <div className="space-y-1">
                         {program.category === 'government' && (
                           <>
                             <div className="flex items-center text-xs text-gray-600">
                               <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                               <span>Government Support</span>
                             </div>
                             <div className="flex items-center text-xs text-gray-600">
                               <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                               <span>Certified Training</span>
                             </div>
                             <div className="flex items-center text-xs text-gray-600">
                               <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                               <span>Placement Assistance</span>
                             </div>
                           </>
                         )}
                         {program.category === 'csr' && (
                           <>
                             <div className="flex items-center text-xs text-gray-600">
                               <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                               <span>Social Impact</span>
                             </div>
                             <div className="flex items-center text-xs text-gray-600">
                               <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                               <span>Community Development</span>
                             </div>
                             <div className="flex items-center text-xs text-gray-600">
                               <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                               <span>Sustainable Livelihood</span>
                             </div>
                           </>
                         )}
                       </div>
                     </div>

                     {/* CTA Button */}
                    <button className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 rounded-xl font-semibold hover:from-primary-700 hover:to-secondary-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Empty State */}
          {filteredPrograms.length === 0 && trainingPrograms.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No programs available</h3>
              <p className="text-gray-600">Check back soon for new programs and initiatives.</p>
            </div>
          )}
        </div>
      </section>

             {/* Statistics Section */}
       <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
               Our Impact
             </h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               Transforming lives through skill development and sustainable employment opportunities
             </p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {[
               { number: "10,000+", label: "Lives Transformed", icon: Users },
               { number: "500+", label: "Partner Companies", icon: Building },
               { number: "15+", label: "States Covered", icon: MapPin },
               { number: "95%", label: "Success Rate", icon: Star }
             ].map((stat, index) => {
               const Icon = stat.icon;
               return (
                 <div
                   key={index}
                   className="text-center group"
                 >
                   <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                     <Icon className="w-8 h-8 text-white" />
                   </div>
                   <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                     {stat.number}
                   </div>
                   <div className="text-gray-600 font-medium">
                     {stat.label}
                   </div>
                 </div>
               );
             })}
           </div>
         </div>
       </section>

       {/* Call to Action */}
       <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Lives?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join us in our mission to create sustainable employment opportunities and empower communities through skill development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              <Users className="w-5 h-5 mr-2" />
              Partner With Us
            </button>
            <button className="flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
              <ArrowRight className="w-5 h-5 mr-2" />
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
