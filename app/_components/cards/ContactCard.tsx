import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactsProps } from "@/types/types";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ContactCard({ id, title, body }: ContactsProps) {
  return (
    <Card className="rounded-xl cursor-pointer transition border-0 bg-[#252930] text-gray-200">
      <CardHeader className="flex justify-center items-center">
        <div className="relative w-32 h-32">
          <Image src={"https://picsum.photos/200/300"} fill className="rounded-xl object-cover" alt="Contact" />
        </div>
        <p className="font-bold text-sm text-center">{title}</p>
        <p className="text-xs">{body}</p>
      </CardHeader>
      <CardFooter className="flex justify-between items-center text-xs text-muted-foreground">
        <p>{id}</p>
        <div className="flex justify-center items-center gap-2">
          <Button className="hover:text-yellow-700">Editar</Button>
          <Button className="hover:text-red-700">Eliminar</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
