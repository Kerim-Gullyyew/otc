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
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "framer-motion";
interface HeaderProps {}
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

const Header: React.FC<HeaderProps> = ({}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const [hoveredItem, setHoveredItem] = useState<number>(1);
  const [selectedItem, setSelectedItem] = useState<number>(1);
  const [categories, setCategories] = useState<number>(1);
  useEffect(() => {
    setHoveredItem(1);
  }, []);

  const handleMouseEnter = (item: number) => {
    setHoveredItem(item);
    setSelectedItem(item);
  };
  const handleCategoryListEnter = (item: number) => {
    setHoveredItem(item);
    setSelectedItem(item);
    setCategories(item);
  };
  const parentItems = [1, 2, 3, 4, 5];
  const childItems: { [key: number]: string[] } = {
    1: ["Child 1-1", "Child 1-2", "Child 1-3"],
    2: ["Child 2-1", "Child 2-2", "Child 2-3"],
    3: ["Child 3-1", "Child 3-2", "Child 3-3"],
    4: ["Child 4-1", "Child 4-2", "Child 4-3"],
    5: ["Child 5-1", "Child 5-2", "Child 5-3"],
  };
  return (
    <>
      <nav
        className="bg-[#FFF6E9] z-50 fixed w-full p-2 shadow-sm lg:px-8"
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
                  className="w-full bg-white py-5 px-10 shadow-md mt-5 origin-top transition duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                  <div className="grid grid-cols-12 gap-5 container">
                    <div className="col-span-3">
                      <ul className="space-y-3">
                        {parentItems.map((item) => (
                          <li
                            key={item}
                            className={`bg-gray-50 hover:animate-fade-in cursor-pointer ${hoveredItem === item && "bg-red-200"}`}
                            onMouseEnter={() => handleMouseEnter(item)}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-span-3">
                      <ul className="space-y-3">
                        {selectedItem &&
                          childItems[selectedItem].map((child, index) => (
                            <li
                              key={index}
                              className={"bg-gray-50 cursor-pointer"}
                              // onMouseEnter={() => handleCategoryListEnter(item)}
                            >
                              {child}
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div className="bg-black h-20 col-span-6">
                      {selectedItem &&
                        childItems[selectedItem].map((child, index) => (
                          <li
                            key={index}
                            className={"bg-gray-50 cursor-pointer"}
                          >
                            {child}
                          </li>
                        ))}
                    </div>
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          <div className="flex flex-1 border gap-2 rounded-full border-gray-300 outline-none px-3 py-1 items-center">
            <input className="rounded-full outline-none  w-full h-full" />
            <MagnifyingGlassIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
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
            <h3>EN</h3>
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
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
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
