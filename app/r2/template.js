import React from "react";
import Navbar from "@/ui/Navbar";

function template({ children }) {
  return (
    <div className="flex">
      <Navbar />
      {children}
    </div>
  );
}

export default template;
