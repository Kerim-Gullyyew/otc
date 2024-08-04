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
  secondary_category: SecondaryCategoryInterface[];
}