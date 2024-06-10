import { FC } from "react";
import { SVG } from "../svg";
import { IGlyphProps } from "./types";

export const IconHelpdesk: FC<IGlyphProps> = ({
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
      d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z"
      fill="#7B809F"
    />
  </SVG>
);
