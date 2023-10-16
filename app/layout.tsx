import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Nunito } from "next/font/google";

export const metadata: Metadata = {
  title: "Contacts App",
  description: "Contacts App is a Web App to save your contacts",
};

const font = Nunito({
  subsets : ["latin"]
})
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`absolute bg-white w-full h-full ${font.className}`} >
        <Toaster position="bottom-left" expand={true} richColors />
        <div className="flex w-full h-full">{children}</div>
      </body>
    </html>
  );
}
