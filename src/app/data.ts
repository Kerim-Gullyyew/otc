export interface CourseInterface {
  id: number;
  name: string;
  slug: string;
}

export interface SecondaryCategoryInterface {
  id: number;
  name: string;
  slug: string;
  courses: CourseInterface[];
}

export interface MainCategoryInterface {
  id: number;
  name: string;
  slug: string;
  secondary_category: SecondaryCategoryInterface[];
}