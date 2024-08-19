"use client"
import React from 'react'

interface ButtonHomeProps {

}

const ButtonHome: React.FC<ButtonHomeProps> = ({ }) => {
  return (
    <button onClick={() => {
      const popularCoursesSection = document.getElementById('popular-courses');
      if (popularCoursesSection) {
        const yOffset = popularCoursesSection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: yOffset,
          behavior: 'smooth'
        });
      }
    }} className="bg-primary px-6 py-2 text-black font-semibold rounded-l-xl rounded-tr-xl">
      Explore courses
    </button>
  )
}

export default ButtonHome