export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@type": "Course",
    name: "Advanced Mathematics",
    description:
      "A comprehensive course covering advanced mathematical concepts",
    provider: {
      "@type": "Organization",
      name: "Your Online Tutoring Company",
      sameAs: "https://www.yourwebsite.com",
    },
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
  },
  name: "Excellent course for advanced learners",
  author: {
    "@type": "Person",
    name: "John Doe",
  },
  publisher: {
    "@type": "Organization",
    name: "Your Online Tutoring Company",
  },
  datePublished: "2024-03-15",
  reviewBody:
    "This Advanced Mathematics course exceeded my expectations. The instructor's explanations were clear and the practical examples really helped solidify the concepts.",
  positiveNotes: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Clear explanations",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Practical examples",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Responsive instructor",
      },
    ],
  },
  negativeNotes: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Could use more practice problems",
      },
    ],
  },
  associatedMedia: {
    "@type": "ImageObject",
    contentUrl: "https://www.yourwebsite.com/images/review-screenshot.jpg",
    description: "Screenshot of the course dashboard",
  },
  timeRequired: "PT40H",
  award: "Top Rated Course 2024",
  teaches: ["Calculus", "Linear Algebra", "Differential Equations"],
  educationalLevel: "Advanced",
  inLanguage: "en-US",
};
