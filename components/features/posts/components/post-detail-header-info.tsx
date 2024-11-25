import { Format } from "@/lib/format";
import { FC } from "react";

interface PostDetailHeaderProps {
	name: string;
	date: Date;
}

export const PostDetailtHeaderInfo: FC<PostDetailHeaderProps> = ({ name, date }) => {

	return (
		<div className="flex gap-2 items-center">
			<span className="font-bold sm:text-md">{name}</span>
			<span className="text-sm md:text-md font-medium text-gray-700/80 dark:text-zinc-400/80">
				{Format.timeAgo(date)}
			</span>
		</div>
	);
};
