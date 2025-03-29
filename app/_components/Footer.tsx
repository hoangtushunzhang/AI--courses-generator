import { CategoryItems, NavMenuItems, SocialAccounts } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="grid md:grid-cols-2 items-center justify-between gap-14">
      <div className="grid-cols-1 gap-8 items-center justify-center">
        <div className="flex gap-5 items-center">
          <Image
            src={"/logo2.svg"}
            alt="AI Courses Generator"
            width={50}
            height={50}
          />
          <h1 className="">
            {""}
            <strong className="text-myPrimary font-bold text-2xl">
              AI
            </strong>{" "}
            <strong className="text-mySecond font-bold text-2xl">
              Courses Generator
            </strong>
          </h1>
        </div>
        <p className="mt-5 ">
          Personalize learning by creating custom courses tailored to individual
          needs. Our AI-driven platform empowers educators and learners to
          design unique educational experiences, enhancing engagement and
          knowledge retention.
        </p>
        <div className="mt-5 flex gap-5">
          <Image src={"/facebook.png"} alt="Facebook" width={18} height={180} />
          <Image
            src={"/instagram.png"}
            alt="Instagram"
            width={18}
            height={180}
          />
          <Image src={"/tiktok.png"} alt="Tiktok" width={18} height={180} />
          <Image src={"/youtube.png"} alt="Youtube" width={18} height={180} />
        </div>
      </div>
      <div className="flex md:justify-end justify-center gap-10">
        <div className="flex flex-col gap-3">
          <span className="font-bold">Menu</span>
          {NavMenuItems.map((item, index) => (
            <Link href={item.href} key={index}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold">Categories</span>
          {CategoryItems.map((item, index) => (
            <Link href={item.href} key={index}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold">Social Account</span>
          {SocialAccounts.map((item, index) => (
            <Link href={item.href} key={index}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
