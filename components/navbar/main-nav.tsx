"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Category } from "@/lib/types";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <button
          onClick={() => setShow(!show)}
          type="button"
          data-collapse-toggle="navbar-default"
          className="bg-white inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${show ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="absolute flex flex-col z-50 gap-y-4 w-[175px] h-[310px] sm:h-auto p-4 mt-4 font-medium bg-white border rounded-lg sm:relative md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 dark:bg-gray-900 dark:border-gray-700 sm:bg-transparent sm:dark:bg-transparent">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm transition-colors hover:text-text",
                  route.active ? "text-black font-bold" : "text-accent"
                )}
              >
                {route.label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
