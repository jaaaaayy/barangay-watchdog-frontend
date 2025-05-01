"use client";

import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Reports", href: "/reports" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="h-14 lgh-16 flex items-center justify-between p-2 lg:px-4">
      <div className="flex items-center gap-4">
        <div className="text-xl font-bold">Barangay Watchdog</div>
        <div className="text-muted-foreground">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                `${pathname === href && "text-primary"}`
              )}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
      <div className="space-x-2">
        <Link
          href="/reports/create"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Create report
        </Link>
        <Link
          href="/login"
          className={cn(buttonVariants({ variant: "default" }))}
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
