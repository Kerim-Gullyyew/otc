export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "Example School Name",
  alternateName: "ESN",
  description: "A detailed description of the school",
  url: "https://www.exampleschool.edu",
  logo: "https://www.exampleschool.edu/logo.png",
  sameAs: [
    "https://www.facebook.com/exampleschool",
    "https://www.twitter.com/exampleschool",
  ],
  telephone: "+1-555-123-4567",
  email: "info@exampleschool.edu",
  faxNumber: "+1-555-123-4568",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Education Street",
    addressLocality: "Schooltown",
    addressRegion: "ST",
    postalCode: "12345",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "40.7128",
    longitude: "-74.0060",
  },
  foundingDate: "1900-01-01",
  numberOfStudents: {
    "@type": "QuantitativeValue",
    value: 1000,
  },
  educationalLevel: ["Elementary", "Secondary"],
  educationalAlignmentType: "https://ceds.ed.gov/",
  alumni: [
    {
      "@type": "Person",
      name: "Jane Doe",
    },
  ],
  areaServed: {
    "@type": "State",
    name: "New York",
  },
  award: "National Blue Ribbon School",
  department: [
    {
      "@type": "Organization",
      name: "Mathematics Department",
    },
    {
      "@type": "Organization",
      name: "Science Department",
    },
  ],
  employee: [
    {
      "@type": "Person",
      name: "John Smith",
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
  funder: {
    "@type": "Organization",
    name: "State Education Department",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Course Catalog",
    itemListElement: [
      {
        "@type": "Course",
        name: "Advanced Mathematics",
      },
    ],
  },
  knowsAbout: ["Mathematics", "Science", "Literature"],
  memberOf: {
    "@type": "Organization",
    name: "National Association of Independent Schools",
  },
  photo: "https://www.exampleschool.edu/campus-photo.jpg",
  publicAccess: true,
  slogan: "Educating for the Future",
  sport: ["Basketball", "Soccer"],
  teaches: ["Critical Thinking", "Problem Solving"],
  tourBookingPage: "https://www.exampleschool.edu/schedule-tour",
};
