import { Button } from "@/components/ui/button";

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
      <Button size="lg" variant="destructive" className="text-base">
        Report Anonymously
      </Button>

    </div>
  );
};

export default Home;