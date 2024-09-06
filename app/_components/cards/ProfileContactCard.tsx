import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Phone, Mail, Calendar, Edit, StickyNote } from "lucide-react";
import { getContact } from "@/app/_actions/ContactsActions";
import { getServerSession } from "next-auth";
import authOptions from "@/authOptions";

export default async function ProfileContactCard({ id }: { id: string }) {
  const session = await getServerSession(authOptions);
  const contact = await getContact(Number(id), session.user.token);
  return (
    <div className="min-h-screen text-white p-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/home" passHref>
          <Button
            variant="link"
            className="text-[#b3b3b3] hover:text-white mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>

        <Card className="bg-[#181818] border-none">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <Avatar className="w-24 h-24">
                  <AvatarImage
                    src={`/placeholder.svg?text=${contact.name.charAt(0)}`}
                    alt={contact.name}
                  />
                  <AvatarFallback>{contact.name.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-3xl font-bold text-white">
                    {contact.name}
                  </h1>
                  <p className="text-sm text-[#b3b3b3]">Contact</p>
                </div>
              </div>
              <Button className="bg-greenSpotify hover:bg-[#1ed760] text-black font-semibold py-2 px-4 rounded-full border-none transition-all">
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center text-[#b3b3b3]">
                <Phone className="mr-3 h-5 w-5" />
                <span>{contact.number}</span>
              </div>
              <div className="flex items-center text-[#b3b3b3]">
                <Mail className="mr-3 h-5 w-5" />
                <span>{contact.email}</span>
              </div>
              <div className="flex items-center text-[#b3b3b3]">
                <StickyNote className="mr-3 h-5 w-5" />
                <span>{contact.notes}</span>
              </div>
              <div className="flex items-center text-[#b3b3b3]">
                <Calendar className="mr-3 h-5 w-5" />
                <span>{contact.birthday_date}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
