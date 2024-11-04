import { Card, CardContent } from "@/components/ui/card";
import { PostView } from "@/interfaces/post/post-view.interface";
import { FC } from "react";

import { PostDetail } from "./post-detail";
import { PostReactions } from "./post-reactions";

export const Post: FC<PostView> = (post) => {
  const { reactions, ...rest } = post;
  return (
    <Card className="border-none shadow-none">
      <CardContent className="grid grid-cols-[55px_1fr] gap-x-1 p-0">
        <PostDetail {...post} />
        <div className="col-start-2">
          <PostReactions {...reactions} />
        </div>
         dev
      </CardContent>
    </Card>

        <div className="grid grid-cols-6">
          <div className="col-span-5">
            <PostDescription description={description} />
            <PostMedia media={media} />
          </div>
        </div>
      </div>
    </>
  );
};

interface PostProfileImageProps {
  urlProfile: string;
  size?: number;
}

const PostProfileImage: FC<PostProfileImageProps> = ({
  urlProfile,
  size = 9,
}) => {
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

interface PostHeaderProps {
  name: string;
  date: string;
}

const PostHeader: FC<PostHeaderProps> = ({ name, date }) => {
  return (
    <div className="flex gap-2">
      <span className="font-bold">{name}</span>
      <span className="text-gray-500/8Adding corrections to the post0 text-xs font-medium md:text-sm">
        {date}
      </span>
    </div>
  );
};

const PostDescription: FC<{ description: string }> = ({ description }) => {
  const descriptionSplit = Format.splitSentenceByHashTag(description);

  return (
    <p className="text-md mt-1">
      {descriptionSplit.map((sentence, index) => (
        <span
          key={index}
          className={cn(
            ["#", "@"].some((word) => sentence.startsWith(word)) &&
              "font-bold text-blue-600 dark:text-blue-400",
            "whitespace-pre-wrap text-balance text-base font-medium text-zinc-700"
          )}
        >
          {sentence}
        </span>
      ))}
    </p>
  );
};

interface PostMediaProps {
  media?: string[];
}

const PostMedia: React.FC<PostMediaProps> = ({ media = [] }) => {
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
