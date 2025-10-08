import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center py-6 px-10">
      <Link href="/">
        <Image
          className="h-7 w-auto max-[602px]:h-4"
          src="assets/vault.svg"
          height={100}
          width={500}
          alt="VOUZ"
        />
      </Link>
    </div>
  );
}
