export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the school hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our school day runs from 8:00 AM to 3:00 PM, Monday through Friday.",
      },
    },
    {
      "@type": "Question",
      name: "What extracurricular activities do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer a wide range of extracurricular activities including sports teams, debate club, drama club, and various academic societies.",
      },
    },
  ],
};
