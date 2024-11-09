"use client";

import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Camera } from "lucide-react";
import { ChevronRight } from 'lucide-react';
import MessageIcon from "../posts/icons/message";
import { useAuthModalStore } from "@/store/auth/auth-modal.store";


export const AuthRegistrationModal = () => {
  const open = useAuthModalStore((state) => state.isOpen);
  const setIsOpen = useAuthModalStore((state) => state.setIsOpen);

  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      {/* <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex w-full flex-col items-center gap-[1rem]">
            <div className="text-red-500 [&_svg]:size-[3.25rem]">
              <MessageIcon />
            </div>
            <span className="text-3xl font-extrabold">
              Regístrate para indicar que te gusta
            </span>
          </DialogTitle>
          <DialogDescription>
            Únete a Threads para interactuar con publicaciones e indicar que te
            gustan.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-3">
          <DialogClose asChild>
            <Button
              type="button"
              variant="ghost"
              onClick={() => console.log("hola")}
              className="flex gap-5 p-7 justify-between"
            >
              <Camera style={{height: 36, width: 36 }} />
              <span className="text-md font-bold">Continuar con Instagram!</span>
              <ChevronRight  />
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
