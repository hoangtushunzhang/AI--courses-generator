import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavBarMenu from "./NavBarMenu";
import AuthUserButton from "./AuthUserButton";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white/95 shadow-sm py-5 px-10">
      <div className="hidden sm:block">
        <Link href={"/"}>
          <Image
            src="/logo2.svg"
            alt="AI Courses Generator"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <div className="sm:hidden">
        <MobileNavbar />
      </div>
      <div className="flex items-center">
        <div className="mr-5 hidden lg:block">
          <NavBarMenu />
        </div>
        <div>
          <AuthUserButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
