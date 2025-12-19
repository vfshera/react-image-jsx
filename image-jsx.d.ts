declare module "*?jsx" {
  import type { FC } from "react";
  const Component: FC<
    | Omit<
        React.ImgHTMLAttributes<HTMLImageElement>,
        "src" | "width" | "height" | "srcSet"
      >
    | React.SVGProps<SVGSVGElement>
  >;

  export default Component;

  export const width: number;

  export const height: number;

  export const srcSet: string;
}
