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
    description: "",
    category: "",
    instructions: "",
    photo: null,
  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setNewContact((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e:any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewContact((prev:any) => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <form
      //   onSubmit={handleSubmit}
      className="space-y-8 bg-[#181818] p-8 rounded-lg"
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
          <div className="absolute bottom-2 right-2 bg-[#1DB954] rounded-full p-2">
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
            className="w-full bg-[#282828] border-gray-700 rounded-md focus:ring-[#1DB954] focus:border-[#1DB954] text-white"
            placeholder="Contact name"
          />
        </div>
        <div>
          <Label
            htmlFor="description"
            className="text-sm font-medium text-gray-300 mb-1 block"
          >
            Description
          </Label>
          <Input
            id="description"
            name="description"
            value={newContact.description}
            onChange={handleInputChange}
            className="w-full bg-[#282828] border-gray-700 rounded-md focus:ring-[#1DB954] focus:border-[#1DB954] text-white"
            placeholder="Short description for your Contact"
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
          <SelectTrigger className="w-full bg-[#282828] border-gray-700 text-white focus:ring-[#1DB954] focus:border-[#1DB954]">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent className="bg-[#282828] border-gray-700 text-white">
            <SelectItem value="family">Family</SelectItem>
            <SelectItem value="friend">Friend</SelectItem>
            <SelectItem value="work">Work</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
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
          className="w-full bg-[#282828] border-gray-700 rounded-md focus:ring-[#1DB954] focus:border-[#1DB954] text-white h-32"
          placeholder="Add any additional notes or information about the contact here."
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-[#1DB954] hover:bg-[#1ED760] text-black font-semibold"
      >
        Create Contact
      </Button>
    </form>
  );
}
