import { zeroPadValue } from "ethers";

const value = zeroPadValue("0x592fa7", 10);
console.log(value); // 0x00000000000000592fa7

const value2 = zeroPadValue("0x592fa7", 6);
console.log(value2); // 0x000000592fa7
