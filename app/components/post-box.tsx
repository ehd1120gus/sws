import Link from "next/link";
import { getSortedPostsData } from "./get-post";

type Post = {
  title: string;
  id: string;
  date: string;
  content: string;
  tags: string[];
};

interface PostProps {
  post: Post;
}

export function Post({ post }: PostProps) {
  const { title, id, date, content, tags } = post;
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(date));

  console.log(title, id, formattedDate, tags);

  return (
    <Link
      href={`/${id}`}
      className="flex w-full items-center rounded-xl border-t py-8 md:w-[600px]"
    >
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-sm text-slate-500">{formattedDate}</div>
        <div className="line-clamp-3">{content}</div>
        <div className="flex space-x-4">
          {tags.map((tag) => {
            return (
              <div
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
              >
                {tag}
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
}

export default function PostBox() {
  const posts = getSortedPostsData();
  return (
    <section className="flex flex-col items-center">
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </section>
  );
}
