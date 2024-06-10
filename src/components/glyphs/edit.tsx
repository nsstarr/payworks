import { FC } from "react";
import { SVG } from "../svg";
import { IGlyphProps } from "./types";

export const IconEdit: FC<IGlyphProps> = ({
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
      d="M5.5 19H6.925L16.7 9.225L15.275 7.8L5.5 17.575V19ZM3.5 21V16.75L16.7 3.575C16.9 3.39167 17.121 3.25 17.363 3.15C17.605 3.05 17.859 3 18.125 3C18.391 3 18.6493 3.05 18.9 3.15C19.1507 3.25 19.3673 3.4 19.55 3.6L20.925 5C21.125 5.18333 21.271 5.4 21.363 5.65C21.455 5.9 21.5007 6.15 21.5 6.4C21.5 6.66667 21.4543 6.921 21.363 7.163C21.2717 7.405 21.1257 7.62567 20.925 7.825L7.75 21H3.5ZM15.975 8.525L15.275 7.8L16.7 9.225L15.975 8.525Z"
      fill="#606060"
    />
  </SVG>
);
