"use client";

import { cn } from "@/lib/utils";
import { useUserStore } from "@/store/user-store";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button, buttonVariants } from "./ui/button";
import { logout } from "@/action";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Reports", href: "/reports" },
  { name: "Audit Logs", href: "/audit-logs" },
];

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const user = useUserStore.use.user();
  const removeUser = useUserStore.use.removeUser();

  const { mutateAsync: logoutMutation } = useMutation({
    mutationFn: logout,
    onSuccess: (data) => {
      removeUser();
      toast.success("Success", {
        description: data.message,
        style: {
          backgroundColor: "green",
          color: "white",
        },
      });

      router.replace("/");
    },
    onError: (error) => {
      toast.error("Error", {
        description: error.message,
        style: {
          backgroundColor: "red",
          color: "white",
        },
      });
    },
  });

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
      {user ? (
        <Button onClick={() => logoutMutation()}>Logout</Button>
      ) : (
        <Link
          href="/login"
          className={cn(buttonVariants({ variant: "default" }))}
        >
          Login
        </Link>
      )}
    </header>
  );
};

export default Header;
