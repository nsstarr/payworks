import { FC, ReactNode } from "react";

interface SVGProps {
  className?: string;
  children: ReactNode;
  fill: string;
  height: string;
  title: string;
  viewBox: string;
  width: string;
}

export const SVG: FC<SVGProps> = ({
  children,
  className,
  fill,
  height,
  title,
  viewBox,
  width,
}: SVGProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    viewBox={viewBox}
    width={width}
    fill={fill}
  >
    <title>{title}</title>
    {children}
  </svg>
);
