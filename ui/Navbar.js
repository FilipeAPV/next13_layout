"use client";
import React from "react";
import { useState } from "react";

function Navbar() {
  const [state, setState] = useState(0);

  console.count("Number of renders");
  return (
    <div className="h-screen bg-slate-900 text-gray-200 flex flex-col justify-center items-center w-60 space-y-4">
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

export default Navbar;
