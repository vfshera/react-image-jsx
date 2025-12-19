import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { imagePlugin } from "./vite-plugin-jsx-image";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [imagePlugin(), tailwindcss(), reactRouter(), tsconfigPaths()],
});
