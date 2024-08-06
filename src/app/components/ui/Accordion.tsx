"use client"
import React from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
interface AccordionProps {
  syllabus: {
    id: number;
    name: string;
    description: string;
  }
}

const Accordion: React.FC<AccordionProps> = ({ syllabus }) => {
  return (
    <Disclosure
      key={syllabus.id}
      as="div"
      className="w-full bg-[#FBFBFF] rounded-lg border-[1px] py-2 px-4"
    >
      {({ open }) => (
        <>
          <DisclosureButton className="outline-none group w-full rounded-lg  text-left flex items-center justify-between">
            <h3 className='font-[500]'>{syllabus.name}</h3>
            <ChevronRightIcon className="w-5 h-5 group-data-[open]:rotate-90 shrink-0" />
          </DisclosureButton>
          <div className="overflow-hidden">
            <DisclosurePanel
              transition
              className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 data-[closed]:ease-in"
            >
              <div className='pt-4'>
              {syllabus.description}

              </div>
            </DisclosurePanel>
          </div>
        </>
      )}
    </Disclosure>
  )
}

export default Accordion