import { Blog } from "./component/blog";
import { Carousel } from "./component/carousel";
import { Trending } from "./component/trending";

export default function Home() {
  return (
    <div className="w-full">
      <Carousel />
      <Trending />
      <Blog />
    </div>
  );
}
