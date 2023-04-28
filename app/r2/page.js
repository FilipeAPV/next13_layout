import React from "react";
import Link from "next/link";

function RTwoPage() {
  return (
    <div className="space-x-4">
      <h1>Route One Page</h1>
      <Link href="/" className="text-blue-600 text-lg">
        Home
      </Link>
      <Link href="/r1" className="text-blue-600 text-lg">
        R1
      </Link>
      <Link href="/r2" className="text-blue-600 text-lg">
        R2
      </Link>
      <Link href="/r2/r21" className="text-blue-600 text-lg">
        R21
      </Link>
    </div>
  );
}

export default RTwoPage;
