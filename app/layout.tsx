import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Nunito } from "next/font/google";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Providers from "./_components/Providers";

export const metadata: Metadata = {
  title: "Contacts App",
  description: "Contacts App is a Web App to save your contacts",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`absolute bg-[#1D2127] w-full h-full ${font.className}`}>
        <Providers>
          <Toaster position="bottom-left" expand={true} richColors />
          <div className="flex justify-center items-center w-full h-full">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
