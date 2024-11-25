interface PostDetailMediaProps {
	media: string[];
}

export const PostDetailMedia: React.FC<PostDetailMediaProps> = ({ media }) => {
	// TODO: mostrar múltiples imágenes
	if ( !media.length) return null;
	
	return (
		<div className="relative mt-2 flex h-auto  w-auto	 overflow-hidden">
			<div className="">
				<img
					src={media[0]}
					alt="Post image"
					className="max-w-md aspect-auto size-full rounded-md border border-zinc-300/50 object-fill drop-shadow"
				/>
			</div>
		</div>
	);
};
