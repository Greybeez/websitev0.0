import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary-400">GreyBeez</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('footer.companyInfo')}
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors duration-300" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors duration-300" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors duration-300" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors duration-300" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {[
                { key: 'aboutUs', label: t('footer.aboutUs') },
                { key: 'programs', label: t('footer.programs') },
                { key: 'jobParAI', label: 'JobPar.ai' },
                { key: 'successStories', label: t('footer.successStories') },
                { key: 'news', label: t('footer.news') },
                { key: 'contact', label: t('footer.contact') }
              ].map((link) => (
                <li key={link.key}>
                  <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {[
                { key: 'skillsTraining', label: t('footer.skillsTraining') },
                { key: 'jobPlacement', label: t('footer.jobPlacement') },
                { key: 'migrationSupport', label: t('footer.migrationSupport') },
                { key: 'careerMentoring', label: t('footer.careerMentoring') },
                { key: 'partnerSolutions', label: t('footer.partnerSolutions') },
                { key: 'csrActivities', label: t('footer.csrActivities') }
              ].map((service) => (
                <li key={service.key}>
                  <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.contactUsTitle')}</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{t('footer.email')}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{t('footer.phone')}</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  {t('footer.address').split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index === 0 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              {t('footer.copyright', { year: currentYear })}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                {t('footer.privacyPolicy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                {t('footer.termsOfService')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}