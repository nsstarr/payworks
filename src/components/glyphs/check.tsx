import { FC } from "react";
import { SVG } from "../svg";
import { IGlyphProps } from "./types";

export const Check: FC<IGlyphProps> = ({
  className,
  fill = "currentColor",
  title,
  height = "24px",
  width = "24px",
}: IGlyphProps) => (
  <SVG
    className={className}
    viewBox="0 0 24 24"
    height={height}
    width={width}
    fill={fill}
    title={title}
  >
    <path
      d="M9.54998 18L3.84998 12.3L5.27498 10.875L9.54998 15.15L18.725 5.97501L20.15 7.40001L9.54998 18Z"
      fill="#EAECF2"
    />
  </SVG>
);
