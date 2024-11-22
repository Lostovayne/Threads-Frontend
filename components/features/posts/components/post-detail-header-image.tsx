import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FC } from "react";

interface PostDetailProfileImageProps {
	urlProfile: string;
	size?: number;
}

export const PostDetailHeaderImage: FC<PostDetailProfileImageProps> = ({ urlProfile, size = 9, }) => {

	return (
		<figure className="flex justify-center mt-1">
			<Avatar className={`h-${size} w-${size}`}>
				<AvatarImage
					src={urlProfile}
					className="object-cover object-top shadow"
				/>
				<AvatarFallback>...</AvatarFallback>
			</Avatar>
		</figure>
	);
};
