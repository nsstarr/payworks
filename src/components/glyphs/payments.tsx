import { FC } from "react";
import { SVG } from "../svg";
import { IGlyphProps } from "./types";

export const IconPayments: FC<IGlyphProps> = ({
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
      d="M22 4H2V20H22V4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z"
      fill="#F4F5F7"
    />
  </SVG>
);
