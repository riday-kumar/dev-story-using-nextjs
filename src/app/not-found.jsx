import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col gap-5 justify-center items-center">
      <h2>404 | Page Not Found</h2>
      <Link href={"/"} className="btn btn-primary">
        Home
      </Link>
    </div>
  );
};

export default NotFound;
