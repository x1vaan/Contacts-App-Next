import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Contacts App",
  description: "Contacts App is a Web App to save your contacts",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="absolute bg-white w-full h-full">
        <Toaster position="bottom-left" expand={true} richColors />
        <div className="flex justify-center items-center w-full h-full font-Inter font-light">{children}</div>
      </body>
    </html>
  );
}
