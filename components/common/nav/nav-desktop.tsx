"use client";

import { Button } from "@/components/ui/button";
import { Heart, House, Plus, Search, SquarePen, User } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

import HeartIcon from "../icons/heart-icon";
import HomeIcon from "../icons/home-icon";
import PlusIcon from "../icons/plus-icon";
import SearchIcon from "../icons/search-icon";
import UserIcon from "../icons/user-icon";
import { IconNav } from "./icon-nav";

//FIXME: md esta a 768px para el cambio de dispositivo y es a 700
//FIXME: corregir los paths cuando esten las rutas
export const NavDesktop = () => {
  const pathname = usePathname();
  const iconClass = "";
  return (
    <nav className="absolute left-0 hidden h-screen w-[68px] flex-col items-center justify-center gap-6 px-10 md:flex">
      <IconNav icon={<HomeIcon isFilled={pathname === "/"} />} path="/" />

      <IconNav icon={<SearchIcon />} path="/search" />
      <Button
        variant={"ghost"}
        className="h-12 w-16 rounded-xl bg-[#f0f0f0] text-[#b1b1b1] hover:text-black"
      >
        <PlusIcon />
      </Button>
      <IconNav
        icon={<HeartIcon isFilled={pathname === "/activity"} />}
        path="/activity"
      />
      <IconNav icon={<UserIcon />} path="/user" />
    </nav>
  );
};
