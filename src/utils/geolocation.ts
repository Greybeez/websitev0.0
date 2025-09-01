interface GeolocationResult {
  country: string;
  countryCode: string;
  region?: string;
  city?: string;
}

interface LocationLanguageMapping {
  [countryCode: string]: {
    primary: string;
    secondary?: string[];
  };
}

// Mapping of country codes to suggested languages
const COUNTRY_LANGUAGE_MAP: LocationLanguageMapping = {
  'IN': {
    primary: 'hi',
    secondary: ['bn', 'or', 'en']
  },
  'BD': {
    primary: 'bn',
    secondary: ['en']
  },
  'US': {
    primary: 'en'
  },
  'GB': {
    primary: 'en'
  },
  'CA': {
    primary: 'en'
  },
  'AU': {
    primary: 'en'
  }
};

export const getCurrentPosition = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser'));
      return;
    }

    const options: PositionOptions = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 300000 // 5 minutes cache
    };

    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => {
        let errorMessage = 'Unknown geolocation error';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'User denied the request for geolocation';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Location information is unavailable';
            break;
          case error.TIMEOUT:
            errorMessage = 'The request to get user location timed out';
            break;
        }
        reject(new Error(errorMessage));
      },
      options
    );
  });
};

export const reverseGeocode = async (lat: number, lon: number): Promise<GeolocationResult> => {
  try {
    // Using OpenStreetMap Nominatim API (free, no API key required)
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=3&addressdetails=1`,
      {
        headers: {
          'User-Agent': 'GreyBeez-Website/1.0'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Reverse geocoding failed: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data || !data.address) {
      throw new Error('Invalid response from geocoding service');
    }

    return {
      country: data.address.country || 'Unknown',
      countryCode: data.address.country_code?.toUpperCase() || 'XX',
      region: data.address.state || data.address.region,
      city: data.address.city || data.address.town || data.address.village
    };
  } catch (error) {
    console.error('Reverse geocoding error:', error);
    throw error;
  }
};

export const getSuggestedLanguages = (countryCode: string, currentLanguage: string): string[] => {
  const mapping = COUNTRY_LANGUAGE_MAP[countryCode];
  if (!mapping) return [];

  const suggestions: string[] = [];
  
  // Add primary language if it's different from current
  if (mapping.primary !== currentLanguage) {
    suggestions.push(mapping.primary);
  }

  // Add secondary languages if they're different from current
  if (mapping.secondary) {
    mapping.secondary.forEach(lang => {
      if (lang !== currentLanguage && !suggestions.includes(lang)) {
        suggestions.push(lang);
      }
    });
  }

  return suggestions;
};

export const detectLocationAndSuggestLanguage = async (currentLanguage: string) => {
  try {
    // Check if we've already shown the suggestion for this session
    const hasShownSuggestion = sessionStorage.getItem('locationLanguageSuggestionShown');
    if (hasShownSuggestion) {
      return null;
    }

    const position = await getCurrentPosition();
    const { latitude, longitude } = position.coords;
    
    const locationData = await reverseGeocode(latitude, longitude);
    const suggestedLanguages = getSuggestedLanguages(locationData.countryCode, currentLanguage);

    if (suggestedLanguages.length > 0) {
      return {
        location: locationData,
        suggestedLanguages
      };
    }

    return null;
  } catch (error) {
    console.warn('Location-based language detection failed:', error);
    return null;
  }
};