import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Phone,
  Mail,
  Calendar,
  Edit,
  StickyNote,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { getContact } from "@/app/_actions/ContactsActions";
import { getServerSession } from "next-auth";
import authOptions from "@/authOptions";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export default async function ProfileContactCard({ id }: { id: string }) {
  const session = await getServerSession(authOptions);
  const contact = await getContact(Number(id), session.user.token);

  /**
   * Formatea una fecha de cumpleaños al formato español.
   * @param {string} dateString - La fecha de cumpleaños en formato string.
   * @returns {string} La fecha formateada en español (ejemplo: "1 de enero").
   */
  const formatBirthday = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "d 'de' MMMM", { locale: es });
  };

  return (
    <div className="min-h-screen w-full bg-backgroundColor text-white flex flex-col">
      <div className="w-full max-w-2xl mx-auto flex-grow flex flex-col">
        <Link href="/home" passHref>
          <Button
            variant="link"
            className="text-textGray hover:text-white mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>

        <Card className="bg-[#181818] border-none flex-grow md:flex-grow-0 w-full">
          <CardContent className="p-6 h-full flex flex-col mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <Avatar className="w-16 h-16 sm:w-24 sm:h-24">
                  <AvatarImage
                    src={`/placeholder.svg?text=${contact.name.charAt(0)}`}
                    alt={contact.name}
                  />
                  <AvatarFallback>
                    {contact.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white">
                    {contact.name}
                  </h1>
                  <p className="text-sm text-textGray">Contact</p>
                </div>
              </div>
              <Button className="bg-greenSpotify hover:bg-[#1ed760] text-black font-semibold py-1 px-3 sm:py-2 sm:px-4 rounded-full border-none transition-all">
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center text-textGray">
                <Phone className="mr-3 h-5 w-5" />
                <span>{contact.number}</span>
              </div>
              <div className="flex items-center text-textGray">
                <Mail className="mr-3 h-5 w-5" />
                <span>{contact.email}</span>
              </div>
              <div className="flex items-center text-textGray">
                <Calendar className="mr-3 h-5 w-5" />
                <time>{formatBirthday(contact.birthday_date)}</time>
              </div>
              <Card className="bg-[#181818] border-none">
                <CardContent className="py-6 px-0 sm:p-6">
                  <span className="text-textGray text-sm mb-2 flex items-center">
                    <StickyNote className="mr-3 h-5 w-5" />
                    Notes
                  </span>
                  <Textarea
                    value={contact.notes}
                    disabled
                    className="w-full bg-[#282828] min-h-[150px] sm:min-h-0 border-none text-white resize-none"
                    rows={4}
                  />
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
