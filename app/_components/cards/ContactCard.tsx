"use client";
import { Contacts } from "@/types/types";
// import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Phone, Mail, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { deleteContact } from "@/app/_actions/ContactsActions";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function ContactCard({
  id,
  number,
  profile_photo,
  name,
  email,
  birthday_date,
}: Contacts) {
  const session = useSession();
  const router = useRouter();

  const onClickDelete = async (id: number) => {
    const res = await deleteContact(id, session.data?.user?.token);
    if (res.affected == 1) {
      toast.success("Contact deleted succesfully");
      // location.reload();
      window.location.reload();
    }
  };

  const isBirthday = () => {
    if (!birthday_date) return false;
    const today = new Date();
    const birthDate = new Date(birthday_date);
    return (
      today.getDate() === birthDate.getDate() &&
      today.getMonth() === birthDate.getMonth()
    );
  };

  const cardBackground = isBirthday()
    ? "bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
    : "bg-[#181818] hover:bg-[#282828]";

  return (
    <div
      key={id}
      className={`${cardBackground} p-4 rounded-lg transition-colors relative`}
    >
      {/* TOP PART (AVATAR, NAME, AND OPTIONS) */}
      <div className="flex items-center justify-between mb-3">
        <Link href={`contact/${id}`}>
          <div className="flex items-center">
            <Avatar className="w-12 h-12 mr-3">
              {/* <AvatarImage src={contact.avatarUrl} alt={name} /> */}
              <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <h3 className="text-lg font-semibold text-white">{name}</h3>
          </div>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="text-gray-400 hover:text-white">
              <MoreHorizontal size={20} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-[#282828] border-[#3E3E3E] text-white relative">
            <Link href="/edit">
              <DropdownMenuItem className="hover:bg-[#3E3E3E] focus:bg-[#3E3E3E] focus:text-white cursor-pointer">
                <Pencil className="mr-2 h-4 w-4" />
                <span>Edit</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem
              className="focus:bg-[#3E3E3E] focus:text-[#E22134]"
              onClick={() => onClickDelete(id)}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* PHONE PART */}
      <div className="flex items-center text-sm text-[#B3B3B3] mb-1">
        <Phone size={16} className="mr-2" />
        {number}
      </div>
      {/* MAIL PART */}
      <div className="flex items-center text-sm text-[#B3B3B3]">
        <Mail size={16} className="mr-2" />
        {email}
      </div>
      {isBirthday() && (
        <div className="absolute bottom-2 right-2 text-xs font-bold">
          <h4 className="text-base text-white">Birthday</h4>
        </div>
      )}
    </div>
  );
}
// font-semibold gradient-text text-transparent animate-gradient
