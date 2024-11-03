import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FC } from "react";

interface PostDetailProfileImageProps {
	urlProfile: string;
	size?: number;
}

export const PostDetailProfileImage: FC<PostDetailProfileImageProps> = ({ urlProfile, size = 9, }) => {
	
	return (
		<figure className="flex justify-center">
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
