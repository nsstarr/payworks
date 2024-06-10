import { FC } from "react";
import { SVG } from "../svg";
import { IGlyphProps } from "./types";

export const IconSettings: FC<IGlyphProps> = ({
  className,
  fill = "currentColor",
  title,
  height = "20px",
  width = "20px",
}: IGlyphProps) => (
  <SVG
    className={className}
    viewBox="0 0 20 20"
    height={height}
    width={width}
    fill={fill}
    title={title}
  >
    <path
      d="M18 12H15.82C15.65 12.7 15.38 13.35 15.01 13.93L16.55 15.47L14.45 17.57L12.91 16.03C12.33 16.39 11.68 16.66 11 16.82V19H8V16.82C7.32 16.66 6.67 16.39 6.09 16.03L4.55 17.57L2.43 15.45L3.97 13.91C3.61 13.33 3.34 12.68 3.18 12H1V9.03H3.17C3.33 8.33 3.61 7.68 3.97 7.09L2.43 5.55L4.53 3.45L6.07 4.99C6.65 4.62 7.31 4.35 8 4.18V2H11V4.18C11.68 4.34 12.33 4.61 12.91 4.97L14.45 3.43L16.57 5.55L15.03 7.09C15.39 7.68 15.67 8.33 15.83 9.03H18V12ZM9.5 13.5C11.16 13.5 12.5 12.16 12.5 10.5C12.5 8.84 11.16 7.5 9.5 7.5C7.84 7.5 6.5 8.84 6.5 10.5C6.5 12.16 7.84 13.5 9.5 13.5Z"
      fill="#7B809F"
    />
  </SVG>
);
