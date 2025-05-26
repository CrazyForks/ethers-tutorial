import { randomBytes } from "ethers";

const value = randomBytes(10);
console.log(value);
// 每次执行结果都会不一样
// Uint8Array(10) [4, 199,  59, 204, 6, 199, 123, 137, 143, 155]
