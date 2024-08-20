"use client";

import { Input } from "@/components/ui/input";
import { Contacts } from "@/types/types";
import { Search } from "lucide-react";
import ContactCard from "./cards/ContactCard";
import { useEffect, useState } from "react";

export default function SearchComponent({ data }: { data: Contacts[] }) {
  const [filtersName, setFiltersName] = useState<string>("");
  const [dataPassed, setDataPassed] = useState<Contacts[]>(data)

  useEffect(() => {
    data = data.filter((contact) => (contact.name.includes(filtersName.toString())));
    setDataPassed(data)
  }, [filtersName]);

  return (
    <div className="w-[95%] h-full">
      <div className="relative mt-4">
        <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground" />
        <Input
          placeholder="Search..."
          className="pl-10 bg-[#252930] font-normal border-0 text-white"
          onChange={(e: any) => setFiltersName(e.target.value)}
          value={filtersName}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pb-10 items-center w-[90%] mt-8">
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
    </div>
  );
}
