import React from "react";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "About Us", href: "about", current: true },
  { name: "Services", href: "services", current: false },
  { name: "Contract Vehicles", href: "contract", current: false },
  { name: "Contact Us", href: "contact-us", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const router = useRouter(); // Use the useRouter hook
  return (
    <Disclosure as="nav" className="grid_container">
      {({ open }) => (
        <section className="navbar_container md:px-10 shadow-xl">
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
                    {navigation.map((item) => (
                      // <Link
                      //   href={item.href}
                      //   className={`text-black nav-link hover:text-color2 my-3 ${
                      //     router.pathname === item.url ? "active" : ""
                      //   }`}
                      //   passHref
                      // >
                      //   {item.name}
                      // </Link>
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-color"
                            : "text-black hover:text-color2 ",
                          " px-3 py-2 text-md font-semibold"
                        )}
                        aria-current={item.current ? "page" : undefined}>
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Link
            href={item.href}
            className={`text-black nav-link mx-3 ${
              router.pathname === item.url ? "active" : ""
            }`}
            passHref
          >
            {item.name}
          </Link> */}
          {/* <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current ? "text-color2" : "text-black hover:text-color2",
              " px-3 py-2 text-md font-bold"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            {item.name}
          </a> */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-bold "
                  )}
                  aria-current={item.current ? "page" : undefined}>
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </section>
      )}
    </Disclosure>
  );
}
