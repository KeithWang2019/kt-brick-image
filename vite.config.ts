import { defineConfig } from "vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  build: {
    sourcemap: true, // 或具体模式字符串，如 'inline'、'hidden' 等
    outDir: "dist", // 输出目录
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // 入口文件
      name: "KtBrickImage", // 全局变量名
      fileName: (format) => `kt-brick-image.${format}.js`, // 输出文件名
    }
  }
});
