import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/r1" className="text-blue-600 text-lg">
        R1
      </Link>
      <Link href="/r2" className="text-green-600 text-lg">
        R2
      </Link>
    </div>
  );
}
