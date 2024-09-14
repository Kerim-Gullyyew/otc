export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.yourwebsite.com/#website",
  url: "https://www.yourwebsite.com/",
  name: "Your Online Tutoring Company",
  description:
    "Empowering students with high-quality online tutoring across various subjects",
  publisher: {
    "@type": "Organization",
    name: "Your Online Tutoring Company",
    logo: {
      "@type": "ImageObject",
      url: "https://www.yourwebsite.com/images/logo.png",
      width: "600",
      height: "60",
    },
  },
  inLanguage: "en-US",
  copyrightYear: "2024",
  datePublished: "2020-01-01T00:00:00+00:00",
  dateModified: "2024-03-15T12:00:00+00:00",
  potentialAction: [
    {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://www.yourwebsite.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    {
      "@type": "Action",
      name: "enroll",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.yourwebsite.com/enroll",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform",
        ],
      },
      description: "Enroll in our online courses",
    },
  ],
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Mathematics Courses",
        url: "https://www.yourwebsite.com/courses/mathematics",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Science Courses",
        url: "https://www.yourwebsite.com/courses/science",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Language Courses",
        url: "https://www.yourwebsite.com/courses/languages",
      },
    ],
  },
  sameAs: [
    "https://www.facebook.com/yourcompany",
    "https://www.twitter.com/yourcompany",
    "https://www.linkedin.com/company/yourcompany",
    "https://www.instagram.com/yourcompany",
  ],
  hasPart: [
    {
      "@type": "WebPage",
      name: "About Us",
      description: "Learn about our mission and team",
      url: "https://www.yourwebsite.com/about",
    },
    {
      "@type": "WebPage",
      name: "Contact Us",
      description: "Get in touch with our support team",
      url: "https://www.yourwebsite.com/contact",
    },
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Students",
    geographicArea: {
      "@type": "AdministrativeArea",
      name: "Worldwide",
    },
  },
  award: "Best Online Tutoring Platform 2023",
  keywords: "online tutoring, mathematics, science, languages, education",
  mainEntityOfPage: "https://www.yourwebsite.com",
  isAccessibleForFree: "False",
  isFamilyFriendly: "True",
};
