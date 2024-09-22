import Content from "./content/content";
import Description from "./description/description";
import FFP from "./ffp/ffp";
import Swipers from "./swiper/swipers";
import YoutubePlayBtn from "./youtube play btn/youtube play btn";
import Features from "./spac/features";

export default function Product() {
  return (
    <div>
      <Swipers />
      <Content />
      <Description />
      {/* <YoutubePlayBtn />
      <FFP />
      <Features /> */}
    </div>
  );
}
