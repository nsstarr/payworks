import { FC } from "react";
import { SVG } from "../svg";
import { IGlyphProps } from "./types";

export const ArrowDown: FC<IGlyphProps> = ({
  className,
  fill = "currentColor",
  title,
  height = "18px",
  width = "18px",
}: IGlyphProps) => (
  <SVG
    className={className}
    viewBox="0 0 18 18"
    height={height}
    width={width}
    fill={fill}
    title={title}
  >
    <path d="M5.25 7.5L9 11.25L12.75 7.5H5.25Z" fill="#1D1B20" />
  </SVG>
);
