"use client";

import React from "react";
import { useState } from "react";

function Header() {
  const [state, setState] = useState(0);

  console.count("Number of renders");
  return (
    <div className="h-11 bg-slate-900 text-gray-200 flex justify-center items-center w-full space-x-4">
      <h1>Number of renders: {state}</h1>
      <button
        onClick={() => setState((currentValue) => currentValue + 1)}
        className="bg-blue-800 text-white"
      >
        Increment
      </button>
    </div>
  );
}

export default Header;
