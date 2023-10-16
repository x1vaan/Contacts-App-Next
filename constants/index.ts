import { SidebarLinksInterface } from "@/types/types";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export const sidebarLinks: SidebarLinksInterface[] = [
  {
    href: "/home",
    label: "Home",
    icon: HomeOutlinedIcon,
  },
  {
    href: "/create",
    label: "Create Contact",
    icon: PersonAddAltOutlinedIcon,
  },
  {
    href: "/profile",
    label: "Profile",
    icon: PersonOutlineOutlinedIcon,
  },
];
