import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { JsonPlaceholder } from "@/types/types";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ContactCard({ id, number, bio, photo, name }: JsonPlaceholder) {
  return (
    <Card className="rounded-xl cursor-pointer transition border-0 bg-[#252930] text-gray-200">
      <CardHeader className="flex justify-center items-center">
        <div className="relative w-32 h-32">
          <Image src={photo} fill className="rounded-xl object-cover" alt="Contact" />
        </div>
        <p className="font-bold text-medium text-center text-blue-500">{name}</p>
        <p className="text-xs">{bio}</p>
        <p>{number}</p>
      </CardHeader>
      <CardFooter className="relative flex justify-between items-center text-xs text-muted-foregroun mb-0">
        <p>{id}</p>
        <div className="flex justify-center items-center gap-2">
          <Button className="hover:text-yellow-500">Editar</Button>
          <Button className="hover:text-red-700">Eliminar</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
