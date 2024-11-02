import Image from "next/image"
import { FC } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal } from "lucide-react"
import { PostView } from "@/interfaces/post/post-view.interface"
import { Format } from "@/lib/format"
import { cn } from "@/lib/utils"


export const Post: FC<PostView> = ({
	urlProfile,
	name,
	date,
	description,
	media = [],
}) => {
	return (
		<>
			<div className="min-w-0 overflow-hidden break-words pt-1">
				<PostProfileImage urlProfile={urlProfile} />
			</div>

			<div className="overflow-hidden break-words min-w-0">
				<div className="flex items-center justify-between">
					<PostHeader name={name} date={date} />
					<MoreHorizontal className="flex cursor-pointer h-5" />
				</div>

				<PostDescription description={description} />

				<PostMedia media={media} />


			</div>
		</>
	)
}

interface PostProfileImageProps {
	urlProfile: string
	size?: number
}

const PostProfileImage: FC<PostProfileImageProps> = ({ urlProfile, size = 10 }) => {
	return (
		<figure className="flex justify-center">
			<Avatar className={`h-${size} w-${size}`}>
				<AvatarImage src={urlProfile} className="" />
				<AvatarFallback>...</AvatarFallback>
			</Avatar>
		</figure>
	)
}

interface PostHeaderProps {
	name: string
	date: string
}

const PostHeader: FC<PostHeaderProps> = ({ name, date }) => {
	return (
		<div className="flex gap-2">
			<span className="font-bold">{name}</span>
			<span className="text-gray-500">{date}</span>
		</div>
	)
}


const PostDescription: FC<{ description: string }> = ({ description }) => {
	const descriptionSplit = Format.splitSentenceByHashTag(description)

	return (
		<p className="mt-1 text-sm">
			{
				descriptionSplit.map((sentence, index) => (
					<span
						key={index}
						className={cn(
							['#', '@'].some(word => sentence.startsWith(word)) && 'text-blue-500',
						)}
					>{sentence} </span>
				))
			}
		</p>
	)
}

interface PostMediaProps {
	media?: string[]
}

const PostMedia: React.FC<PostMediaProps> = ({ media = [] }) => {
	return (
		<div className="mt-2 rounded-lg overflow-hidden">
			<Image
				src={media[0]}
				alt="Post image"
				width={600}
				height={400}
				className="w-full object-cover max-h-52"
			/>
		</div>
	)
}