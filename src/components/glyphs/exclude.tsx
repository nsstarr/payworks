import { FC } from "react";
import { SVG } from "../svg";
import { IGlyphProps } from "./types";

export const IconExclude: FC<IGlyphProps> = ({
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
      d="M5 19V5H12V12H19V13C19.7 13 20.37 13.13 21 13.35V9L15 3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H13.35C13.13 20.37 13 19.7 13 19H5ZM14 4.5L19.5 10H14V4.5ZM20.41 19L22.54 21.12L21.12 22.54L19 20.41L16.88 22.54L15.47 21.12L17.59 19L15.47 16.88L16.88 15.47L19 17.59L21.12 15.47L22.54 16.88L20.41 19Z"
      fill="#F4F5F7"
    />
  </SVG>
);
