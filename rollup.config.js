import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import path from "path";

export default {
  input: "app/javascript/application.js",
  output: {
    file: "app/assets/builds/application.js",
    format: "esm",
    sourcemap: true,
    inlineDynamicImports: true, // 動的インポートを単一ファイルにまとめる
  },
  plugins: [
    resolve(),
    postcss({
      plugins: [tailwindcss, autoprefixer],
      extract: path.resolve("app/assets/builds/application.css"), // CSSファイルの抽出先
    }),
  ],
};
