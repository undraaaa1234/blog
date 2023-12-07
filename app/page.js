import { Carousel } from "./component/carousel";
import { Posts } from "./component/posts";
import { Trending } from "./component/trending";

export default function Home() {
  return (
    <div className="w-full">
      <Carousel />
      <Trending />
      <Posts />
    </div>
  );
}
