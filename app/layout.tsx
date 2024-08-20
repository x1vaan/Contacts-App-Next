import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Inter } from "next/font/google";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Providers from "./_components/Providers";
import CustomSessionProvider from "./_components/sessionProvider";

export const metadata: Metadata = {
  title: "Contacts App",
  description: "Contacts App is a Web App for efficient contact management",
};

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <CustomSessionProvider>
            <Toaster position="bottom-left" expand={true} richColors />
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            {children}
          </CustomSessionProvider>
        </Providers>
      </body>
    </html>
  );
}
