import { FC } from "react";
import { cn } from "@/lib/utils";
import { Format } from "@/lib/format";

export const PostDetailDescription: FC<{ description: string }> = ({ description }) => {
	const descriptionSplit = Format.splitSentenceByHashTag(description);

	return (
		<p className="text-md mt-1">
			{descriptionSplit.map((sentence, index) => (
				<span
					key={index}
					className={cn(
						["#", "@"].some((word) => sentence.startsWith(word)) &&
						"font-bold text-blue-600 dark:text-blue-400",
						"whitespace-pre-wrap text-balance text-base font-medium text-zinc-700"
					)}
				>
					{`${sentence} `}
				</span>
			))}
		</p>
	);
};