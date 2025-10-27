import { WasmInstance } from "./wasm_project.d.ts";

export function initWasm(): Promise<WasmInstance>;
export function downloadImage(data: Uint8Array, extType: string): void;
