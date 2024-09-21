import { ReactNode } from "react";
import SideBar from "../_components/shared/SideBar";

export default function LoggedLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen h-screen relative flex">
      <SideBar />
      <main className="w-full h-screen relative transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
