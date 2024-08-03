"use client";
import { Fragment, useState } from "react";
import Image from "next/image";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Dialog,
  Transition,
  PopoverBackdrop,
  DialogPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  UsersIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { MainCategoryInterface, SecondaryCategoryInterface, CourseInterface } from "../data";
interface HeaderProps {
  main_categories: { data: MainCategoryInterface[] }
}

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


const Header: React.FC<HeaderProps> = ({ main_categories }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const [mainCategoryItem, setMainCategoryItem] = useState<MainCategoryInterface>(main_categories.data[0]);
  const [secondaryCategoryItem, setSecondaryCategoryItem] = useState<SecondaryCategoryInterface>(main_categories.data[0].secondary_category[0]);
  const [thirdCategoryItem, setThirdCategoryItem] = useState<CourseInterface | null>(null);

  const handleMouseEnter = (item: MainCategoryInterface) => {
    setMainCategoryItem(item);
    setSecondaryCategoryItem(item.secondary_category[0]);
    setThirdCategoryItem(null);
  };

  const handleMouseLeave = () => {
    setThirdCategoryItem(null);
  }

  const handleChildMouseEnter = (category: SecondaryCategoryInterface) => {
    setSecondaryCategoryItem(category)
    setThirdCategoryItem(category.courses[0]);
  };

  return (
    <>
      <nav
        className="bg-white container mx-auto z-50 fixed w-full py-2 shadow-sm"
        aria-label="Global"
      >
        <div className=" relative isolate flex gap-5 sm:gap-10 md:gap-20 lg:gap-32 xl:gap-56 items-center justify-between">
          <div className="flex">
            <Image className="w-12 object-contain" src={'/logo.svg'} alt="logo" width={1000} height={1000} />
          </div>

          <div className="flex-1 flex items-center justify-center gap-3">
            <Popover className="relative hidden lg:flex">
              {({ open, close }) => (
                <>
                  <PopoverButton
                    className={`bg-yellow-200 ${open && "bg-primary"} transition-all hover:bg-primary duration-100 px-4 py-2 flex items-center gap-1 rounded-xl  outline-none`}
                    onClick={({ target }) =>
                      !open ? "" : (target as HTMLElement).click()
                    }
                    onMouseEnter={({ target }) =>
                      open ? "" : (target as HTMLElement).click()
                    }
                  >

                    <Bars3Icon className="w-5 h-5" />
                    Courses
                  </PopoverButton>
                  <PopoverBackdrop
                    transition
                    className="fixed inset-0 backdrop-blur-sm bg-black/30 mt-[60px] transition duration-100 ease-out data-[closed]:opacity-0"
                  />
                  <PopoverPanel
                    transition
                    onMouseLeave={close}
                    anchor="bottom"
                    className="w-full h-[50%] bg-white z-50 py-5 px-10 shadow-md max-w-5xl mt-2 origin-top transition duration-300 ease-out data-[closed]:opacity-0"
                  >
                    <div className="grid grid-cols-12 mx-auto gap-5 w-5xl max-w-5xl">
                      <div className="col-span-3">
                        <div className="border-b border-gray-700 max-w-48 pb-1">
                          <h4 className="">Main Menu</h4>
                        </div>
                        <ul className="space-y-0.5 mt-5">
                          {main_categories.data.map((item, index) => (
                            <li
                              key={index}
                              className={`text-black px-4 flex items-center justify-between rounded-xl py-1 hover:animate-fade-in cursor-pointer ${mainCategoryItem.id === item.id && "bg-[#F1F0FF]"}`}
                              onMouseEnter={() => handleMouseEnter(item)}
                              onMouseLeave={handleMouseLeave}
                            >
                              <h4>
                                {item.name}
                              </h4>
                              <ChevronRightIcon className="w-5 h-5" />
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className={`col-span-3 transition-opacity duration-500 ${secondaryCategoryItem ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="border-b border-gray-700 max-w-48 pb-1">
                          <h4 className="">Main Menu</h4>
                        </div>
                        <ul className="space-y-0.5 mt-5">
                          {mainCategoryItem &&
                            mainCategoryItem.secondary_category.map((category, index) => (
                              <li
                                key={index}
                                className={`text-black px-4 flex items-center justify-between rounded-xl py-1 hover:animate-fade-in cursor-pointer ${secondaryCategoryItem.id === category.id && "bg-[#F1F0FF]"}`}
                                onMouseEnter={() => handleChildMouseEnter(category)}
                              >
                                <h4>
                                  {category.name}
                                </h4>
                                <ChevronRightIcon className="w-5 h-5" />
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className={`col-span-6 transition-opacity duration-200 ${thirdCategoryItem !== null ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="border-b border-gray-700 max-w-48 pb-1">
                          <h4 className="">Main Menu</h4>
                        </div>
                        <ul className=" mt-5 grid grid-cols-2 gap-0.5">
                          {secondaryCategoryItem &&
                            secondaryCategoryItem.courses.map((third, index) => (
                              <li
                                key={index}
                                className={"text-black px-4 rounded-xl py-1 hover:animate-fade-in cursor-pointer hover:bg-[#F1F0FF]"}
                              >
                                <h4>
                                  {third.name}

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

          <div className="hidden lg:flex lg:justify-end">
            <button className="bg-primary rounded-md px-4 py-2">
              <h4 className="font-semibold">
                Contact Us

              </h4>
            </button>
          </div>
        </div>
      </nav>

      <Transition show={mobileMenuOpen} as={Fragment}>
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
            <div className="fixed inset-0 backdrop-blur-sm bg-black/300 transition duration-100 ease-out data-[closed]:opacity-0" />
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
              <DialogPanel className="relative ml-16 flex w-full max-w-xs flex-1">

                <div className="flex grow flex-col gap-y-5 overflow-y-auto pt-5 bg-white px-6 pb-4">
                  <div className="flex gap-5 h-16 shrink-0 items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        width={1000}
                        height={1000}
                        className="h-12 w-auto"
                        src="/logo.svg"
                        alt="Your Company"
                      />

                      <h3 className="">Online Special Tutoring</h3>

                    </div>

                    <div>
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-black"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
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
                                    ? "bg-background text-textPrimary"
                                    : "text-black hover:text-textPrimary hover:bg-background",
                                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    item.current
                                      ? "text-textPrimary"
                                      : "text-icon group-hover:text-textPrimary",
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
                        <div className="text-xs font-semibold leading-6 text-icon">
                          Your teams
                        </div>
                        <ul role="list" className="-mx-2 mt-2 space-y-1">
                          {teams.map((team) => (
                            <li key={team.name}>
                              <a
                                href={team.href}
                                className={classNames(
                                  team.current
                                    ? "bg-background text-textPrimary"
                                    : "text-black hover:text-textPrimary hover:bg-background",
                                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                )}
                              >
                                <span
                                  className={classNames(
                                    team.current
                                      ? "text-textPrimary border-textPrimary"
                                      : "text-icon border-border group-hover:border-textPrimary group-hover:text-textPrimary",
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
                          className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-black hover:bg-gray-50 hover:text-textPrimary"
                        >
                          <Cog6ToothIcon
                            className="h-6 w-6 shrink-0 text-icon group-hover:text-textPrimary"
                            aria-hidden="true"
                          />
                          Settings
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </DialogPanel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Header;