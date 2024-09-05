"use client";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
export default function ViewCard() {
  return (
    <div className="bg-gradient-to-b from-customViolet via-customViolet/80 to-customViolet/50 p-8 rounded-lg mb-8 mt-8">
      {/* from-customViolet via-customViolet/50 to-[#121212] */}
      <h1 className="text-4xl font-bold text-white mb-2">Create Contact</h1>
      <p className="text-xl text-gray-300">Add a new contact to your network</p>
      <div className="mt-4 flex items-center">
        <Avatar className="w-10 h-10 mr-4">
          {/* <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} /> */}
          <AvatarFallback>x1vaan</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm text-gray-300">x1vaan</p>
          <p className="text-sm text-gray-400">4 contacts</p>
        </div>
      </div>
    </div>
  );
}
