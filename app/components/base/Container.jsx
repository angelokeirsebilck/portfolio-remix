import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-screen-2xl px-4 font-sans text-base-clamp text-body mx-auto relative z-20">
      {children}
    </div>
  );
};

export default Container;
