import { Format } from "@/lib/format";
import { FC } from "react";

interface PostDetailHeaderProps {
	name: string;
	date: Date;	
}

export const PostDetailtHeader: FC<PostDetailHeaderProps> = ({ name, date }) => {

	return (
		<div className="flex gap-2 items-center">
			<span className="font-bold">{name}</span>
			<span className="text-xs font-medium text-gray-500/80 md:text-sm dark:text-zinc-500/80">
				{/* TODO:format date (1 dia, 10 horas, ...) */}
				{Format.timeAgo(date)}
			</span>
		</div>
	);
};
