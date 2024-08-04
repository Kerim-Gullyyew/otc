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
          <DisclosureButton className="w-full rounded-lg  text-left flex items-center justify-between">
            <h3>{syllabus.name}</h3>
            <ChevronRightIcon
              className={`w-5 transition-transform duration-500 h-5 ${open && "rotate-90"}`}
            />
          </DisclosureButton>
          <div className="overflow-hidden data-[open]:py-2">
            <DisclosurePanel
              transition
              className={`origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 data-[open]:py-3`}
            >
              {syllabus.description}
            </DisclosurePanel>
          </div>
        </>
      )}
    </Disclosure>
  )
}

export default Accordion