import { PawPrint } from "lucide-react";
import Link from "next/link";
import Sidebar from "./sidebar";

const Navbar = () => {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center justify-between border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <PawPrint className="h-6 w-6" />
            <span className="capitalize">peludos</span>
          </Link>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;
