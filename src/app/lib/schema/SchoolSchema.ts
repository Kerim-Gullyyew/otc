export const schoolSchema = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "Your School Name",
  alternateName: "School's Alternate or Abbreviated Name",
  description: "A detailed description of your school",
  url: "https://www.yourschool.edu",
  logo: "https://www.yourschool.edu/logo.png",
  sameAs: [
    "https://www.facebook.com/yourschool",
    "https://www.twitter.com/yourschool",
    "https://www.linkedin.com/school/yourschool",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 School Street",
    addressLocality: "City Name",
    addressRegion: "State",
    postalCode: "12345",
    addressCountry: "Country",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "40.7128",
    longitude: "-74.0060",
  },
  telephone: "+1 (123) 456-7890",
  faxNumber: "+1 (123) 456-7891",
  email: "info@yourschool.edu",
  foundingDate: "1900-01-01",
  numberOfStudents: 1000,
  educationalLevel: ["High School", "Secondary"],
  funding: {
    "@type": "Grant",
    name: "State Education Fund",
    funder: {
      "@type": "GovernmentOrganization",
      name: "State Department of Education",
    },
  },
  areaServed: {
    "@type": "State",
    name: "Your State",
  },
  alumni: [
    {
      "@type": "Person",
      name: "Famous Alumni Name",
    },
  ],
  offer: {
    "@type": "Offer",
    category: "Admission",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: "10000",
      priceCurrency: "USD",
    },
  },
  department: [
    {
      "@type": "EducationalOrganization",
      name: "Mathematics Department",
    },
    {
      "@type": "EducationalOrganization",
      name: "Science Department",
    },
  ],
  employee: [
    {
      "@type": "Person",
      name: "Principal Name",
      jobTitle: "Principal",
    },
  ],
  event: [
    {
      "@type": "Event",
      name: "Annual Science Fair",
      startDate: "2024-05-15",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Course Catalog",
    itemListElement: [
      {
        "@type": "Course",
        name: "Advanced Biology",
        description: "An in-depth study of biological systems",
      },
    ],
  },
  teaches: ["Science", "Mathematics", "Literature", "History"],
  sport: ["Basketball", "Soccer", "Swimming"],
  publicAccess: true,
  isAccessibleForFree: true,
  parentOrganization: {
    "@type": "Organization",
    name: "School District Name",
  },
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Library",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Sports Complex",
      value: true,
    },
  ],
  awardingBody: {
    "@type": "Organization",
    name: "State Board of Education",
  },
  memberOf: {
    "@type": "Organization",
    name: "National Association of Secondary School Principals",
  },
  naics: "611110", // NAICS code for Elementary and Secondary Schools
  slogan: "Educating for the Future",
  mission:
    "To provide a comprehensive, high-quality education that prepares students for success in a rapidly changing world.",
  review: {
    "@type": "Review",
    reviewBody:
      "An excellent school with dedicated teachers and a strong academic program.",
    author: {
      "@type": "Person",
      name: "John Doe",
    },
  },
};
