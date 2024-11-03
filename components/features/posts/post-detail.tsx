import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PostView } from "@/interfaces/post/post-view.interface";
import { Format } from "@/lib/format";
import { cn } from "@/lib/utils";
import { FC } from "react";

import MoreIcon from "./icons/more";

export const PostDetail: FC<PostView> = (post) => {
  const {
    urlProfile,
    name,
    date,
    description,
    media,
  } = post
  return (
    <>
      <div className="overflow-hidden break-words pt-1">
        <PostProfileImage urlProfile={urlProfile} />
      </div>
      <div className="overflow-hidden break-words">
        <div className="flex items-center justify-between">
          <PostHeader name={name} date={date} />
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full [&_svg]:size-5"
          >
            <MoreIcon />
          </Button>
        </div>
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
      <span className="text-xs font-medium text-gray-500/80 md:text-sm">
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
