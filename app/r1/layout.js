import Navbar from "@/ui/Navbar";
import React from "react";

function LayoutROne({ children }) {
  return (
    <div className="flex">
      <Navbar />
      {children}
    </div>
  );
}

export default LayoutROne;
