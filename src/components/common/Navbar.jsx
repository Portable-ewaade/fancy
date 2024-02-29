import React from "react";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { linkData } from "@/data/mockData";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const router = useRouter(); // Use the useRouter hook
  return (
    <Disclosure as="nav" className="grid_container ">
      {({ open }) => (
        <section className="shadow-xl navbar_container md:px-10">
          <div className="container w-[100%] mx-auto px-2 sm:px-6 ">
            <div className="relative flex items-center justify-between h-18">
              <div className="flex items-center flex-1">
                <Link href="/">
                  <img
                    className="w-auto h-16 my-1"
                    src="/assets/nav-logo.png"
                    alt="motive health logo"
                  />
                </Link>
              </div>

              <div className="flex items-center sm:hidden">
                {/* Mobile menu button*/}

                <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="z-10 block w-10 h-10 text-white" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-8 h-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex items-center justify-center flex-shrink-0 sm:items-stretch sm:justify-start ">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {linkData.map((link, index) => (
                      <ul className="nav-item " key={index}>
                        <Link
                          href={link.url}
                          className={`font-[550] text-[#02021C] mx-3 hover:text-[#0A0A8C] ${
                            router.pathname === link.url ? "active" : ""
                          }`}
                          passHref
                        >
                          {link.title}
                        </Link>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="z-10 ">
            <div className="absolute z-10 w-2/3 h-screen px-2 pt-2 pb-3 space-y-10 text-white shadow-lg end-0 bg-gradient-to-r from-blue-900 to-blue-700 backdrop-brightness-100 disclosure">
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
                    passHref
                  >
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
