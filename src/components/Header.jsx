import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex max-md:flex-wrap justify-between items-center px-5 py-3 border-b-2 border-gray-500">
      <Link href="/" className="text-2xl font-semibold">
        Dev-Story
      </Link>
      <nav className="flex max-sm:flex-wrap gap-5 text-xl">
        <Link href="/tutorials">Tutorials</Link>
        <Link href="/stories">Stories</Link>
        <details className="dropdown">
          <summary className="">About</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-20 p-2 shadow-sm">
            <li>
              <Link href="/about/contact">Contact</Link>
            </li>
            <li>
              <Link href="/about/teams">Team</Link>
            </li>
          </ul>
        </details>
      </nav>
    </header>
  );
};

export default Header;
