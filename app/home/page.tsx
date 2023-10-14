import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <Button className="bg-white text-slate-900" disabled>
        <Loader2 className="mr-2 animate-spin" /> Welcome to the Home Page.
      </Button>
    </div>
  );
}
