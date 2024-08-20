import { ReactNode } from "react";
import SideBar from "../_components/shared/SideBar";

export default function LoggedLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-full absolute flex">
      <SideBar />
      <main className="w-full h-full">{children}</main>
    </div>
  );
}
