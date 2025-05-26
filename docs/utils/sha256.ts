import { sha256, toUtf8Bytes } from "ethers";

const value = sha256(toUtf8Bytes("Hello World"));
console.log(value); // 0xa591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e

const value2 = sha256(new Uint8Array([0x13, 0x37]));
console.log(value2); // 0x158760c856e5ea1ba97e2e2a456736c4bf30d964559afa6d748cf05694a636ff
