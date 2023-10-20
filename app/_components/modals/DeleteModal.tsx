"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { JsonPlaceholder } from "@/types/types";
import { useState } from "react";

export default function DeleteModal({ id, name }: JsonPlaceholder) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button className="hover:text-red-700 w-[45%]">Delete</Button>
      </AlertDialogTrigger>

      <AlertDialogContent>

        <AlertDialogHeader>
          <AlertDialogTitle className="text-gray-200">Are you sure you want to delete this contact?</AlertDialogTitle>
          <AlertDialogDescription className="text-muted-foreground">
            This will permanently delete your account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogAction className="bg-red-700 hover:bg-red-700 hover:opacity-80">Delete</AlertDialogAction>
          <AlertDialogCancel className="bg-gradient-to-l from-blue-600 to-sky-400 border-0">Cancel</AlertDialogCancel>
        </AlertDialogFooter>
        
      </AlertDialogContent>
    </AlertDialog>
  );
}
