'use client'
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import { usePathname } from "next/navigation";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Define the paths where you don't want the Footer
  const noFooterPaths = ["/courses", "/course/[courseId]/start"];

  // Check if the current path matches any of the noFooterPaths
  const shouldShowFooter = !noFooterPaths.some((path) => {
    if (path.includes("[courseId]")) {
      return pathname.startsWith("/course/");
    }
    return pathname === path;
  });

  return (
    <div>
      <div className="sticky top-0 z-50 w-full">
        <Header />
      </div>
      {children}
      {shouldShowFooter && (
        <div className="p-10 mt-20 bg-gray-50">
          <Footer />
        </div>
      )}
    </div>
  );
}
