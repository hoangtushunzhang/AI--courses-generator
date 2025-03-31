import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center shadow-sm">
      <Link href={"/"}>
        <Image src="/logo2.svg" alt="logo" width={100} height={100}></Image>
      </Link>
      <UserButton />
    </div>
  );
};

export default Header;
