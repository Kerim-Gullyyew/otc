export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://www.yourwebsite.com/#organization",
  name: "Your Online Tutoring Company",
  alternateName: "YOT Co.",
  url: "https://www.yourwebsite.com",
  logo: "https://www.yourwebsite.com/images/logo.png",
  sameAs: [
    "https://www.facebook.com/yourcompany",
    "https://www.twitter.com/yourcompany",
    "https://www.linkedin.com/company/yourcompany",
    "https://www.instagram.com/yourcompany",
  ],
  description:
    "We provide high-quality online tutoring services across various subjects.",
  foundingDate: "2020-01-01",
  founder: {
    "@type": "Person",
    name: "Founder Name",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Education Street",
    addressLocality: "City",
    addressRegion: "State",
    postalCode: "12345",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-234-567-8900",
    contactType: "customer support",
    email: "support@yourwebsite.com",
    availableLanguage: ["English", "Spanish"],
  },
  areaServed: "Worldwide",
  employee: [
    {
      "@type": "Person",
      name: "John Doe",
      jobTitle: "Lead Tutor",
      image: "https://www.yourwebsite.com/images/john-doe.jpg",
    },
    {
      "@type": "Person",
      name: "Jane Smith",
      jobTitle: "Math Specialist",
      image: "https://www.yourwebsite.com/images/jane-smith.jpg",
    },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Course",
        name: "Advanced Mathematics",
        description:
          "Comprehensive course covering advanced mathematical concepts.",
        provider: {
          "@type": "EducationalOrganization",
          name: "Your Online Tutoring Company",
          sameAs: "https://www.yourwebsite.com",
        },
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Course",
        name: "English Literature",
        description: "In-depth study of classic and contemporary literature.",
        provider: {
          "@type": "EducationalOrganization",
          name: "Your Online Tutoring Company",
          sameAs: "https://www.yourwebsite.com",
        },
      },
    },
  ],
  slogan: "Empowering minds through online education",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 50,
  },
  award: "Best Online Tutoring Platform 2023",
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "Accredited Online Learning Provider",
    credentialCategory: "Professional Certification",
    recognizedBy: {
      "@type": "Organization",
      name: "International Online Education Association",
    },
  },
};
