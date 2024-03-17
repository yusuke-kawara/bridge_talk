import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
  input: "app/javascript/application.js",
  output: {
    file: "app/assets/builds/application.js",
    format: "esm",
    inlineDynamicImports: true,
    sourcemap: true,
  },
  plugins: [
    resolve(),
    postcss({
      plugins: [tailwindcss, autoprefixer],
      extract: true, // CSSファイルとして外部に出力。指定したパスにCSSを出力する場合はパスを設定します。
    }),
    // 他のプラグインがあればここに追加
  ],
};
