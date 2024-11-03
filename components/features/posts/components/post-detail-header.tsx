import { FC } from "react";

interface PostDetailHeaderProps {
	name: string;
	date: string;	// format: yyyy/mm/dd
}

export const PostDetailtHeader: FC<PostDetailHeaderProps> = ({ name, date }) => {

	return (
		<div className="flex gap-2">
			<span className="font-bold">{name}</span>
			<span className="text-xs font-medium text-gray-500/80 md:text-sm">
				{/* TODO:format date (1 dia, 10 horas, ...) */}
				{date}
			</span>
		</div>
	);
};
