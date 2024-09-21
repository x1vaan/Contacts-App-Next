import { getContacts } from "@/app/_actions/ContactsActions";
import SearchComponent from "@/app/_components/SearchBar";
import { getServerSession } from "next-auth";
import authOptions from "@/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);
  let data = await getContacts(session.user.id, session.user.token);
  
  // Ordenar los contactos por fecha de creación, del más reciente al más antiguo
  data.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

  return (
    <div className="flex flex-col items-center w-full h-full bg-backgroundColor overflow-y-scroll">
      <SearchComponent data={data}/>
    </div>
  );
}
