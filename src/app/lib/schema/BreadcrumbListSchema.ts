export const breadcrumbListSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  name: "Website Navigation",
  description: "Breadcrumb navigation for Example University website",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.example-university.edu/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Academics",
      item: "https://www.example-university.edu/academics/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Computer Science Department",
      item: "https://www.example-university.edu/academics/computer-science/",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Course Catalog",
      item: "https://www.example-university.edu/academics/computer-science/courses/",
    },
  ],
  numberOfItems: 4,
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.example-university.edu/academics/computer-science/courses/",
  },
};
