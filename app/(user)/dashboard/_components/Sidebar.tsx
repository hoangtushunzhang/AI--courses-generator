import { SidebarDashboardItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="fixed h-full md:w-64 shadow-md p-5">
      <div className="flex flex-row items-center w-full">
        <Link href={"/"} className="flex items-center justify-between">
          <Image src="logo2.svg" alt="logo" width={60} height={60}></Image>
          <p className="text-myPrimary font-semibold ml-3 text-4xl">AI </p>
        </Link>
      </div>
      <hr />
      <div className="my-5">
        {SidebarDashboardItems.map((item, index) => (
          <SidebarItem
            key={index}
            label={item.label}
            href={item.href || "/"}
            Icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
