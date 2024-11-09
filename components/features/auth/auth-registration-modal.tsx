"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle, //DialogTrigger,
} from "@/components/ui/dialog";
import { ICON_MAP } from "@/lib/constants";
import { useAuthModalStore } from "@/store/auth/auth-modal.store";
import { Camera } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { FC, useEffect, useState } from "react";

export const AuthRegistrationModal: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const open = useAuthModalStore((state) => state.isOpen);
  const setIsOpen = useAuthModalStore((state) => state.setIsOpen);
  const infoModal = useAuthModalStore((state) => state.infoModal);
  const TitleIcon = ICON_MAP[infoModal.icon];

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex w-full flex-col items-center text-center gap-[1rem]">
            <div className={`${infoModal.iconColor} [&_svg]:size-[3.25rem]`}>
              <TitleIcon />
            </div>
            <span className="text-3xl font-extrabold">{infoModal.title}</span>
          </DialogTitle>
          <DialogDescription>
            <span className="text-md text-foreground/100 flex mx-auto text-center w-[80%]">{infoModal.description}</span>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-3 ">
          <DialogClose asChild>
            <Button
              type="button"
              variant="ghost"
              onClick={() => console.log("hola")}
              className="flex w-full justify-between gap-5 p-7 border border-foreground/30"
            >
              <Camera style={{ height: 36, width: 36 }} />
              <span className="text-md font-bold">{infoModal.textButton}</span>
              <ChevronRight />
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
