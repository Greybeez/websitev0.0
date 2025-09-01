# Strapi Configuration Documentation for GreyBeez Website

## Table of Contents
1. [Overview](#overview)
2. [Strapi Cloud Setup](#strapi-cloud-setup)
3. [Content Types Configuration](#content-types-configuration)
4. [API Configuration](#api-configuration)
5. [Frontend Integration](#frontend-integration)
6. [Testing and Deployment](#testing-and-deployment)

## Overview

This documentation provides step-by-step instructions for setting up Strapi CMS for the GreyBeez website, including content type definitions, Strapi Cloud configuration, and frontend integration.

### Why Strapi for GreyBeez?

- **Multilingual Support**: Built-in i18n plugin for English, Hindi, Bengali, and Oriya
- **Media Management**: Centralized image and document management
- **API-First**: RESTful and GraphQL APIs for seamless frontend integration
- **User-Friendly**: Non-technical team members can manage content easily

## Strapi Cloud Setup

### Step 1: Create Strapi Cloud Account

1. Visit [Strapi Cloud](https://cloud.strapi.io/)
2. Sign up for a new account or log in with existing credentials
3. Choose your subscription plan (Free tier available for development)

### Step 2: Create New Project

1. Click "Create Project"
2. Choose "Start from scratch" or "Import from GitHub"
3. Configure project settings:
   - **Project Name**: `greybeez-cms`
   - **Region**: Choose closest to your users (e.g., Asia-Pacific for India)
   - **Database**: PostgreSQL (recommended for production)

### Step 3: Initial Setup

1. Wait for project deployment (usually 5-10 minutes)
2. Access your Strapi admin panel at: `https://your-project-name.strapicloud.io/admin`
3. Create your admin account:
   - **Email**: Your admin email
   - **Password**: Strong password
   - **First Name**: Your first name
   - **Last Name**: Your last name

## Content Types Configuration

### 1. Hero Carousel Images

Create a content type for managing hero carousel images.

#### Content Type: `carousel-image`

**Fields:**
- `title` (Text) - Required
- `description` (Text) - Optional
- `image` (Media - Single Image) - Required
- `altText` (Text) - Required for accessibility
- `order` (Number) - Required for sorting
- `isActive` (Boolean) - Default: true
- `ctaText` (Text) - Call-to-action button text
- `ctaLink` (Text) - Call-to-action button link

**Configuration Steps:**
1. Go to Content-Types Builder
2. Click "Create new collection type"
3. Name: `carousel-image`
4. Add fields as specified above
5. Configure field validations:
   - `title`: Required, max 100 characters
   - `order`: Required, integer, min 1
   - `altText`: Required, max 200 characters
6. Save and restart Strapi

### 2. Impact Highlights

Content type for managing impact statistics.

#### Content Type: `impact-highlight`

**Fields:**
- `title` (Text) - Required (e.g., "Lives Transformed")
- `number` (Text) - Required (e.g., "50,000+")
- `description` (Text) - Required
- `icon` (Enumeration) - Options: users, factory, trending-up, dollar-sign
- `color` (Enumeration) - Options: primary, secondary, accent-purple, accent-orange
- `order` (Number) - Required for sorting
- `isActive` (Boolean) - Default: true

### 3. Partner Companies

Content type for partner logos and information.

#### Content Type: `partner-company`

**Fields:**
- `name` (Text) - Required
- `logo` (Media - Single Image) - Required
- `category` (Text) - Required (e.g., "Automotive", "Manufacturing")
- `website` (Text) - Optional
- `description` (Rich Text) - Optional
- `isActive` (Boolean) - Default: true
- `order` (Number) - Required for sorting

### 4. News Articles

Content type for latest news and updates.

#### Content Type: `news-article`

**Fields:**
- `title` (Text) - Required
- `excerpt` (Text) - Required, max 200 characters
- `content` (Rich Text) - Required
- `featuredImage` (Media - Single Image) - Required
- `category` (Enumeration) - Options: Partnership, Recognition, Expansion, Program
- `publishedDate` (Date) - Required
- `author` (Text) - Required
- `slug` (UID) - Auto-generated from title
- `isPublished` (Boolean) - Default: false
- `isFeatured` (Boolean) - Default: false

### 5. Testimonials

Content type for success stories and testimonials.

#### Content Type: `testimonial`

**Fields:**
- `name` (Text) - Required
- `role` (Text) - Required
- `company` (Text) - Optional
- `location` (Text) - Optional
- `content` (Rich Text) - Required
- `rating` (Number) - Required, min 1, max 5
- `image` (Media - Single Image) - Required
- `type` (Enumeration) - Options: trainee, partner
- `isActive` (Boolean) - Default: true
- `order` (Number) - Required for sorting

### 6. Programs

Content type for training programs and services.

#### Content Type: `program`

**Fields:**
- `title` (Text) - Required
- `description` (Rich Text) - Required
- `shortDescription` (Text) - Required, max 200 characters
- `icon` (Enumeration) - Options: book-open, map-pin, trending-up, lightbulb, users, bar-chart, heart
- `features` (Component - Repeatable) - Program features list
- `color` (Enumeration) - Options: primary, secondary, accent-purple, accent-orange
- `isActive` (Boolean) - Default: true
- `order` (Number) - Required for sorting

#### Component: `program-feature`
- `title` (Text) - Required
- `description` (Text) - Optional

### 7. Services

Content type for service offerings.

#### Content Type: `service`

**Fields:**
- `title` (Text) - Required
- `description` (Rich Text) - Required
- `shortDescription` (Text) - Required, max 200 characters
- `icon` (Enumeration) - Options: lightbulb, users, bar-chart, heart
- `features` (Component - Repeatable) - Service features list
- `color` (Enumeration) - Options: primary, secondary, accent-purple, accent-orange
- `isActive` (Boolean) - Default: true
- `order` (Number) - Required for sorting

## API Configuration

### 1. Enable Public Access

For each content type, configure API permissions:

1. Go to Settings → Roles → Public
2. Enable the following permissions for each content type:
   - `find` (GET /api/content-type)
   - `findOne` (GET /api/content-type/:id)

### 2. Configure CORS

1. Go to Settings → Advanced Settings
2. Update CORS configuration:
```json
{
  "origin": [
    "http://localhost:3000",
    "http://localhost:5173",
    "https://your-frontend-domain.com"
  ],
  "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  "headers": ["Content-Type", "Authorization", "Origin", "Accept"]
}
```

### 3. API Endpoints

After configuration, your API endpoints will be:

- **Carousel Images**: `GET /api/carousel-images?populate=*&sort=order:asc`
- **Impact Highlights**: `GET /api/impact-highlights?sort=order:asc`
- **Partners**: `GET /api/partner-companies?populate=*&sort=order:asc`
- **News**: `GET /api/news-articles?populate=*&sort=publishedDate:desc&filters[isPublished][$eq]=true`
- **Testimonials**: `GET /api/testimonials?populate=*&sort=order:asc&filters[isActive][$eq]=true`
- **Programs**: `GET /api/programs?populate=*&sort=order:asc&filters[isActive][$eq]=true`
- **Services**: `GET /api/services?populate=*&sort=order:asc&filters[isActive][$eq]=true`

## Frontend Integration

### 1. Update API Base URL

Update your frontend to use the Strapi Cloud URL:

```typescript
// src/config/strapi.ts
export const STRAPI_CONFIG = {
  baseURL: 'https://your-project-name.strapicloud.io',
  apiURL: 'https://your-project-name.strapicloud.io/api',
  mediaURL: 'https://your-project-name.strapicloud.io'
};
```

### 2. Update StrapiTestPage Component

```typescript
// src/components/StrapiTestPage.tsx
import { STRAPI_CONFIG } from '../config/strapi';

const fetchStrapiImages = async () => {
  const response = await fetch(
    `${STRAPI_CONFIG.apiURL}/carousel-images?populate=*&sort=order:asc`
  );
  // ... rest of the code
};
```

### 3. Create Strapi Service

Create a service for all Strapi API calls:

```typescript
// src/services/strapiService.ts
import { STRAPI_CONFIG } from '../config/strapi';

class StrapiService {
  private baseURL = STRAPI_CONFIG.apiURL;

  async getCarouselImages() {
    const response = await fetch(`${this.baseURL}/carousel-images?populate=*&sort=order:asc`);
    return response.json();
  }

  async getImpactHighlights() {
    const response = await fetch(`${this.baseURL}/impact-highlights?sort=order:asc`);
    return response.json();
  }

  async getPartners() {
    const response = await fetch(`${this.baseURL}/partner-companies?populate=*&sort=order:asc`);
    return response.json();
  }

  async getNews(limit = 3) {
    const response = await fetch(
      `${this.baseURL}/news-articles?populate=*&sort=publishedDate:desc&filters[isPublished][$eq]=true&pagination[limit]=${limit}`
    );
    return response.json();
  }

  async getTestimonials() {
    const response = await fetch(
      `${this.baseURL}/testimonials?populate=*&sort=order:asc&filters[isActive][$eq]=true`
    );
    return response.json();
  }

  async getPrograms() {
    const response = await fetch(
      `${this.baseURL}/programs?populate=*&sort=order:asc&filters[isActive][$eq]=true`
    );
    return response.json();
  }

  async getServices() {
    const response = await fetch(
      `${this.baseURL}/services?populate=*&sort=order:asc&filters[isActive][$eq]=true`
    );
    return response.json();
  }
}

export const strapiService = new StrapiService();
```

## Internationalization (i18n) Setup

### 1. Install i18n Plugin

1. In Strapi admin, go to Marketplace
2. Search for "Internationalization (i18n)"
3. Install the plugin
4. Restart Strapi

### 2. Configure Locales

1. Go to Settings → Internationalization
2. Add locales:
   - **English (en)** - Default locale
   - **Hindi (hi)**
   - **Bengali (bn)**
   - **Oriya (or)**

### 3. Enable i18n for Content Types

For each content type:
1. Go to Content-Types Builder
2. Edit the content type
3. Click "Advanced Settings"
4. Enable "Enable localization for this Content-Type"
5. Save and restart

### 4. API Calls with Locale

```typescript
// Fetch content in specific locale
const response = await fetch(
  `${STRAPI_CONFIG.apiURL}/carousel-images?populate=*&locale=hi`
);
```

## Sample Content Data

### Carousel Images Sample Data

```json
[
  {
    "title": "Transforming Lives Through Skills",
    "description": "Empowering rural and tribal youth with market-ready skills",
    "altText": "Youth participating in skills training program",
    "order": 1,
    "isActive": true,
    "ctaText": "Learn More",
    "ctaLink": "/programs"
  },
  {
    "title": "Partner for Impact",
    "description": "Join leading companies in building sustainable workforce solutions",
    "altText": "Partnership meeting with industry leaders",
    "order": 2,
    "isActive": true,
    "ctaText": "Partner with Us",
    "ctaLink": "/contact"
  }
]
```

### Impact Highlights Sample Data

```json
[
  {
    "title": "Lives Transformed",
    "number": "50,000+",
    "description": "Rural and tribal youth empowered with skills",
    "icon": "users",
    "color": "primary",
    "order": 1,
    "isActive": true
  },
  {
    "title": "Partner Factories",
    "number": "500+",
    "description": "Leading companies trust our workforce solutions",
    "icon": "factory",
    "color": "secondary",
    "order": 2,
    "isActive": true
  }
]
```

## Testing and Deployment

### 1. Content Testing

1. Create sample content for each content type
2. Test API endpoints using Postman or browser
3. Verify image uploads and media URLs
4. Test filtering and sorting parameters

### 2. Frontend Integration Testing

1. Update frontend API calls to use Strapi Cloud URLs
2. Test all components that fetch data from Strapi
3. Verify image loading and display
4. Test multilingual content switching

### 3. Performance Optimization

1. Enable caching in Strapi settings
2. Optimize image sizes and formats
3. Use pagination for large datasets
4. Implement lazy loading for images

## Security Considerations

### 1. API Security

- Never expose admin credentials in frontend code
- Use environment variables for API URLs
- Implement rate limiting if needed
- Regular security updates

### 2. Content Security

- Review and approve all content before publishing
- Use proper image alt texts for accessibility
- Validate user inputs in rich text fields
- Regular content backups

## Maintenance and Updates

### 1. Regular Tasks

- Monitor API performance and usage
- Update content regularly
- Review and optimize database queries
- Backup content and media files

### 2. Scaling Considerations

- Monitor storage usage for media files
- Consider CDN for image delivery
- Database performance optimization
- API response caching

## Troubleshooting

### Common Issues

1. **CORS Errors**: Check CORS configuration in Strapi settings
2. **404 Errors**: Verify API endpoints and content type names
3. **Image Loading Issues**: Check media URL configuration
4. **Slow API Responses**: Optimize queries and enable caching

### Support Resources

- [Strapi Documentation](https://docs.strapi.io/)
- [Strapi Cloud Support](https://strapi.io/cloud)
- [Community Forum](https://forum.strapi.io/)

---

**Last Updated**: January 2025  
**Version**: 1.0.0  
**Maintained by**: GreyBeez Development Team