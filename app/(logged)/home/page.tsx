import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import ContactCard from "@/app/_components/cards/ContactCard";
import { getContacts } from "@/app/_actions/ContactsActions";
import SearchComponent from "@/app/_components/SearchBar";
import { getServerSession } from "next-auth";
import authOptions from "@/authOptions";
// import FiltersAndOrder from "@/app/_components/FiltersAndOrder";

export default async function Home() {
  const session = await getServerSession(authOptions);
  let data = await getContacts(session.user.id);
  return (
    <div className="flex flex-col items-center w-full h-full overflow-y-scroll">
      <SearchComponent data={data}/>
      {/* <Button className="bg-white text-slate-900 font-bold" disabled>
        <Loader2 className="mr-2 animate-spin" /> Welcome to the Home Page.
      </Button> */}
    </div>
  );
}
