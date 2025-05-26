import { keccak256, toUtf8Bytes } from "ethers";

const value = keccak256(toUtf8Bytes("Hello World"));
console.log(value); // 0x592fa743889fc7f92ac2a37bb1f5ba1daf2a5c84741ca0e0061d243a2e6707ba

const value2 = keccak256(new Uint8Array([0x13, 0x37]));
console.log(value2); // 0x2636a8beb2c41b8ccafa9a55a5a5e333892a83b491df3a67d2768946a9f9c6dc
