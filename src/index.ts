// 导入 wasm-bindgen 生成的胶水代码
import MyModule, { WasmInstance } from "./wasm/wasm_project";
const wasmUrl = new URL("./wasm/wasm_project.wasm.gz", import.meta.url);

// 初始化函数（加载并实例化 Wasm）
export async function initWasm(): Promise<WasmInstance> {
  const bytes = await loadAndGunzip(wasmUrl.href);
  const instance = await MyModule({
    locateFile: (file) => bytes, // 根据构建工具配置调整路径
    onRuntimeInitialized: () => {
      console.log("模块初始化完成");
    },
  });
  return instance;
}

export function downloadImage(data: Uint8Array<ArrayBuffer>, extType: string): void {
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

async function gunzip(gzippedBuffer) {
  // 将 ArrayBuffer 转换为 Uint8Array
  const uint8Array = new Uint8Array(gzippedBuffer);

  // 创建 GZIP 解压流
  const decompressionStream = new DecompressionStream("gzip");

  // 将二进制数据通过流解压
  const readableStream = new ReadableStream({
    start(controller) {
      controller.enqueue(uint8Array);
      controller.close();
    },
  }).pipeThrough(decompressionStream);

  // 收集解压后的结果
  const reader = readableStream.getReader();
  const chunks = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
  }

  // 合并所有 chunk 为一个 ArrayBuffer
  const totalLength = chunks.reduce((acc, chunk) => acc + chunk.length, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const chunk of chunks) {
    result.set(chunk, offset);
    offset += chunk.length;
  }

  return result.buffer;
}

// 使用示例：从网络加载 .gz 文件并解压
async function loadAndGunzip(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    // 获取 GZIP 二进制数据
    const gzippedBuffer = await response.arrayBuffer();

    // 解压
    const unzippedBuffer = await gunzip(gzippedBuffer);

    // return unzippedBuffer;

    return bufferToUrl(unzippedBuffer, "application/wasm");
  } catch (err) {
    console.error("解压失败:", err);
  }
}

function bufferToUrl(buffer, mimeType) {
  const blob = new Blob([buffer], { type: mimeType });
  return URL.createObjectURL(blob);
}
