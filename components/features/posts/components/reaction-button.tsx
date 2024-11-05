import { Button } from "@/components/ui/button";
import { FC, ReactElement } from "react";

interface ReactionButtonProps {
  children: React.ReactNode;
  reactionParam?: string;
}

const ReactionButton: FC<ReactionButtonProps> = ({
  children,
  reactionParam,
}): ReactElement => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="w-auto gap-[3px] rounded-full pr-4 md:pr-6 [&_svg]:size-[1.25rem] text-gray-800/80 dark:text-zinc-200/75 font-semibold dark:font-normal" 
    >
      {children}
      {reactionParam}
    </Button>
  );
};

export default ReactionButton;
