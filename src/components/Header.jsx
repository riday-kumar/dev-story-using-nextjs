"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavLink from "./NavLink";

const Header = () => {
  const pathName = usePathname();
  console.log(pathName);

  if (pathName.startsWith("/dashboard")) return <></>;
  return (
    <header className="flex max-md:flex-wrap justify-between items-center px-5 py-3 border-b-2 border-gray-500">
      <Link href="/" className="text-2xl font-semibold">
        Dev-Story
      </Link>
      <nav className="flex max-sm:flex-wrap gap-5 text-xl">
        <NavLink href="/tutorials">Tutorials</NavLink>
        <NavLink href="/stories">Stories</NavLink>
        <details className="dropdown">
          <summary className="">About</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-20 p-2 shadow-sm">
            <li>
              <NavLink href="/about/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink href="/about/teams">Team</NavLink>
            </li>
          </ul>
        </details>
        <NavLink href="/login">Login</NavLink>
        <NavLink href="/register">Register</NavLink>
      </nav>
    </header>
  );
};

export default Header;
