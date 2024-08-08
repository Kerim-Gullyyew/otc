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
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  Cog6ToothIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  MainCategoryInterface,
} from "../data";
import Link from "next/link";
import SearchButton from "./ui/SearchButton";
import HeaderCategory from "./ui/HeaderCategory";
interface HeaderProps {
  main_categories: MainCategoryInterface[];
}

const Header: React.FC<HeaderProps> = ({ main_categories }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <>
      <nav
        className="bg-yellow-50 mx-auto z-50 fixed w-full py-2"
        aria-label="Global"
      >
        <div className=" relative container isolate flex gap-5 sm:gap-10 md:gap-20 lg:gap-32 xl:gap-56 items-center justify-between">
          <div className="flex">
            <Link href="/">
              <Image
                className="w-10 sm:w-12 object-contain"
                src={"/logo.svg"}
                alt="logo"
                width={1000}
                height={1000}
              />
            </Link>
          </div>

          <div className="flex-1 flex items-center justify-center gap-3">
            <Popover className="relative hidden lg:flex">
              {({ open, close }) => (
                <>
                  <PopoverButton
                    className={`bg-yellow-200 ${open && "bg-primary"} transition-all hover:bg-primary duration-100 px-4 py-2 flex items-center gap-2 rounded-lg  outline-none`}
                    onClick={({ target }) =>
                      !open ? "" : (target as HTMLElement).click()
                    }
                    onMouseEnter={({ target }) => {
                      if (!open && target instanceof HTMLElement) {
                        target.click();
                      }
                    }}
                  >
                    <Bars3Icon className="w-5 h-5" />
                    <p className="font-medium">
                      Courses
                    </p>
                  </PopoverButton>
                  <PopoverBackdrop
                    transition
                    className="fixed inset-0 backdrop-blur-sm bg-black/30 mt-[65px] transition duration-100 ease-out data-[closed]:opacity-0"
                  />
                  <PopoverPanel
                    transition
                    onMouseLeave={close}
                    anchor="bottom"
                    className="w-full h-[50%] bg-white z-50 py-5 px-10 shadow-md max-w-5xl mt-2 origin-top transition duration-300 ease-out data-[closed]:opacity-0"
                  >
                    <HeaderCategory close={close} main_categories={main_categories} />
                  </PopoverPanel>
                </>
              )}
            </Popover>
            <SearchButton />

          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center outline-none border border-border rounded-md p-[6px] text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:justify-end">
            <Link
              className="bg-primary rounded-md px-4 py-2"
              href="/contact-us"
            >
              <p className="font-semibold">Contact Us</p>
            </Link>
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
                        <ul role="list" className="-mx-2 space-y-1 border-b">
                          <li className="px-2">
                            <h4 className="font-semibold text-icon">Categories</h4>
                          </li>
                          {
                            main_categories.map((main_category) => (
                              <Disclosure as="li" key={main_category.id}>
                                {({ open }) => (
                                  <>
                                    <DisclosureButton className={`group flex items-center justify-between rounded-md p-2 text-sm leading-6 font-semibold w-full ${open ? 'text-black' : 'text-black'}`}>
                                      <div className="flex items-center gap-x-3">
                                        <ChevronRightIcon className="w-5 h-5 group-data-[open]:rotate-90 bg-gray-100 flex items-center justify-center rounded-full p-1 shrink-0" />
                                        <h4>{main_category.name}</h4>
                                      </div>
                                    </DisclosureButton>
                                    <DisclosurePanel transition className="ml-2 origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 data-[closed]:ease-in">
                                      {
                                        main_category.secondary_category.map((secondary_cat) => (
                                          <Link onClick={() => setMobileMenuOpen(false)} key={secondary_cat.id} href={"/category/" + secondary_cat.slug} className={`group pl-8 flex items-center justify-between rounded-md p-2 text-sm leading-6 font-semibold w-full ${open ? 'text-black' : 'text-black'}`}>
                                            <div className="flex items-center gap-x-3">
                                              <h4>{secondary_cat.name}</h4>
                                            </div>
                                            <ChevronRightIcon className="w-5 h-5 bg-gray-100 flex items-center justify-center rounded-full p-1 shrink-0" />
                                          </Link>

                                        ))
                                      }
                                    </DisclosurePanel>

                                  </>
                                )}
                              </Disclosure>

                            ))
                          }

                        </ul>
                      </li>
                      <li>

                        <ul role="list" className="-mx-2 mt-2 space-y-1">
                          <li>
                            <Link className="text-black hover:text-textPrimary hover:bg-background group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold" href={'/about'}>
                              About
                            </Link>
                          </li>
                          <li>
                            <Link className="text-black hover:text-textPrimary hover:bg-background group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold" href={'/about'}>
                              About
                            </Link>
                          </li>
                          <li>
                            <Link className="text-black hover:text-textPrimary hover:bg-background group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold" href={'/about'}>
                              About
                            </Link>
                          </li>
                          <li>
                            <Link className="text-black hover:text-textPrimary hover:bg-background group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold" href={'/about'}>
                              About
                            </Link>
                          </li>
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
