import { toUtf8Bytes } from "ethers";

const value = toUtf8Bytes("hello world");
console.log(value);
// Uint8Array(11) [104,101,108,108,111,32,119,111,114,108,100]

const value2 = toUtf8Bytes("\u00F1");
const value3 = toUtf8Bytes("\u006E\u0303");
console.log(value2); // Uint8Array(2) [ 195, 177 ]
console.log(value3); // Uint8Array(3) [ 110, 204, 131 ]

// 使用 NFC 规范化，这使得他们相等
console.log(
  toUtf8Bytes("\u00F1", "NFC").toString() ===
    toUtf8Bytes("\u006E\u0303", "NFC").toString()
); // true
