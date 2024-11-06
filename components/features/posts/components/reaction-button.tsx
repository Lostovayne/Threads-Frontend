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
      className="w-auto gap-[2px] rounded-full px-2 font-medium text-gray-800/80 dark:font-normal dark:text-zinc-200/75 md:mr-3 [&_svg]:size-[1.25rem]"
    >
      {children}
      {reactionParam}
    </Button>
  );
};

export default ReactionButton;
