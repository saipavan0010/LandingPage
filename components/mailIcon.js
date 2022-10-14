import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Mail = (props) => (
  <Svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fill="none"
      stroke="rgb(154,85,221)"
      strokeWidth={2}
      d="M1,4 L23,4 L23,20 L1,20 L1,4 Z M1,5 L12,13.5 L23,5"
    />
  </Svg>
);

export default Mail;
