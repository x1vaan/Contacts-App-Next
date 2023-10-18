import { Button } from "@/components/ui/button";
import { Contact, Loader2 } from "lucide-react";
import ContactCard from "@/app/_components/cards/ContactCard";
import { getJson } from "@/app/_actions/ContactsActions";

export default async function Home() {
  const data = await getJson()
  return (
    <div className="flex justify-center w-full h-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-10 pb-10 items-center w-[90%] mt-8">
        {data?.map((contact) => {
          return <ContactCard id={contact.id} title={contact.title} body={contact.body}/>;
        })}
      </div>
      {/* <Button className="bg-white text-slate-900 font-bold" disabled>
        <Loader2 className="mr-2 animate-spin" /> Welcome to the Home Page.
      </Button> */}
    </div>
  );
}
