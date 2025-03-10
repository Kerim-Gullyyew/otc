// components/card.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  course: {
    id: string;
    slug: string;
    image: string;
    name: string;
    duration: string;
    price: number;
  };
}

const Card: React.FC<CardProps> = ({ course }) => {
  return (
    <Link
      key={course.id}
      href={`/course/${course.slug}`}
      className="flex flex-col h-full group overflow-hidden rounded-xl shadow hover:shadow-md transition-shadow duration-500"
    >
      <Image
        className="object-cover min-h-48 h-48 xs:h-56 group-hover:scale-105 transition-transform duration-500 w-full"
        // placeholder='blur'
        loading="lazy"
        quality={40}
        width={300}
        height={200}
        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}assets/${course.image}`}
        alt="download"
      />
      <div className="flex flex-col justify-between border space-y-5 p-4 flex-grow">
        <div className="space-y-1">
          <h3 className="font-semibold">{course.name}</h3>
          <div>
            <p>Duration: {course.duration} months</p>
          </div>
        </div>
        <p className="font-medium">${course.price}/monthly</p>
      </div>
    </Link>
  );
};

export default Card;
