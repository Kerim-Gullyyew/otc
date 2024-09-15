export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "John Doe",
  givenName: "John",
  familyName: "Doe",
  additionalName: "Robert",
  alternateName: "Johnny",
  gender: "Male",
  birthDate: "1980-01-15",
  birthPlace: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "NY",
      addressCountry: "US",
    },
  },
  deathDate: "2050-12-31",
  deathPlace: {
    "@type": "Place",
    name: "Future City Hospital",
  },
  height: {
    "@type": "QuantitativeValue",
    value: 180,
    unitCode: "CMT",
  },
  weight: {
    "@type": "QuantitativeValue",
    value: 75,
    unitCode: "KGM",
  },
  nationality: {
    "@type": "Country",
    name: "United States",
  },
  telephone: "+1-555-123-4567",
  email: "john.doe@example.com",
  url: "https://www.johndoe.com",
  sameAs: [
    "https://twitter.com/johndoe",
    "https://www.linkedin.com/in/johndoe",
  ],
  image: "https://www.example.com/johndoe.jpg",
  jobTitle: "Professor of Computer Science",
  worksFor: {
    "@type": "Organization",
    name: "Example University",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Stanford University",
  },
  affiliation: [
    {
      "@type": "Organization",
      name: "ACM",
    },
    {
      "@type": "Organization",
      name: "IEEE",
    },
  ],
  award: ["Turing Award", "National Medal of Technology and Innovation"],
  honorificPrefix: "Dr.",
  honorificSuffix: "Ph.D.",
  knowsLanguage: [
    {
      "@type": "Language",
      name: "English",
    },
    {
      "@type": "Language",
      name: "Spanish",
    },
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Computer Scientist",
    occupationLocation: {
      "@type": "City",
      name: "San Francisco",
    },
  },
  memberOf: [
    {
      "@type": "Organization",
      name: "National Academy of Sciences",
    },
  ],
  homeLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Tech Street",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94122",
      addressCountry: "US",
    },
  },
  spouse: {
    "@type": "Person",
    name: "Jane Doe",
  },
  children: [
    {
      "@type": "Person",
      name: "John Doe Jr.",
    },
  ],
  colleague: [
    {
      "@type": "Person",
      name: "Alice Smith",
    },
  ],
  education: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Ph.D. in Computer Science",
      educationalLevel: "Doctoral",
      about: "Artificial Intelligence",
    },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Certified Information Systems Security Professional (CISSP)",
    },
  ],
  potentialAction: {
    "@type": "Action",
    name: "Schedule Appointment",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.example.com/schedule?person=johndoe",
      inLanguage: "en-US",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
  },
  description:
    "John Doe is a renowned computer scientist specializing in artificial intelligence and machine learning.",
  disambiguatingDescription:
    "John Doe, the computer scientist, not to be confused with John Doe, the musician.",
  mainEntityOfPage: "https://www.example.edu/faculty/johndoe",
  additionalType: "http://www.wikidata.org/entity/Q5",
};
