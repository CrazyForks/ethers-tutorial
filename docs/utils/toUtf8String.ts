import { toUtf8String } from "ethers";

const value = toUtf8String("0x48656c6c6f");
console.log(value);
// hello

const value2 = toUtf8String(new Uint8Array([72, 101, 108, 108, 111]));
console.log(value2);
// hello

// 如果输入的字节数据包含无效的 UTF-8 编码，默认情况下 toUtf8String 会抛出错误。
// 可以通过提供 onError 函数来处理这些错误，例如忽略无效字节或替换为特定字符。
const value3 = toUtf8String(
  new Uint8Array([0xff, 0xff, 0x48, 0x65, 0x6c, 0x6c, 0x6f]),
  (reason, offset, bytes, output) => {
    console.log(reason, offset, bytes, output);
    // BAD_PREFIX, 0, Uint8Array(7)[255, 255,72,101,108,108,111], []
    return 1; // 跳过 1 个字节
  }
);
console.log(value3); // 输出: "Hello"（跳过了无效字节）
