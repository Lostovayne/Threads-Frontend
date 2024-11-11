"use client";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

import HeartIcon from "../icons/heart-icon";
import HomeIcon from "../icons/home-icon";
import MenuIcon from "../icons/menu-icon";
import PinIcon from "../icons/pin-icons";
import PlusIcon from "../icons/plus-icon";
import SearchIcon from "../icons/search-icon";
import ThreadsComponent from "../icons/threads-icon";
import UserIcon from "../icons/user-icon";
import { ModeToggle } from "../mode-toggle";
import { IconNav } from "./icon-nav";

//FIXME: corregir los paths cuando esten las rutas
//FIXME: boton de menu tiene un error que impide verse.
export const NavDesktop = () => {
  const pathname = usePathname();
  const iconClass = "";
  return (
    <nav className="fixed left-0 hidden h-screen w-[68px] flex-col items-center justify-between gap-6 px-10 py-4 md:flex">
      <div>
        <div className="size-8">
          <ThreadsComponent className="" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-4">
        <IconNav icon={<HomeIcon isFilled={pathname === "/"} />} path="/" />

        <IconNav icon={<SearchIcon />} path="/search" />
        <Button
          variant={"ghost"}
          className="h-12 w-16 rounded-xl bg-[#f0f0f0] text-[#b1b1b1] hover:text-black dark:bg-[#171717] dark:hover:text-white"
        >
          <PlusIcon />
        </Button>
        <IconNav
          icon={<HeartIcon isFilled={pathname === "/activity"} />}
          path="/activity"
        />
        <IconNav
          icon={<UserIcon isFilled={pathname === "/user"} />}
          path="/user"
        />
      </div>

      <div className="flex flex-col">
        <Button
          variant={"ghost"}
          className="h-12 w-16 text-[#b1b1b1] hover:bg-transparent hover:text-black dark:text-[#565656] dark:hover:bg-[#171717] dark:hover:text-white"
        >
          <PinIcon />
        </Button>
        <ModeToggle />
      </div>
    </nav>
  );
};
