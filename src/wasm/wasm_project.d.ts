export {};

// 扩展模块定义（匹配导入路径）
declare module "./wasm_project.js" {
  // 定义 WASM 实例的类型（根据实际导出的函数补充）
  export interface WasmInstance {
    // 示例：假设导出了压缩图片的函数

    ImageCompressor: IImageCompressor;
    // 其他导出的函数/属性...
  }
  
  export interface Result {
    success: boolean;
    size: number;
    error: string;
    /**
     * 结果图片数据
     */
    data: Uint8Array;
    format: string;
  }

  interface IImageCompressor {
    hi: () => string;
    /**
     * 图片压缩
     * @param inputData 图片数据
     * @param quality 压缩级别，png为无损压缩
     * @param format 图片格式
     * @returns
     */
    compress: (
      inputData: Uint8Array,
      quality: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
      format: "png" | "jpg" | "jpeg"
    ) => Result;

    /**
     * 图片裁剪
     * @param inputData 图片数据
     * @param top 
     * @param left 
     * @param height 
     * @param width 
     * @returns 
     */
    crop: (
      inputData: Uint8Array,
      top: number,
      left: number,
      height: number,
      width: number
    ) => Result;
  }

  // 定义初始化选项的类型
  type WasmOptions = {
    locateFile?: (file: string) => string;
    onRuntimeInitialized?: () => void;
    // 其他可能的配置项...
  };

  // 工厂函数类型（返回实例的 Promise）
  const factory: (options?: WasmOptions) => Promise<WasmInstance>;

  export default factory;
}
