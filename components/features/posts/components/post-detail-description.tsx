import { Format } from "@/lib/format";
import { cn } from "@/lib/utils";
import { FC } from "react";

export const PostDetailDescription: FC<{ description: string }> = ({
  description,
}) => {
  const descriptionSplit = Format.splitSentenceByHashTag(description);

  return (
    <p className="leading-5">
      {descriptionSplit.map((sentence, index) => {
        const isHashTag = ["#", "@"].some((word) => sentence.startsWith(word));

        return (
          <span
            key={index}
            className={cn(
              isHashTag && "font-bold text-blue-400 dark:text-blue-500/80",
              !isHashTag &&
                "whitespace-pre-wrap text-balance text-base font-medium dark:text-zinc-200/80"
            )}
          >
            {`${sentence} `}
          </span>
        );
      })}
    </p>
  );
};
