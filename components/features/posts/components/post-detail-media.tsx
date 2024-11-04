interface PostDetailMediaProps {
	media: string[];
}

export const PostDetailMedia: React.FC<PostDetailMediaProps> = ({ media }) => {
	// TODO: mostrar múltiples imágenes

	return (
		<div className="relative mt-2 flex h-96 max-w-96 overflow-hidden">
			<div className="">
				<img
					src={media[0]}
					alt="Post image"
					className="aspect-auto size-full rounded-md border border-zinc-300/50 object-fill drop-shadow"
				/>
			</div>
		</div>
	);
};
