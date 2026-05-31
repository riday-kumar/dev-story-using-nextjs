import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  return (
    <div>
      <Link
        className={`${pathName.startsWith(href) && "bg-sky-400 text-white p-2"}`}
        href={href}
      >
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
