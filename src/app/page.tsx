import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
        Your identity stays hidden. <br />
        Your report makes change.
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        Help improve your barangay by reporting local issues, corruption, or
        misconduct while keeping your identity completely anonymous and secure.
      </p>
      <Link
        href="/projects"
        className={cn(
          buttonVariants({ variant: "destructive", size: "lg" }),
          "text-base"
        )}
      >
        Report Anonymously
      </Link>
    </div>
  );
};

export default Home;
