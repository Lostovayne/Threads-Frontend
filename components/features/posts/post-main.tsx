import { Card, CardContent } from "@/components/ui/card"
import { Post } from "./post"
import { PostReactions } from "./post-reactions"
import { FC } from "react"
import { PostView } from "@/interfaces/post/post-view.interface"


export const PostMain: FC<PostView> = ({
	id,
	urlProfile,
	name,
	date,
	description,
	media = [],
	reactions = {
		likes: 0,
		comments: 0,
		shares: 0
	}
}) => {
	return (
		<Card className="max-w-xl bg-card border-0 border-b-2 border-background-500 sm:border sm:border-background-500 text-foreground ">
			<CardContent className="p-0 m-0 px-0 grid grid-cols-[55px_1fr] gap-x-1">
				<Post
					id={id}
					urlProfile={urlProfile}
					name={name}
					date={date}
					description={description}
					media={media}
				/>

				<div className="col-start-2">
					<PostReactions
						likes={reactions.likes}
						comments={reactions.comments}
						reposts={reactions.reposts}
						shares={reactions.shares}
					/>
				</div>
			</CardContent>
		</Card>

	)
}
