import { decodeBase64 } from "ethers";

const value = decodeBase64("SGVsbG8gV29ybGQ=");
console.log(value);
// Uint8Array(11) [72, 101, 108, 108, 111,  32,  87, 111, 114, 108, 100]
