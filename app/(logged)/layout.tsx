import { ReactNode } from "react";
import SideBar from "../_components/shared/SideBar";

export default function LoggedLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-full relative flex">
      <SideBar />
      <main className="w-full h-full relative">{children}</main>
    </div>
  );
}
