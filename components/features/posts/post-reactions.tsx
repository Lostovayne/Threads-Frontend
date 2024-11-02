import { FC, ReactElement } from 'react'
import { Button } from '@/components/ui/button'
import { Heart, MessageCircle, Repeat2, Share2 } from 'lucide-react'


interface PostReactionsProps {
	likes?: number
	comments?: number
	reposts?: number
	shares?: number
}

export const PostReactions: FC<PostReactionsProps> = ({
	likes = 0,
	comments = 0,
	reposts = 0,
	shares = 0
}): ReactElement => {

	return (
		<div className="flex items-center mt-2">
			<Button variant="ghost" size="sm" className="flex items-center gap-2 px-0">
				<Heart className="h-4 w-4" />
				<span>{likes}</span>
			</Button>
			<Button variant="ghost" size="sm" className="flex items-center gap-2">
				<MessageCircle className="h-4 w-4" />
				<span>{comments}</span>
			</Button>
			<Button variant="ghost" size="sm" className="flex items-center gap-2">
				<Repeat2 className="h-4 w-4" />
				<span>{reposts}</span>
			</Button>
			<Button variant="ghost" size="sm" className="flex items-center gap-2">
				<Share2 className="h-4 w-4" />
				<span>{shares}</span>
			</Button>
		</div>
	)
}
