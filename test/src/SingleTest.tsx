// @ts-ignore
import { Slider } from "well-rounded-ui";

export default function SingleTest() {
  return (
    <div className="p-3">
      <Slider
        height={400}
        width={600}
        delay={3000}
        items={[
          <img src="https://placehold.jp/24/0FC2C0/ffffff/600x400.png?text=1" />,
          <img src="https://placehold.jp/24/0CABA8/ffffff/600x400.png?text=2" />,
          <img src="https://placehold.jp/24/008F8C/ffffff/600x400.png?text=3" />,
          <img src="https://placehold.jp/24/015958/ffffff/600x400.png?text=4" />,
          <img src="https://placehold.jp/24/023535/ffffff/600x400.png?text=5" />
        ]}
      />
    </div>
  );
}
