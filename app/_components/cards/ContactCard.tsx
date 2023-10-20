import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { JsonPlaceholder } from "@/types/types";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import DeleteModal from "../modals/DeleteModal";

export default function ContactCard({ id, number, photo, name, email }: JsonPlaceholder) {
  return (
    <Card className="rounded-xl transition border-0 bg-[#252930] text-gray-200 relative">
      <CardHeader className="flex justify-center items-center w-full cursor-pointer">
        <div className="relative w-32 h-32">
          <Image src={photo} fill className="rounded-xl object-cover" alt="Contact" />
        </div>
        <p className="font-bold text-medium text-center text-blue-500">{name}</p>
        <p>{number}</p>
      </CardHeader>
      <CardFooter className="flex flex-col justify-between items-center text-xs w-full gap-5">
        <p className="text-xs font-light ml-2">{email}</p>
        <div className="flex justify-center items-center gap-2 w-full">
          <Button className="hover:text-yellow-500 w-[45%]">Edit</Button>
          <DeleteModal id={id} number={number} photo={photo} name={email} email={email} />
        </div>
      </CardFooter>
    </Card>
  );
}
