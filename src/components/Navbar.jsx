"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [navbarIsopen, setNavbarIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className={`bg-[#f1f2f4] z-50 sticky top-0 px-4 py-2 md:py-0 `}>
      <div className="flex justify-between items-center container">
        <Icon
          icon="material-symbols:menu"
          className="size-8 md:hidden"
          onClick={() => setNavbarIsOpen((prev) => !prev)}
        />
        <div
          className={`absolute ${
            navbarIsopen ? "left-0" : "-left-full"
          } top-full bg-[#f1f2f4] min-h-screen pt-3 px-4 transition-all duration-200 md:static md:min-h-fit md:p-0`}
        >
          <ul className="flex flex-col gap-3 text-[##5E6670] text-sm md:flex-row lg:gap-6">
            <li className="md:py-4 py-2 relative">
              <Link
                href={"/"}
                className={`${pathname === "/" ? "text-primary" : ""}`}
              >
                Home
              </Link>
              {pathname === "/" && (
                <div className="w-full h-0.5 absolute bottom-0 -translate-y-full bg-primary"></div>
              )}
            </li>
            <li className="md:py-4 py-2 relative">
              <Link
                href={"/job"}
                className={`${pathname === "/job" ? "text-primary" : ""}`}
              >
                Find Job
              </Link>
              {(pathname === "/job" || pathname.startsWith("/job")) && (
                <div className="w-full h-0.5 absolute bottom-0 -translate-y-full bg-primary"></div>
              )}
            </li>
            <li className="md:py-4 py-2 relative">
              <Link href={"/"}>Find Employers</Link>
            </li>
            <li className="md:py-4 py-2 relative">
              <Link href={"/"}>Dashboard</Link>
            </li>
            <li className="md:py-4 py-2 relative">
              <Link href={"/"}>Job Alerts</Link>
            </li>
            <li className="md:py-4 py-2 relative">
              <Link href={"/"}>Customer Supports</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2 lg:gap-6">
          <div className="flex items-center gap-2">
            <Icon icon={"ic:baseline-phone"} />
            <p>+1-202-555-0178</p>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <img src="/image1.png" alt="img" />
            <p>English</p>
            <Icon icon={"mdi:chevron-down"} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
