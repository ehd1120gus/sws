import PostBox from "./components/post-box";
import Profile from "./components/profile";

export default function Home() {
  return (
    <div className="mx-8 my-4 flex flex-col items-center gap-4">
      <Profile />
      <PostBox />
    </div>
  );
}
