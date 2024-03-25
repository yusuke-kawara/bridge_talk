/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/views/**/*.{html,erb,html.erb}",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    // 他にもスキャンしたいファイルやディレクトリがあれば追加
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
