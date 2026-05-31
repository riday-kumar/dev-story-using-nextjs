import React from "react";

const Title = ({ children }) => {
  return (
    <div className="text-center bg-linear-60 from-sky-50 to-sky-200 p-3 my-3 text-black rounded-md">
      <h2 className="text-5xl font-bold">{children}</h2>
    </div>
  );
};

export default Title;
