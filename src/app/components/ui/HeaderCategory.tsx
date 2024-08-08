import { CourseInterface, MainCategoryInterface, SecondaryCategoryInterface } from '@/app/data';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'
import React, { useState } from 'react'

interface HeaderCategoryProps {
  main_categories: MainCategoryInterface[];
  close: () => void
}

const HeaderCategory: React.FC<HeaderCategoryProps> = ({ main_categories, close }) => {


  const [mainCategoryItem, setMainCategoryItem] =
    useState<MainCategoryInterface>(main_categories[0]);
  const [secondaryCategoryItem, setSecondaryCategoryItem] =
    useState<SecondaryCategoryInterface | null>(
      main_categories[0]?.secondary_category.length > 0 ? main_categories[0].secondary_category[0] : null
    );

  const [thirdCategoryItem, setThirdCategoryItem] =
    useState<CourseInterface | null>(null);

  const handleMouseEnter = (item: MainCategoryInterface) => {
    setMainCategoryItem(item);
    setSecondaryCategoryItem(item.secondary_category[0]);
    setThirdCategoryItem(null);
  };

  const handleMouseLeave = () => {
    setThirdCategoryItem(null);
  };

  const handleChildMouseEnter = (category: SecondaryCategoryInterface) => {
    setSecondaryCategoryItem(category);
    setThirdCategoryItem(category.courses[0]);
  };



  return (
    <div className="grid grid-cols-12 mx-auto gap-5 w-5xl max-w-5xl">
      <div className="col-span-3">
        <div className="border-b border-gray-300 max-w-48 pb-1">
          <h5 className="font-medium text-gray-600">Categories</h5>
        </div>
        <ul className="space-y-0.5 mt-3">
          {main_categories.map((item, index) => (
            <li
              key={index}
              className={`text-black px-4 flex items-center justify-between rounded-xl py-1.5 hover:animate-fade-in cursor-pointer ${mainCategoryItem.id === item.id && "bg-background"}`}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              <p className="text-[14px] font-medium text-gray-900">{item.name}</p>
              <ChevronRightIcon className="w-4 h-4" />
            </li>
          ))}
        </ul>
      </div>
      {
        secondaryCategoryItem && (
          <>
            <div
              className={`col-span-3 transition-opacity duration-500 ${secondaryCategoryItem ? "opacity-100" : "opacity-0"}`}
            >
              <div className="border-b border-gray-300 max-w-48 pb-1">
                <h5 className="font-medium text-gray-600">Subjects</h5>
              </div>
              <ul className="space-y-0.5 mt-3">
                {mainCategoryItem &&
                  mainCategoryItem.secondary_category.map(
                    (category, index) => (
                      <li
                        key={index}
                        className={`text-black px-4 flex items-center justify-between rounded-xl py-1.5 hover:animate-fade-in cursor-pointer ${secondaryCategoryItem.id === category.id && "bg-background"}`}
                        onMouseEnter={() =>
                          handleChildMouseEnter(category)
                        }
                      >
                        <p className="text-[14px] font-medium text-gray-900">{category.name}</p>
                        <ChevronRightIcon className="w-4 h-4" />
                      </li>
                    )
                  )}
              </ul>
            </div>
            <div
              className={`col-span-6 transition-opacity duration-200 ${thirdCategoryItem !== null ? "opacity-100" : "opacity-0"}`}
            >
              <div className="border-b border-gray-300 max-w-48 pb-1">
                <h5 className="font-medium text-gray-600">Courses</h5>
              </div>
              <ul className=" mt-3 grid grid-cols-2 gap-0.5">
                {secondaryCategoryItem &&
                  secondaryCategoryItem.courses.map(
                    (third, index) => (
                      <Link
                        onClick={close} 
                        key={index}
                        className={
                          "text-black px-4 rounded-xl py-1.5 hover:animate-fade-in cursor-pointer hover:bg-background"
                        }
                        href={`/course/${third.slug}`}>
                        <p className="text-[14px] font-medium text-gray-900">{third.name}</p>
                      </Link>
                    )
                  )}
              </ul>
            </div>
          </>
        )
      }
    </div>
  )
}

export default HeaderCategory