import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import ContactCard from "@/app/_components/cards/ContactCard";
import { getJson } from "@/app/_actions/ContactsActions";
import SearchBar from "@/app/_components/SearchBar";

export default async function Home() {
  const data = await getJson();
  return (
    <div className="flex flex-col items-center w-full h-full overflow-y-scroll">
      <SearchBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pb-10 items-center w-[90%] mt-8">
        {data?.map((contact) => {
          return (
            <ContactCard
              id={contact.id}
              email={contact.email}
              number={contact.number}
              photo={contact.photo}
              name={contact.name}
            />
          );
        })}
      </div>
      {/* <Button className="bg-white text-slate-900 font-bold" disabled>
        <Loader2 className="mr-2 animate-spin" /> Welcome to the Home Page.
      </Button> */}
    </div>
  );
}
