import { ReactNode } from "react";
import SideBar from "../_components/shared/SideBar";

export default function LoggedLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen h-screen relative flex overflow-hidden">
      <SideBar />
      <main className="w-full h-screen relative transition-all duration-300 ml-16 md:ml-0">
        {children}
      </main>
    </div>
  );
}
