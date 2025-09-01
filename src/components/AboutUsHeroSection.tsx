import { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface AboutUsData {
  heroTitle: string;
  heroSubtitle: string;
  statistics: Array<{
    id: number;
    value: string;
    label: string;
    isActive: boolean;
  }>;
  companyDescription: string;
  socialLinks: Array<{
    id: number;
    platform: string;
    url: string;
    isActive: boolean;
  }>;
  partnerLogos: Array<{
    id: number;
    name: string;
    logoUrl: string;
    website?: string;
    isActive: boolean;
  }>;
  sections: Array<{
    id: number;
    title: string;
    description: string;
    linkText?: string;
    linkUrl?: string;
    isActive: boolean;
  }>;
}

export default function AboutUsHeroSection() {
  const [aboutData, setAboutData] = useState<AboutUsData | null>(null);
  const [loading, setLoading] = useState(true);

  // Default data with your GreyBeez content
  const defaultData: AboutUsData = {
    heroTitle: "Building India's Future Through Skills",
    heroSubtitle: "The complete skill development platform to train, scale, and deliver secure employment opportunities across textile & clothing industry.",
    statistics: [
      { id: 1, value: "7+", label: "Years of Excellence", isActive: true },
      { id: 2, value: "1000+", label: "Lives Transformed", isActive: true },
      { id: 3, value: "50+", label: "Training Programs", isActive: true },
      { id: 4, value: "98%", label: "Success Rate", isActive: true }
    ],
    companyDescription: `GreyBeez Private Limited, based out of Gurugram, has been a leading service provider for Skill Development Projects, Training and Business Consulting in the field of Textile & Clothing since 2017.

Managed by qualified professionals from Apparel Manufacturing & Merchandising background as well as the best talents from the field of Operations Management, Training, Social Development, HR, Psychology and Finance.

The company has a vast talent pool of trainers and consultants, with a high level of competency delivering a wide range of training programmes, setting up of Skill Centres and Processes, Business Consulting, Project Management and providing pan-India services for Government and CSR funded projects.

Through its continued engagement in the skilling, training and management consulting, the company has acquired a high level of expertise and matured to be one of the preferred partners for various organizations.`,
    socialLinks: [
      { id: 1, platform: "LinkedIn", url: "https://linkedin.com/company/greybeez", isActive: true },
      { id: 2, platform: "Twitter", url: "https://twitter.com/greybeez", isActive: true },
      { id: 3, platform: "Facebook", url: "https://facebook.com/greybeez", isActive: true }
    ],
    partnerLogos: [
      { id: 1, name: "AMAS", logoUrl: "/images/partners/amas-logo.png", website: "https://amas.org", isActive: true },
      { id: 2, name: "GreyBeez", logoUrl: "/images/partners/greybeez-logo.png", website: "https://greybeez.com", isActive: true }
    ],
    sections: [
      {
        id: 1,
        title: "Training Programs",
        description: "Read up on our latest training innovations and updates, skill development announcements, success stories, and more.",
        linkText: "Explore Programs",
        linkUrl: "#programs",
        isActive: true
      },
      {
        id: 2,
        title: "Success Stories", 
        description: "Discover how our graduates are building successful careers. Looking for inspiration? Explore their journeys and achievements.",
        linkText: "View Stories",
        linkUrl: "#stories",
        isActive: true
      },
      {
        id: 3,
        title: "Partner Network",
        description: "Learn how industry leaders partner with GreyBeez to provide the best training, placements, and career opportunities for our students.",
        linkText: "Join Network", 
        linkUrl: "#partners",
        isActive: true
      },
      {
        id: 4,
        title: "Impact Reports",
        description: "See how GreyBeez is transforming lives through skill development. Explore our impact metrics, success rates, and community growth.",
        linkText: "View Impact",
        linkUrl: "#impact",
        isActive: true
      }
    ]
  };

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        // Try to fetch from Strapi CMS
        const apiUrl = 'http://localhost:1337';
        
        // First, let's verify the endpoint exists
        console.log('🔍 Testing Strapi endpoint:', `${apiUrl}/api/about-us-hero`);
        
        // Try different populate strategies with proper error handling
        let response;
        
        // Strategy 1: Try populate with specific fields
        try {
          console.log('Trying populate with specific fields...');
          response = await fetch(`${apiUrl}/api/about-us-hero?populate[statistics]=*&populate[socialLinks]=*&populate[partnerLogos]=*&populate[sections]=*`);
          if (response.ok) {
            console.log('Populate with specific fields succeeded');
          } else {
            throw new Error(`Populate with specific fields failed with status: ${response.status}`);
          }
        } catch (error) {
          console.log('Populate with specific fields failed:', error);
          
          // Strategy 2: Try populate=*
          try {
            console.log('Trying populate=* strategy...');
            response = await fetch(`${apiUrl}/api/about-us-hero?populate=*`);
            if (response.ok) {
              console.log('populate=* strategy succeeded');
            } else {
              throw new Error(`populate=* failed with status: ${response.status}`);
            }
          } catch (populateError) {
            console.log('populate=* failed:', populateError);
            
            // Strategy 3: Try basic fetch without populate
            try {
              console.log('Trying basic fetch without populate...');
              response = await fetch(`${apiUrl}/api/about-us-hero`);
              if (response.ok) {
                console.log('Basic fetch succeeded');
              } else {
                throw new Error(`Basic fetch failed with status: ${response.status}`);
              }
            } catch (basicError) {
              console.log('Basic fetch also failed:', basicError);
              throw basicError;
            }
          }
        }
        
        if (response.ok) {
          const result = await response.json();
          console.log('✅ CMS Data received successfully:', result); // Debug log
          console.log('📊 Raw Strapi data structure:', result.data);
          
          if (result.data) {
            // Strapi v4+ single type structure
            const strapiData = result.data;
            
            // Map Strapi data to our component structure
            const mappedData: AboutUsData = {
              heroTitle: strapiData.heroTitle || defaultData.heroTitle,
              heroSubtitle: strapiData.heroSubtitle || defaultData.heroSubtitle,
              companyDescription: strapiData.companyDescription || defaultData.companyDescription,
              statistics: strapiData.statistics?.map((stat: any) => ({
                id: stat.id || Math.random(),
                value: stat.value,
                label: stat.label,
                isActive: stat.isActive !== false
              })) || defaultData.statistics,
              socialLinks: strapiData.socialLinks?.map((link: any) => ({
                id: link.id || Math.random(),
                platform: link.platform,
                url: link.url,
                isActive: (link.isActive !== false) && (link.isActve !== false) // Handle both spellings
              })) || defaultData.socialLinks,
              partnerLogos: strapiData.partnerLogos?.map((partner: any) => {
                // Handle different possible logoUrl structures from Strapi
                let logoUrl = null;
                if (partner.logoUrl) {
                  if (typeof partner.logoUrl === 'string') {
                    logoUrl = partner.logoUrl;
                  } else if (partner.logoUrl.url) {
                    logoUrl = `${apiUrl}${partner.logoUrl.url}`;
                  } else if (partner.logoUrl.data && partner.logoUrl.data.attributes) {
                    logoUrl = `${apiUrl}${partner.logoUrl.data.attributes.url}`;
                  }
                } else {
                  // Fallback: Try to construct URL from partner name if logoUrl is not populated
                  // This is a workaround for when Strapi doesn't populate media fields
                  console.log('No logoUrl found for', partner.name, '- trying fallback construction');
                }
                
                const mappedPartner = {
                  id: partner.id || Math.random(),
                  name: partner.name,
                  logoUrl: logoUrl,
                  website: partner.website,
                  isActive: partner.isActive !== false
                };
                console.log('Mapping partner logo:', partner.name, 'logoUrl:', mappedPartner.logoUrl, 'original data:', partner);
                return mappedPartner;
              }) || defaultData.partnerLogos,
              sections: strapiData.sections?.map((section: any) => ({
                id: section.id || Math.random(),
                title: section.title,
                description: section.description,
                linkText: section.linkText || section.Linktext, // Handle both field name variations
                linkUrl: section.linkUrl || section.LinkUrl, // Handle both field name variations
                isActive: section.isActive !== false
              })) || defaultData.sections
            };
            
            console.log('Mapped data for component:', mappedData); // Debug log
            setAboutData(mappedData);
          } else {
            console.log('No CMS data found, using defaults');
            setAboutData(defaultData);
          }
        } else {
          console.log('CMS request failed, using defaults');
          setAboutData(defaultData);
        }
      } catch (error) {
        console.log('CMS not available, using default data:', error);
        setAboutData(defaultData);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  const data = aboutData || defaultData;

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            {data.heroTitle.split(' ').map((word, index) => (
              <span key={index} className={index >= 2 ? 'text-primary-600' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            {data.heroSubtitle}
          </p>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-gray-500 mr-4">Follow us on</span>
            {data.socialLinks.filter(link => link.isActive).map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-600 transition-colors duration-300 p-2"
                aria-label={link.platform}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 animate-slide-up">
          {data.statistics.filter(stat => stat.isActive).map((stat, index) => {
            const colors = [
              'from-green-500 to-green-600',
              'from-blue-500 to-blue-600', 
              'from-yellow-500 to-yellow-600',
              'from-purple-500 to-purple-600'
            ];
            const icons = [
              '🏆', // Years of Excellence
              '👥', // Lives Transformed  
              '📚', // Training Programs
              '⭐'  // Success Rate
            ];
            
            return (
              <div key={stat.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center transform hover:scale-105">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${colors[index % colors.length]} flex items-center justify-center text-2xl`}>
                  {icons[index % icons.length]}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium text-sm">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Partner Logos */}
        <div className="mb-20 animate-slide-up">
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 hover:opacity-100 transition-opacity duration-300">
            {data.partnerLogos.filter(partner => partner.isActive).map((partner) => (
              <div
                key={partner.id}
                className="group cursor-pointer"
                onClick={() => partner.website && window.open(partner.website, '_blank')}
              >
                <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center group-hover:bg-primary-50 transition-colors duration-300 shadow-lg overflow-hidden">
                  {partner.logoUrl ? (
                    <img 
                      src={partner.logoUrl} 
                      alt={partner.name}
                      className="w-full h-full object-contain p-2"
                      onError={(e) => {
                        console.error(`Failed to load logo for ${partner.name}:`, partner.logoUrl);
                        // Fallback to text if image fails to load
                        e.currentTarget.style.display = 'none';
                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextElement) {
                          nextElement.style.display = 'block';
                        }
                      }}
                    />
                  ) : null}
                  <span 
                    className="text-gray-600 font-semibold text-sm text-center px-2"
                    style={{ display: partner.logoUrl ? 'none' : 'block' }}
                  >
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Description */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-20 animate-slide-up">
          <div className="prose prose-lg max-w-none">
            {data.companyDescription.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Information Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up">
          {data.sections.filter(section => section.isActive).map((section) => (
            <div key={section.id} className="group cursor-pointer p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                {section.title}
                <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {section.description}
              </p>
              {section.linkText && section.linkUrl && (
                <a
                  href={section.linkUrl}
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center group"
                >
                  {section.linkText}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
