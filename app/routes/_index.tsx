import type { Route } from "./+types/_index";
import { Link } from "react-router";
import Dog from "~/images/a.jpg?jsx";
import Mountain from "~/images/b.jpg?jsx";
import Camera from "~/images/c.jpg?jsx";
import Green from "~/images/d.jpg?jsx";
import Tree from "~/images/e.jpg?jsx";
import Bird from "~/images/f.jpg?w=600&h=400&format=webp&jsx";
import LogoDark from "~/images/logo-dark.svg?jsx";

export default function Home(props: Route.ComponentProps) {
  return (
    <div className="px-20 py-10">
      <div className="flex items-center justify-between">
        <h1 className="mt-5 text-4xl font-semibold">
          Image Optimization with vite-imagetools
        </h1>
        <Link
          to="https://github.com/vfshera/react-image-jsx/blob/main/README.md"
          className="text-xl text-blue-200"
        >
          [Docs]
        </Link>
      </div>
      <div className="mt-10 flex flex-wrap gap-10">
        <div>
          <Green />
        </div>
        <div>
          <Camera />
        </div>
        <div>
          <LogoDark />
        </div>
        <div>
          <Bird />
        </div>{" "}
        <div>
          <Mountain />
        </div>
        <div>
          <Dog />
        </div>
        <div>
          <Tree />
        </div>
      </div>
    </div>
  );
}
