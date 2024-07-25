"use client";
import MobileMenu from "@/components/layout/mobile-menu";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import SwitchTheme from "@/components/shared/switch-theme";
import ClerkMenu from "@/components/layout/clerk-menu";

const Header = () => {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <MobileMenu />
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar peludos..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <SwitchTheme />
      <ClerkMenu />
    </header>
  );
};

export default Header;
