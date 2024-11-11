"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

import ArrowRightIcon from "./icons/arrow-right-icon";
import MenuIcon from "./icons/menu-icon";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-12 w-16 text-[#b1b1b1] hover:bg-transparent hover:text-black dark:text-[#565656] dark:hover:bg-[#171717] dark:hover:text-white"
        >
          <MenuIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="fixed bottom-0 left-[-0px] w-60 gap-2 rounded-xl dark:border dark:border-gray-800 dark:bg-[#181818]"
      >
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Button
            variant="ghost"
            className="flex w-full justify-between rounded-lg p-3 py-6 text-[15px] font-medium hover:cursor-pointer hover:bg-[#f0f0f0] dark:hover:bg-[#212121]"
          >
            Apariencia
            <ArrowRightIcon />
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Button
            variant="ghost"
            className="flex w-full justify-between rounded-lg p-3 py-6 text-[15px] font-medium hover:cursor-pointer hover:bg-[#f0f0f0] dark:hover:bg-[#212121]"
          >
            Reportar un problema
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
