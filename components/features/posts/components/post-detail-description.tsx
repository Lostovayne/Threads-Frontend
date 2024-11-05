import { FC } from "react";
import { cn } from "@/lib/utils";
import { Format } from "@/lib/format";

export const PostDetailDescription: FC<{ description: string }> = ({ description }) => {
	const descriptionSplit = Format.splitSentenceByHashTag(description);

	return (
		<p className="leading-5">
			{descriptionSplit.map((sentence, index) => {
				const isHashTag = ["#", "@"].some((word) => sentence.startsWith(word))

				return (
					<span
						key={index}
						className={cn(
							isHashTag && "font-bold text-blue-400 dark:text-blue-500/80",
							!isHashTag && "whitespace-pre-wrap text-balance text-md sm:text-lg font-medium text-base dark:text-zinc-200/80",
						)}
					>
						{`${sentence} `}
					</span>
				)
			})}
		</p>
	);
};