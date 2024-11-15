"use client";

import { InstagramRedirectButton } from "@/components/common/buttons/instagram-redirect-button";
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
import { cn } from "@/lib/utils";
import { useAuthModalStore } from "@/store/auth/auth-modal.store";
import { Camera, ChevronRight } from "lucide-react";
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
      <DialogContent className="sm:max-w-md bg-background top-3/4">
        <DialogHeader>
          <DialogTitle className="flex w-full flex-col items-center gap-[1rem] text-center">

            <div className={cn( "[&_svg]:size-[3.25rem]", "text-red-500")}>
              <TitleIcon/>
            </div>
            <span className="text-3xl font-extrabold">{infoModal.title}</span>
          </DialogTitle>
          <DialogDescription>
            <span className="text-md mx-auto flex w-[80%] text-center text-foreground/100">
              {infoModal.description} - {infoModal.iconColor}
            </span>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-3">
          <DialogClose asChild>
            <InstagramRedirectButton textButton={infoModal.textButton}	 />
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
