# Brick Image Processing (Cropping & Compression) Tool

<img src="https://brick.cangsg.com/logo.png" alt="" width="120" height="120">

## Lightweight Web Image Processor Technical Solution

## Core Positioning
A lightweight web-based image processing tool built with WebAssembly + OpenCV. It focuses on efficient processing of PNG/JPG formats, delivering professional-grade features in an ultra-compact size of 793KB. No client-side installation is required, and it runs directly in the browser.

## Core Features

1. **Format Compression**
  - PNG: Lossless compression (preserves image quality while significantly reducing file size)
  - JPG: Quality-controllable compression (supports custom quality parameters to balance file size and clarity)

2. **Precise Cropping**
  - Supports cropping PNG/JPG images by dimensions or aspect ratio.
  - Ensures smooth edge processing without distortion.

3. **Format Compression**
  - PNG: Lossless compression (preserves image quality while significantly reducing file size)
  - JPG: Quality-controllable compression (supports custom quality parameters to balance file size and clarity)

4. **Precise Cropping**
  - Supports cropping PNG/JPG images by dimensions or aspect ratio.
  - Ensures smooth edge processing without distortion.

## Technical Advantages

- **Ultra-lightweight**：With a size of only 793KB, its loading speed is over 60% faster than similar tools, saving bandwidth and device resources.

- **High compatibility**：Leverages the cross-platform nature of WebAssembly to support major browsers (Chrome/Edge/Safari, etc.) and mobile devices.

- **Source-level optimization**：Customizes and trims the core OpenCV algorithms, removes redundant modules, and retains only core image processing logic to balance efficiency and size.

## Application Scenarios

- Content platforms: Integrate into CMS or e-commerce backends to provide users with fast image preprocessing.

- Creation tools: Embed as a plugin in web-based design applications to simplify compression/cropping workflows.

- Individual users: Process images instantly on the web to reduce storage and transmission costs.

It can be directly integrated into existing web systems and provides JavaScript calling interfaces to quickly enable image processing capabilities.

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
