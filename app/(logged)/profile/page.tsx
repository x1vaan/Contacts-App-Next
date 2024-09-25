import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal, Phone } from "lucide-react";
import { getServerSession } from "next-auth";
import authOptions from "@/authOptions";
import { getContacts } from "@/app/_actions/ContactsActions";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  let data = await getContacts(session.user.id, session.user.token);

  const currentDate = new Date();
  const sevenDaysAgo = new Date(currentDate);
  sevenDaysAgo.setDate(currentDate.getDate() - 7);
  const createdRecently = data.filter(
    (contact) => new Date(contact.created_at) >= sevenDaysAgo
  );

  return (
    <div className="flex flex-col h-screen bg-[#121212] text-white">
      {/* Profile Header */}
      <div className="flex-shrink-0 flex items-end space-x-6 bg-gradient-to-b from-customViolet via-customViolet/40 to-[#121212] py-8 px-2 sm:p-8">
        <Avatar className="w-20 h-20 sm:w-24 sm:h-24 md:w-48 md:h-48 border-4 border-white shadow-xl">
          <AvatarImage
            src="/placeholder.svg?height=208&width=208"
            alt="Profile picture"
          />
          <AvatarFallback className="text-gray-600 text-[50px]">
            {session.user?.user.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2">Your contacts</h1>
          <p className="text-sm opacity-75">
            {session.user?.user} • {data.length} contacts •{" "}
            {createdRecently.length} created this week
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex-shrink-0 flex items-center space-x-4 p-6">
        <Button className="rounded-full bg-greenSpotify hover:bg-[#1ed760] text-black font-bold px-8">
          Edit Profile
        </Button>
        {/* <Button
          variant="outline"
          className="rounded-full text-black border-white hover:border-[#1DB954]"
        >
          Edit Profile
        </Button> */}
        <Button variant="ghost" size="icon" className="rounded-full">
          <MoreHorizontal className="w-6 h-6" />
        </Button>
      </div>

      {/* Contacts List */}
      <div className="flex-grow overflow-hidden">
        <ScrollArea className="h-full w-full">
          <div className="p-6">
            <Table className="w-full table-auto">
              <TableHeader>
                <TableRow className="border-b border-gray-700 truncate">
                  <TableHead className="font-normal text-gray-400">#</TableHead>
                  <TableHead className="font-normal text-gray-400">
                    Name
                  </TableHead>
                  <TableHead className="font-normal text-gray-400 truncate">
                    Email
                  </TableHead>
                  <TableHead className="font-normal text-gray-400 text-right truncate">
                    Fecha en la que se creo
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[...data].map((contact, i) => (
                  <TableRow
                    key={i}
                    className="group hover:bg-[#282828] transition-colors"
                  >
                    <TableCell className="font-medium py-2 truncate">
                      {contact.id}
                    </TableCell>
                    <TableCell className="py-2 truncate">
                      <div className="flex items-center">
                        <Avatar className="w-8 h-8 mr-3">
                          <AvatarImage
                            src={`/placeholder.svg?height=32&width=32&text=${
                              i + 1
                            }`}
                            alt={`Contact ${i + 1}`}
                          />
                          <AvatarFallback>C{i + 1}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm truncate">{contact.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-400 text-sm py-2 truncate">
                      {contact.email}
                    </TableCell>
                    <TableCell className="text-right text-gray-400 text-sm py- truncate">
                      {contact.created_at}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
