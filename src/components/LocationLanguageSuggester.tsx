import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, X, Globe } from 'lucide-react';
import { detectLocationAndSuggestLanguage } from '../utils/geolocation';

interface LocationLanguageSuggesterProps {
  onClose?: () => void;
}

interface SuggestionData {
  location: {
    country: string;
    countryCode: string;
    region?: string;
    city?: string;
  };
  suggestedLanguages: string[];
}

const LANGUAGE_NAMES: { [key: string]: { native: string; english: string } } = {
  'en': { native: 'English', english: 'English' },
  'hi': { native: 'हिंदी', english: 'Hindi' },
  'bn': { native: 'বাংলা', english: 'Bengali' },
  'or': { native: 'ଓଡ଼ିଆ', english: 'Oriya' }
};

export default function LocationLanguageSuggester({ onClose }: LocationLanguageSuggesterProps) {
  const { i18n } = useTranslation();
  const [suggestionData, setSuggestionData] = useState<SuggestionData | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLocationAndSuggest = async () => {
      try {
        setIsLoading(true);
        const result = await detectLocationAndSuggestLanguage(i18n.language);
        
        if (result) {
          setSuggestionData(result);
          setIsVisible(true);
        }
      } catch (error) {
        console.warn('Failed to get location-based language suggestion:', error);
      } finally {
        setIsLoading(false);
      }
    };

    // Delay the geolocation request slightly to avoid interrupting initial page load
    const timer = setTimeout(checkLocationAndSuggest, 2000);
    return () => clearTimeout(timer);
  }, [i18n.language]);

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    handleClose();
  };

  const handleClose = () => {
    setIsVisible(false);
    // Mark that we've shown the suggestion for this session
    sessionStorage.setItem('locationLanguageSuggestionShown', 'true');
    onClose?.();
  };

  const handleDismiss = () => {
    // Also store in localStorage to remember user's preference longer term
    localStorage.setItem('locationLanguageSuggestionDismissed', 'true');
    handleClose();
  };

  // Don't render if loading, no suggestion data, or not visible
  if (isLoading || !suggestionData || !isVisible) {
    return null;
  }

  // Check if user has permanently dismissed these suggestions
  const isPermanentlyDismissed = localStorage.getItem('locationLanguageSuggestionDismissed');
  if (isPermanentlyDismissed) {
    return null;
  }

  const { location, suggestedLanguages } = suggestionData;
  const primaryLanguage = suggestedLanguages[0];
  const primaryLanguageInfo = LANGUAGE_NAMES[primaryLanguage];

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 animate-fade-in" />
      
      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 animate-slide-up">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 max-w-md mx-4 relative">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Icon and location info */}
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
              <MapPin className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                We detected you're in {location.country}
              </h3>
              {location.region && (
                <p className="text-sm text-gray-600">{location.region}</p>
              )}
            </div>
          </div>

          {/* Language suggestion */}
          <div className="mb-6">
            <p className="text-gray-700 mb-4">
              Would you like to view this site in {primaryLanguageInfo?.native} ({primaryLanguageInfo?.english})?
            </p>
            
            {/* Language options */}
            <div className="space-y-2">
              {suggestedLanguages.slice(0, 2).map((langCode) => {
                const langInfo = LANGUAGE_NAMES[langCode];
                return (
                  <button
                    key={langCode}
                    onClick={() => handleLanguageChange(langCode)}
                    className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 group"
                  >
                    <div className="flex items-center">
                      <Globe className="w-4 h-4 text-gray-500 group-hover:text-primary-600 mr-3" />
                      <span className="font-medium text-gray-900">
                        {langInfo?.native}
                      </span>
                      <span className="text-sm text-gray-500 ml-2">
                        ({langInfo?.english})
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex space-x-3">
            <button
              onClick={handleClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
            >
              Keep Current
            </button>
            <button
              onClick={handleDismiss}
              className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
            >
              Don't Ask Again
            </button>
          </div>

          {/* Privacy note */}
          <p className="text-xs text-gray-500 mt-4 text-center">
            We use your location only to suggest relevant languages. Your location is not stored.
          </p>
        </div>
      </div>
    </>
  );
}