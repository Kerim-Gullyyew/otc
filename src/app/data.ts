export interface CourseInterface {
  id: number;
  name: string;
}

export interface SecondaryCategoryInterface {
  id: number;
  name: string;
  courses: CourseInterface[];
}

export interface MainCategoryInterface {
  id: number;
  name: string;
  secondary_categories: SecondaryCategoryInterface[];
}

export const DataCategory: { main_categories: MainCategoryInterface[] } = {
  main_categories: [
    {
      id: 1,
      name: "Science",
      secondary_categories: [
        {
          id: 1,
          name: "Physics",
          courses: [
            {
              id: 1,
              name: "Quantum Mechanics"
            },
            {
              id: 2,
              name: "Thermodynamics"
            },
            {
              id: 3,
              name: "Electromagnetism"
            },
            {
              id: 4,
              name: "Optics"
            }
          ]
        },
        {
          id: 2,
          name: "Chemistry",
          courses: [
            {
              id: 1,
              name: "Organic Chemistry"
            },
            {
              id: 2,
              name: "Inorganic Chemistry"
            },
            {
              id: 3,
              name: "Analytical Chemistry"
            },
            {
              id: 4,
              name: "Physical Chemistry"
            }
          ]
        },
        {
          id: 3,
          name: "Biology",
          courses: [
            {
              id: 1,
              name: "Genetics"
            },
            {
              id: 2,
              name: "Microbiology"
            },
            {
              id: 3,
              name: "Biochemistry"
            },
            {
              id: 4,
              name: "Evolution"
            }
          ]
        },
        {
          id: 4,
          name: "Mathematics",
          courses: [
            {
              id: 1,
              name: "Calculus"
            },
            {
              id: 2,
              name: "Linear Algebra"
            },
            {
              id: 3,
              name: "Statistics"
            },
            {
              id: 4,
              name: "Discrete Mathematics"
            }
          ]
        },
        {
          id: 5,
          name: "Earth Sciences",
          courses: [
            {
              id: 1,
              name: "Geology"
            },
            {
              id: 2,
              name: "Meteorology"
            },
            {
              id: 3,
              name: "Oceanography"
            },
            {
              id: 4,
              name: "Environmental Science"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Arts",
      secondary_categories: [
        {
          id: 1,
          name: "Painting",
          courses: [
            {
              id: 1,
              name: "Watercolor Techniques"
            },
            {
              id: 2,
              name: "Oil Painting Basics"
            },
            {
              id: 3,
              name: "Acrylic Painting"
            },
            {
              id: 4,
              name: "Abstract Art"
            }
          ]
        },
        {
          id: 2,
          name: "Music",
          courses: [
            {
              id: 1,
              name: "Piano for Beginners"
            },
            {
              id: 2,
              name: "Guitar Fundamentals"
            },
            {
              id: 3,
              name: "Violin Techniques"
            },
            {
              id: 4,
              name: "Music Theory"
            }
          ]
        },
        {
          id: 3,
          name: "Sculpture",
          courses: [
            {
              id: 1,
              name: "Clay Modeling"
            },
            {
              id: 2,
              name: "Stone Carving"
            },
            {
              id: 3,
              name: "Wood Sculpting"
            },
            {
              id: 4,
              name: "Metal Sculpture"
            }
          ]
        },
        {
          id: 4,
          name: "Theater",
          courses: [
            {
              id: 1,
              name: "Acting Basics"
            },
            {
              id: 2,
              name: "Stage Design"
            },
            {
              id: 3,
              name: "Directing"
            },
            {
              id: 4,
              name: "Script Writing"
            }
          ]
        },
        {
          id: 5,
          name: "Literature",
          courses: [
            {
              id: 1,
              name: "Creative Writing"
            },
            {
              id: 2,
              name: "Poetry"
            },
            {
              id: 3,
              name: "Novel Writing"
            },
            {
              id: 4,
              name: "Literary Analysis"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Technology",
      secondary_categories: [
        {
          id: 1,
          name: "Programming",
          courses: [
            {
              id: 1,
              name: "Introduction to Python"
            },
            {
              id: 2,
              name: "JavaScript Essentials"
            },
            {
              id: 3,
              name: "Advanced Java"
            },
            {
              id: 4,
              name: "C++ for Beginners"
            },
            {
              id: 5,
              name: "Ruby on Rails"
            },
            {
              id: 6,
              name: "Go Programming"
            }
          ]
        },
        {
          id: 2,
          name: "Data Science",
          courses: [
            {
              id: 1,
              name: "Data Analysis with Python"
            },
            {
              id: 2,
              name: "Machine Learning"
            },
            {
              id: 3,
              name: "Deep Learning"
            },
            {
              id: 4,
              name: "Data Visualization"
            },
            {
              id: 5,
              name: "Big Data Analytics"
            },
            {
              id: 6,
              name: "Natural Language Processing"
            }
          ]
        },
        {
          id: 3,
          name: "Cybersecurity",
          courses: [
            {
              id: 1,
              name: "Network Security"
            },
            {
              id: 2,
              name: "Ethical Hacking"
            },
            {
              id: 3,
              name: "Cryptography"
            },
            {
              id: 4,
              name: "Digital Forensics"
            },
            {
              id: 5,
              name: "Cyber Threat Intelligence"
            },
            {
              id: 6,
              name: "Cloud Security"
            }
          ]
        }
      ]
    },
    {
      id: 4,
      name: "Business",
      secondary_categories: [
        {
          id: 1,
          name: "Management",
          courses: [
            {
              id: 1,
              name: "Project Management"
            },
            {
              id: 2,
              name: "Leadership Skills"
            },
            {
              id: 3,
              name: "Strategic Planning"
            },
            {
              id: 4,
              name: "Human Resources Management"
            },
            {
              id: 5,
              name: "Operations Management"
            }
          ]
        },
        {
          id: 2,
          name: "Marketing",
          courses: [
            {
              id: 1,
              name: "Digital Marketing"
            },
            {
              id: 2,
              name: "Market Research"
            },
            {
              id: 3,
              name: "Brand Management"
            },
            {
              id: 4,
              name: "Social Media Marketing"
            },
            {
              id: 5,
              name: "Content Marketing"
            }
          ]
        },
        {
          id: 3,
          name: "Finance",
          courses: [
            {
              id: 1,
              name: "Corporate Finance"
            },
            {
              id: 2,
              name: "Investment Analysis"
            },
            {
              id: 3,
              name: "Financial Modeling"
            },
            {
              id: 4,
              name: "Personal Finance"
            },
            {
              id: 5,
              name: "International Finance"
            }
          ]
        },
        {
          id: 4,
          name: "Entrepreneurship",
          courses: [
            {
              id: 1,
              name: "Starting a Business"
            },
            {
              id: 2,
              name: "Business Plan Development"
            },
            {
              id: 3,
              name: "Scaling Startups"
            },
            {
              id: 4,
              name: "Venture Capital"
            },
            {
              id: 5,
              name: "Innovation and Creativity"
            }
          ]
        }
      ]
    },
    {
      id: 5,
      name: "Health",
      secondary_categories: [
        {
          id: 1,
          name: "Nutrition",
          courses: [
            {
              id: 1,
              name: "Basics of Nutrition"
            },
            {
              id: 2,
              name: "Sports Nutrition"
            },
            {
              id: 3,
              name: "Diet Planning"
            },
            {
              id: 4,
              name: "Clinical Nutrition"
            },
            {
              id: 5,
              name: "Nutritional Biochemistry"
            }
          ]
        },
        {
          id: 2,
          name: "Fitness",
          courses: [
            {
              id: 1,
              name: "Personal Training"
            },
            {
              id: 2,
              name: "Yoga"
            },
            {
              id: 3,
              name: "Pilates"
            },
            {
              id: 4,
              name: "Aerobics"
            },
            {
              id: 5,
              name: "Strength Training"
            }
          ]
        },
        {
          id: 3,
          name: "Mental Health",
          courses: [
            {
              id: 1,
              name: "Psychology"
            },
            {
              id: 2,
              name: "Counseling"
            },
            {
              id: 3,
              name: "Mindfulness"
            },
            {
              id: 4,
              name: "Stress Management"
            },
            {
              id: 5,
              name: "Cognitive Behavioral Therapy"
            }
          ]
        },
        {
          id: 4,
          name: "Public Health",
          courses: [
            {
              id: 1,
              name: "Epidemiology"
            },
            {
              id: 2,
              name: "Health Policy"
            },
            {
              id: 3,
              name: "Global Health"
            },
            {
              id: 4,
              name: "Health Education"
            },
            {
              id: 5,
              name: "Community Health"
            }
          ]
        }
      ]
    },
    {
      id: 6,
      name: "Languages",
      secondary_categories: [
        {
          id: 1,
          name: "English",
          courses: [
            {
              id: 1,
              name: "English for Beginners"
            },
            {
              id: 2,
              name: "Advanced English"
            },
            {
              id: 3,
              name: "Business English"
            },
            {
              id: 4,
              name: "English Literature"
            },
            {
              id: 5,
              name: "English Grammar"
            }
          ]
        },
        {
          id: 2,
          name: "Spanish",
          courses: [
            {
              id: 1,
              name: "Spanish for Beginners"
            },
            {
              id: 2,
              name: "Advanced Spanish"
            },
            {
              id: 3,
              name: "Spanish Literature"
            },
            {
              id: 4,
              name: "Conversational Spanish"
            },
            {
              id: 5,
              name: "Spanish Grammar"
            }
          ]
        },
        {
          id: 3,
          name: "French",
          courses: [
            {
              id: 1,
              name: "French for Beginners"
            },
            {
              id: 2,
              name: "Advanced French"
            },
            {
              id: 3,
              name: "French Literature"
            },
            {
              id: 4,
              name: "Conversational French"
            },
            {
              id: 5,
              name: "French Grammar"
            }
          ]
        },
        {
          id: 4,
          name: "German",
          courses: [
            {
              id: 1,
              name: "German for Beginners"
            },
            {
              id: 2,
              name: "Advanced German"
            },
            {
              id: 3,
              name: "German Literature"
            },
            {
              id: 4,
              name: "Conversational German"
            },
            {
              id: 5,
              name: "German Grammar"
            }
          ]
        },
        {
          id: 5,
          name: "Chinese",
          courses: [
            {
              id: 1,
              name: "Chinese for Beginners"
            },
            {
              id: 2,
              name: "Advanced Chinese"
            },
            {
              id: 3,
              name: "Chinese Literature"
            },
            {
              id: 4,
              name: "Conversational Chinese"
            },
            {
              id: 5,
              name: "Chinese Grammar"
            }
          ]
        }
      ]
    }
  ]
};

