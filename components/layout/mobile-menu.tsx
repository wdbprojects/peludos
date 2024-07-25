import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Home,
  LineChart,
  Menu,
  Package,
  PawPrint,
  ShoppingCart,
  Users,
} from "lucide-react";
import Link from "next/link";
import SwitchTheme from "@/components/shared/switch-theme";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import links from "@/utils/links";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <div className="flex h-14 items-center justify-between border-b px-2 pr-0 lg:h-[60px] lg:px-4">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <PawPrint className="h-6 w-6" />
              <span className="capitalize">peludos</span>
            </Link>
          </div>
          <div>
            {links.map((link) => {
              const { id, href, label, icon } = link;
              return (
                <Link
                  key={id}
                  href={href}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  {icon}
                  <span className="text-base">{label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
        <div className="mt-auto">
          <Card>
            <CardHeader>
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
