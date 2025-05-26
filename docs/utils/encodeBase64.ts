import { encodeBase64, toUtf8Bytes } from "ethers";

const value = encodeBase64(toUtf8Bytes("Hello World"));
console.log(value); // SGVsbG8gV29ybGQ=

const value2 = encodeBase64(new Uint8Array([0x13, 0x37]));
console.log(value2); // Ezc=
