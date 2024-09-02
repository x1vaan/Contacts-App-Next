"use client";

import { Input } from "@/components/ui/input";
import { Contacts } from "@/types/types";
import { Search } from "lucide-react";
import ContactCard from "./cards/ContactCard";
import { useEffect, useState } from "react";
import NoContactsCard from "./cards/NoContactsCard";

export default function SearchComponent({ data }: { data: Contacts[] }) {
  const [filtersName, setFiltersName] = useState<string>("");
  const [dataPassed, setDataPassed] = useState<Contacts[]>(data);

  useEffect(() => {
    data = data.filter((contact) =>
      contact.name.toLowerCase().includes(filtersName.toString().toLowerCase())
    );
    setDataPassed(data);
  }, [filtersName]);

  return (
    <div className="w-[95%] h-screen flex flex-col justify-center items-center">
      <div className="relative mt-4 w-full">
        <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground" />
        <Input
          placeholder="Search contacts..."
          className="w-full pl-10 pr-10 py-3 bg-searchBarColor border-none rounded-full focus:ring-2 focus:ring-[#1DB954] focus:outline-none text-white placeholder-gray-400"
          onChange={(e: any) => setFiltersName(e.target.value)}
          value={filtersName}
        />
      </div>
      {dataPassed[0] ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 pb-10 items-center w-full mt-8">
          {dataPassed?.map((contact: Contacts) => {
            return (
              <ContactCard
                id={contact.id}
                email={contact.email}
                number={contact.number}
                profile_photo={contact.profile_photo}
                name={contact.name}
                key={contact.id}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex flex-grow w-full h-full justify-center items-center">
          <NoContactsCard />
        </div>
      )}
    </div>
  );
}
