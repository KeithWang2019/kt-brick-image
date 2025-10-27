// 导入 wasm-bindgen 生成的胶水代码
import MyModule from "./wasm_project.js";
import wasmUrl from "./wasm_project.wasm.gz";

// 初始化函数（加载并实例化 Wasm）
export async function initWasm() {
  const instance = await MyModule({
    locateFile: (file) => wasmUrl, // 根据构建工具配置调整路径
    onRuntimeInitialized: () => {
      console.log("模块初始化完成");
    },
  });
  return instance;
}

export function downloadImage(data, extType) {
  if (!data) return;

  const blob = new Blob([data], { type: "image/" + extType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "copy_" + Date.now() + "." + extType;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
