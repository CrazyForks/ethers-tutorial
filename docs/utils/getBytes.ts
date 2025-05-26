import { getBytes } from "ethers";

const value = getBytes("0x2cFC43B94126595E8B636fed9fB585fF220Bc97d");
console.log(value);
// Uint8Array(20) [44, 252,67,185,65,38,89,94,139,99,111,237,159,181,133,255,34,11,201, 125]

const value2 = getBytes(new Uint8Array([0x13, 0x37]));
console.log(value2); // Uint8Array(2) [19, 55]

try {
  getBytes("gg", "hello");
} catch (error: any) {
  console.log(error.argument); // hello
}
