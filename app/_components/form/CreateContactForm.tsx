"use client";
import { Upload, Image as ImageIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CreateContactForm() {
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    instructions: "",
    photo: null,
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewContact((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewContact((prev: any) => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <form
      //   onSubmit={handleSubmit}
      className="space-y-8 bg-cardBgColor p-8 rounded-lg overflow-scroll"
    >
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-40 h-40 border-2 border-dashed border-gray-700 rounded-lg flex items-center justify-center bg-[#282828]">
          {newContact.photo ? (
            <img
              src={newContact.photo}
              alt="Contact"
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <ImageIcon size={48} className="text-gray-600" />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="absolute bottom-2 right-2 bg-greenSpotify rounded-full p-2">
            <Upload size={16} className="text-black" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <Label
            htmlFor="name"
            className="text-sm font-medium text-gray-300 mb-1 block"
          >
            Name
          </Label>
          <Input
            id="name"
            name="name"
            value={newContact.name}
            onChange={handleInputChange}
            className="w-full bg-[#282828] border-none rounded-md text-white"
            placeholder="Contact name"
          />
        </div>
        <div>
          <Label
            htmlFor="email"
            className="text-sm font-medium text-gray-300 mb-1 block"
          >
            Email
          </Label>
          <Input
            id="email"
            name="email"
            value={newContact.email}
            onChange={handleInputChange}
            className="w-full bg-[#282828] border-none rounded-md text-white"
            placeholder="Email"
          />
        </div>
        <div>
          <Label
            htmlFor="phone"
            className="text-sm font-medium text-gray-300 mb-1 block"
          >
            Phone
          </Label>
          <Input
            id="phone"
            name="phone"
            value={newContact.phone}
            onChange={handleInputChange}
            className="w-full bg-[#282828] border-none rounded-md text-white"
            placeholder="Phone"
          />
        </div>
        <div>
          <Label
            htmlFor="birthday-date"
            className="text-sm font-medium text-gray-300 mb-1 block"
          >
            Birthday Date
          </Label>
          <Input
            id="birthday-date"
            name="birthday-date"
            // value={newContact.description}
            onChange={handleInputChange}
            className="w-full bg-[#282828] border-none rounded-md text-white"
            placeholder="Birthday Date"
          />
        </div>
      </div>
      <div>
        <Label
          htmlFor="category"
          className="text-sm font-medium text-gray-300 mb-1 block"
        >
          Category
        </Label>
        <Select
          name="category"
          onValueChange={(value) =>
            setNewContact((prev) => ({ ...prev, category: value }))
          }
        >
          <SelectTrigger className="w-full bg-[#282828] border-none text-white">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent className="bg-[#282828] border-none text-white">
            <SelectItem value="family">Family</SelectItem>
            <SelectItem value="friend">Friend</SelectItem>
            <SelectItem value="work">Work</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* <div>
        <Label
          htmlFor="instructions"
          className="text-sm font-medium text-gray-300 mb-1 block"
        >
          Notes
        </Label>
        <Textarea
          id="instructions"
          name="instructions"
          value={newContact.instructions}
          onChange={handleInputChange}
          className="w-full bg-[#282828] border-none rounded-md text-white h-32"
          placeholder="Add any additional notes or information about the contact here."
        />
      </div> */}
      <Button
        type="submit"
        className="w-full bg-greenSpotify hover:bg-[#1ED760] text-black font-semibold"
      >
        Create Contact
      </Button>
    </form>
  );
}
