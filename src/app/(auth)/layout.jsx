import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen gap-5">
      <div className="flex-2">{children}</div>
      <div className="flex-1 bg-sky-600 flex justify-center items-center text-white">
        <h2 className="text-6xl font-bold text-center">
          Welcome For Authentication
        </h2>
      </div>
    </div>
  );
};

export default AuthLayout;
