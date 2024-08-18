"use client"
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getSearchCourses } from '../utils/getSearchCourses'
import Link from 'next/link'
interface foundCourseProps {
  id: string;
  name: string;
  slug: string;
}


const SearchButton: React.FC = () => {
  const router = useRouter()
  const [query, setQuery] = useState<string>('');
  const [foundCourses, setFoundCourses] = useState<[] | foundCourseProps[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [showBackdrop, setShowBackdrop] = useState<boolean>(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query.length > 2) {
        getSearchCourses(query).then(courses => {
          setFoundCourses(courses);
          if (courses.length > 0) {
            setShowBackdrop(true);
          }
        });
      } else {
        setFoundCourses([]);
        setShowBackdrop(false);
      }
    }, 500);
    return () => clearTimeout(handler);
  }, [query]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      router.push("/search/" + query);
      setQuery('');
      setShowBackdrop(false);
    }
  };


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowBackdrop(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {
        foundCourses && foundCourses.length > 0 && showBackdrop && (
          <div className='absolute h-screen inset-0 mt-[50px] w-full backdrop-blur animate-fade-in-2'></div>
        )
      }
      <div className={`relative flex flex-1 ${foundCourses && foundCourses.length > 0 ? "rounded-t-lg" : "rounded-lg"} outline-none items-center py-[1px] shadow-inner-border bg-white`}>

        <div ref={inputRef} className='flex flex-1 gap-2 px-3 py-2 '>
          <MagnifyingGlassIcon
            className="h-5 w-5 flex-none text-gray-400"
            aria-hidden="true"
          />
          <input

            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Search"
            className="outline-none w-full h-full bg-white"
          />
        </div>
        {foundCourses && foundCourses.length > 0 && query && showBackdrop && (
          <div ref={dropdownRef} className='absolute max-h-[50vh] overflow-y-auto top-[100%] border-l border-r grid gap-5 border-b rounded-b-lg border-gray-300 pl-6 pr-6 py-4 w-full bg-white'>
            {
              foundCourses.map((course) => (
                <>
                  <div className='flex'>
                    <Link onClick={() => setQuery('')} href={`/course/${course.slug}`} className={`text-black px-6 bg-background flex items-center justify-between rounded-xl py-3 hover:animate-fade-in cursor-pointer`}>
                      {course.name}
                    </Link>
                  </div>
                </>
              ))
            }

          </div>

        )}
      </div>
    </>
  )
}

export default SearchButton
