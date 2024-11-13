"use client"

import { Button } from "@/components/ui/button";
import { Camera, ChevronRight } from "lucide-react";
import { FC } from "react";

interface InstagramRedirectButtonProps {
  textButton: string;
}

export const InstagramRedirectButton: FC<InstagramRedirectButtonProps> = ({
  textButton,
}) => {
    const handleClick = () => {
      console.log("Redirect to Instagram");
    }

    return (
    <Button
      type="button"
      variant="ghost"
      onClick={handleClick}
      className="flex w-full justify-between gap-5 border text-md py-8 border-foreground/30 px-7"
    >
      <Camera style={{ height: 36, width: 36 }} />
      <span className="text-md font-bold">{textButton}</span>
      <ChevronRight />
    </Button>
  );
};
