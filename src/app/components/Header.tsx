"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Dialog,
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  PopoverBackdrop,
} from "@headlessui/react";
import {
  Bars3Icon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  UsersIcon,
  SquaresPlusIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "framer-motion";
interface HeaderProps { }
const products = [
  {
    name: "Analytics",
    description: "Get a better understanding where your traffic is coming from",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers with our engagement tool",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: SquaresPlusIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
  { name: "View all products", href: "#", icon: RectangleGroupIcon },
];

const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

const Header: React.FC<HeaderProps> = ({ }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const [hoveredItem, setHoveredItem] = useState<number>(1);
  const [selectedItem, setSelectedItem] = useState<1 | 2 | 3>(1);
  const [selectedChildItem, setSelectedChildItem] = useState<number | null>(null);
  const [categories, setCategories] = useState<number>(1);
  useEffect(() => {
    setHoveredItem(1);
  }, []);

  const handleMouseEnter = (item: 1 | 2 | 3) => {
    setHoveredItem(item);
    setSelectedItem(item);
    setSelectedChildItem(null); // Reset the selected child item when the parent item changes
  };

  const handleMouseLeave = () => {
    setSelectedChildItem(null);
  }

  const handleChildMouseEnter = (childIndex: number) => {
    setSelectedChildItem(childIndex);
  };
  const parentItems: (1 | 2 | 3)[] = [1, 2, 3]; // Example parent items
  const childItems: { [key in 1 | 2 | 3]: string[] } = {
    1: ['Child 1-1', 'Child 1-2'],
    2: ['Child 2-1', 'Child 2-2'],
    3: ['Child 3-1', 'Child 3-2']
  };
  const thirdItems: { [key: string]: string[] } = {
    'Child 1-1': ['Third 1-1-1', 'Third 1-1-2'],
    'Child 1-2': ['Third 1-2-1', 'Third 1-2-2'],
    'Child 2-1': ['Third 2-1-1', 'Third 2-1-2'],
    'Child 2-2': ['Third 2-2-1', 'Third 2-2-2'],
    'Child 3-1': ['Third 3-1-1', 'Third 3-1-2'],
    'Child 3-2': ['Third 3-2-1', 'Third 3-2-2']
  };

  return (
    <>
      <nav
        className="bg-white z-50 fixed w-full p-2 shadow-sm lg:px-8"
        aria-label="Global"
      >
        <div className=" relative isolate flex gap-5 items-center justify-between">
          <div className="flex lg:flex-1">
            <h2>Logo</h2>
          </div>

          <Popover className="relative hidden lg:flex">
            {({ open, close }) => (
              <>
                <PopoverButton
                  className="bg-gray-50 px-4 py-2 rounded-xl hover:bg-gray-100 outline-none"
                  onClick={({ target }) =>
                    !open ? "" : (target as HTMLElement).click()
                  }
                  onMouseEnter={({ target }) =>
                    open ? "" : (target as HTMLElement).click()
                  }
                >
                  Solutions
                </PopoverButton>

                <PopoverPanel
                  transition
                  onMouseLeave={close}
                  anchor="bottom"
                  className="w-full bg-white py-5 px-10 shadow-md  origin-top transition duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                  <div className="grid grid-cols-12 gap-5 container">
                    <div className="col-span-3">
                      <div className="border-b border-gray-700 max-w-48 pb-1">
                        <h4 className="">Main Menu</h4>
                      </div>
                      <ul className="space-y-2 mt-5">
                        {parentItems.map((item) => (
                          <li
                            key={item}
                            className={`text-black px-4 flex items-center justify-between rounded-xl py-1 hover:animate-fade-in cursor-pointer ${hoveredItem === item && "bg-[#F1F0FF]"}`}
                            onMouseEnter={() => handleMouseEnter(item)}
                            onMouseLeave={handleMouseLeave}
                          >
                            <h4>
                              {item}
                            </h4>
                            <ChevronRightIcon className="w-5 h-5" />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`col-span-3 transition-opacity duration-500 ${selectedItem ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="border-b border-gray-700 max-w-48 pb-1">
                        <h4 className="">Main Menu</h4>
                      </div>
                      <ul className="space-y-2 mt-5">
                        {selectedItem &&
                          childItems[selectedItem].map((child, index) => (
                            <li
                              key={index}
                              className={`text-black px-4 flex items-center justify-between rounded-xl py-1 hover:animate-fade-in cursor-pointer ${selectedChildItem === index && "bg-[#F1F0FF]"}`}
                              onMouseEnter={() => handleChildMouseEnter(index)}
                            >
                              <h4>
                                {child}
                              </h4>
                              <ChevronRightIcon className="w-5 h-5" />
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div className={`col-span-6 transition-opacity duration-200 ${selectedChildItem !== null ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="border-b border-gray-700 max-w-48 pb-1">
                        <h4 className="">Main Menu</h4>
                      </div>
                      <ul className=" mt-5 grid grid-cols-2 gap-2">
                        {selectedChildItem &&
                          thirdItems[childItems[selectedItem][selectedChildItem]].map((third, index) => (
                            <li
                              key={index}
                              className={"text-black px-4 rounded-xl py-1 hover:animate-fade-in cursor-pointer hover:bg-[#F1F0FF]"}
                            >
                              <h4>
                                {third}

                              </h4>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>



          <div className="flex flex-1 border gap-2 rounded-lg border-gray-300 outline-none px-3 py-2 items-center">
            <MagnifyingGlassIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
            <input placeholder="Search" className="outline-none w-full h-full" />
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <h3>Contact Us</h3>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed justify-end inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="-translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="-translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute right-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                  <div className="flex h-16 shrink-0 items-center">
                    <Image
                      width={1000}
                      height={1000}
                      className="h-8 w-auto"
                      src="/vercel.svg"
                      alt="Your Company"
                    />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? "bg-gray-50 text-indigo-600"
                                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    item.current
                                      ? "text-indigo-600"
                                      : "text-gray-400 group-hover:text-indigo-600",
                                    "h-6 w-6 shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <div className="text-xs font-semibold leading-6 text-gray-400">
                          Your teams
                        </div>
                        <ul role="list" className="-mx-2 mt-2 space-y-1">
                          {teams.map((team) => (
                            <li key={team.name}>
                              <a
                                href={team.href}
                                className={classNames(
                                  team.current
                                    ? "bg-gray-50 text-indigo-600"
                                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                )}
                              >
                                <span
                                  className={classNames(
                                    team.current
                                      ? "text-indigo-600 border-indigo-600"
                                      : "text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600",
                                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"
                                  )}
                                >
                                  {team.initial}
                                </span>
                                <span className="truncate">{team.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="mt-auto">
                        <a
                          href="#"
                          className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                        >
                          <Cog6ToothIcon
                            className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                          Settings
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Header;
