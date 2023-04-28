import Link from "next/link";
import React from "react";

function ROnePage() {
  return (
    <div>
      <h1>Route One Page</h1>
      <Link href="/" className="text-blue-600 text-lg">
        Home
      </Link>
    </div>
  );
}

export default ROnePage;
