import React from "react";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { linkData } from "@/data/mockData";

// const navigation = [
//   { name: "About Us", href: "about", current: true },
//   { name: "Services", href: "services", current: false },
//   { name: "Contract Vehicles", href: "contract", current: false },
//   { name: "Contact Us", href: "contact-us", current: false },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const router = useRouter(); // Use the useRouter hook
  return (
    <Disclosure as="nav" className="grid_container">
      {({ open }) => (
        <section className="navbar_container md:px-10 shadow-xl ">
          <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1  items-center">
                <a href="/">
                  <img
                    className="h-16 w-auto"
                    src="/assets/nav-logo.png"
                    alt="motive health logo"
                  />
                </a>
              </div>

              <div className="flex items-center sm:hidden">
                {/* Mobile menu button*/}

                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-shrink-0 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {linkData.map((link, index) => (
                      <ul className="nav-item " key={index}>
                        <Link
                          href={link.url}
                          className={`font-[550] mx-3 hover:text-[#0A0A8C] ${
                            router.pathname === link.url ? "active" : ""
                          }`}
                          passHref>
                          {link.title}
                        </Link>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="z-10">
            <div className="space-y-10 px-2 pb-3 pt-2 h-screen text-white w-2/3 end-0 absolute bg-gradient-to-r from-blue-900 to-blue-700 backdrop-brightness-100  shadow-lg z-10">
              <Link href="/" className="font-[550] px-3 ">
                {" "}
                Home
              </Link>
              {linkData.map((link, index) => (
                <ul className="" key={index}>
                  <Link
                    href={link.url}
                    className={`font-[550] mx-3 ${
                      router.pathname === link.url ? "active" : ""
                    }`}
                    passHref>
                    {link.title}
                  </Link>
                </ul>
              ))}
            </div>
          </Disclosure.Panel>
        </section>
      )}
    </Disclosure>
  );
}

//  "bg-gray-900 text-white"
//                       : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                     "block rounded-md px-3 py-2 text-base font-bold "
