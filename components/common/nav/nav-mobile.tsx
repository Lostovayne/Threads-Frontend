"use client";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

import HeartIcon from "../icons/heart-icon";
import HomeIcon from "../icons/home-icon";
import PlusIcon from "../icons/plus-icon";
import PostIcon from "../icons/post-icon";
import SearchIcon from "../icons/search-icon";
import UserIcon from "../icons/user-icon";
import { IconNav } from "./icon-nav";

//FIXME: md esta a 768px para el cambio de dispositivo y es a 700
//FIXME: revisar el blur
//FIXME: corregir los paths cuando esten las rutas

export const NavMobile = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 z-50 flex h-[68px] w-full items-center justify-between bg-white bg-opacity-80 px-2 backdrop-blur-md md:hidden">
      <IconNav
        icon={<HomeIcon isFilled={pathname === "/"} height={26} width={26} />}
        path="/"
      />

      <IconNav icon={<SearchIcon />} path="/search" />

      <Button
        variant={"ghost"}
        className="h-12 w-16 rounded-xl text-[#b1b1b1] hover:text-black md:bg-[#f0f0f0]"
      >
        <PostIcon />
      </Button>
      <IconNav
        icon={
          <HeartIcon
            isFilled={pathname === "/activity"}
            height={26}
            width={26}
          />
        }
        path="/activity"
      />
      <IconNav
        icon={
          <UserIcon height={26} width={26} isFilled={pathname === "/user"} />
        }
        path="/none"
      />
    </nav>
  );
};
