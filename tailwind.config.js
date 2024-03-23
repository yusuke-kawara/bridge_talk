/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/views/**/*.{html,html.erb}", // Rails views ディレクトリ内のファイル
    "./app/javascript/**/*.js", // JavaScriptファイルのパス
    // 必要に応じて他のディレクトリやファイルタイプを追加
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
