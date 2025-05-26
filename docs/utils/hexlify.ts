import { hexlify } from "ethers";

const value = hexlify("0x592fa7");
console.log(value); // 0x592fa7

const value2 = hexlify(new Uint8Array([89, 47, 167]));
console.log(value2); // 0x592fa7
