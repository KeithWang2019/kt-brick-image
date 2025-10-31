# 积木图片处理（裁剪、压缩）工具

<img src="https://brick.cangsg.com/logo.png" alt="示意图" width="120" height="120"> 

 [English](./README.en.md "English")

## 轻量 Web 图像处理器技术方案

## 核心定位

基于 WebAssembly+OpenCV 打造的轻量级 Web 图像处理工具，聚焦 PNG/JPG 高效处理，以 793KB 极致体积实现专业级功能，无需客户端安装，浏览器直接运行。

## 核心功能

1. **格式压缩**

  - PNG：无损压缩（保留画质，显著缩减体积）

  - JPG：质量可控压缩（支持自定义画质参数，平衡体积与清晰度）

2. **精准裁剪**
  - 支持 PNG/JPG 格式图片按尺寸、比例裁剪，边缘处理平滑，无失真。

3. **格式压缩**
  - PNG：无损压缩（保留画质，显著缩减体积）

  - JPG：质量可控压缩（支持自定义画质参数，平衡体积与清晰度）

4. **精准裁剪**
  - 支持 PNG/JPG 格式图片按尺寸、比例裁剪，边缘处理平滑，无失真。

## 技术优势

- **超轻量**：仅 793KB 体积，加载速度比同类工具提升 60%+，节省带宽与设备资源

- **高兼容**：基于 WebAssembly 跨平台特性，适配主流浏览器（Chrome/Edge/ Safari 等）及移动端

- **源码级优化**：定制裁剪 OpenCV 核心算法，剔除冗余模块，保留图像处理核心逻辑，兼顾效率与体积

## 适用场景

- 内容平台：集成到 CMS、电商后台，为用户提供快速图片预处理

- 创作工具：作为插件嵌入设计类 Web 应用，简化压缩/裁剪流程

- 个人用户：网页端即时处理图片，节省存储/传输成本

可直接集成至现有 Web 系统，提供 JS 调用接口，快速赋能图像处理能力。

## Installing

### Package manager

Using npm:

```bash
$ npm install kt-brick-image
```

Using pnpm:

```bash
$ pnpm add kt-brick-image
```

```js
import { initWasm, downloadImage } from "kt-brick-image";

initWasm().then(async (intance) => {
  console.log(intance.ImageCompressor.hi());
  //   FileInput.addEventListener("change", (e) => {
  //      if (e.target.files.length > 0) {
  //       currentFile = e.target.files[0];
  //      }
  //   });
  const top = 0;
  const left = 0;
  const height = 120;
  const width = 120;

  const arrayBuffer = await currentFile.arrayBuffer();
  const uint8Array = new Uint8Array(arrayBuffer);
  const result = intance.ImageCompressor.crop(
    uint8Array,
    top,
    left,
    height,
    width
  );

  if (result.success) {
    downloadImage(result.data, result.format);
  }
});
```

## License

[MIT](LICENSE)
