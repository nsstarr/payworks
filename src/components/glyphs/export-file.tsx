import { FC } from "react";
import { SVG } from "../svg";
import { IGlyphProps } from "./types";

export const ExportFile: FC<IGlyphProps> = ({
  className,
  fill = "none",
  title,
  height = "25px",
  width = "24px",
}: IGlyphProps) => (
  <SVG
    className={className}
    viewBox="0 0 25 24"
    height={height}
    width={width}
    fill={fill}
    title={title}
  >
    <path
      d="M19.5 9.99999V3.99999C19.5 3.39999 19.1 2.99999 18.5 2.99999H10.5M10.5 2.99999C10.3528 2.9878 10.2047 3.00838 10.0663 3.06025C9.92802 3.11213 9.80291 3.194 9.7 3.29999L5.7 7.29999C5.57018 7.47309 5.5 7.68362 5.5 7.89999V20C5.5 20.6 5.9 21 6.5 21H18.5C19.1 21 19.5 20.6 19.5 20V18M10.5 2.99999V6.99999C10.5 7.59999 10.1 7.99999 9.5 7.99999H5.5M10.5 14H19.5M19.5 14L17.5 12M19.5 14L17.5 16"
      stroke="#606060"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SVG>
);
