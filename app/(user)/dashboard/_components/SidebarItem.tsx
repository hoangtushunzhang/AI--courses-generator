import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface SidebarItemProps {
  label: string;
  href: string;
  Icon: LucideIcon;
}

const SidebarItem = ({ label, href, Icon }: SidebarItemProps) => {
  return (
    <Link href={href}>
      <div className="flex items-center gap-2 p-3 text-gray-600 hover:bg-gray-100 cursor-pointer rounded-lg hover:text-black">
        <Icon size={24} />
        <p>{label}</p>
      </div>
    </Link>
  );
};

export default SidebarItem;
