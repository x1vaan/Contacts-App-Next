import { Button } from "@/components/ui/button";
import { Contact, Loader2 } from "lucide-react";
import ContactCard from "@/app/_components/cards/ContactCard";

export default function Home() {
  const data: { name: string; number: number; image: string; email: string }[] = [
    { name: "Ivan Garcia", number: 1245, image: "", email: "@ivangarcia@esar.com" },
    { name: "Ivan Garcia", number: 1245, image: "", email: "@ivangarcia@esar.com" },
    { name: "Ivan Garcia", number: 1245, image: "", email: "@ivangarcia@esar.com" },
    { name: "Ivan Garcia", number: 1245, image: "", email: "@ivangarcia@esar.com" },
    { name: "Ivan Garcia", number: 1245, image: "", email: "@ivangarcia@esar.com" },
    { name: "Ivan Garcia", number: 1245, image: "", email: "@ivangarcia@esar.com" },
  ];
  return (
    <div className="flex justify-center w-full h-full">
      {data.map(contact => {
        return(
          <ContactCard />
        )
      })}
      {/* <Button className="bg-white text-slate-900 font-bold" disabled>
        <Loader2 className="mr-2 animate-spin" /> Welcome to the Home Page.
      </Button> */}
    </div>
  );
}
