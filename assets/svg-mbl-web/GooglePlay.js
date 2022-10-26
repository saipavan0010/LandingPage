import * as React from "react";
import Svg, { Image } from "react-native-svg";

const Googleplay = (props) => (
  <Svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width={160}
    height={54}
    viewBox="0 0 160 54"
    enableBackground="new 0 0 160 54"
    xmlSpace="preserve"
    {...props}
  >
    <Image
      id="image0"
      width={160}
      height={54}
      x={0}
      y={0}
      href="data:image/png;base64,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"
    />
  </Svg>
);

export default Googleplay;