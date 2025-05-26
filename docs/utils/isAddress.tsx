import { ethers } from "ethers";

const isAddress = ethers.isAddress(
  "0x2cFC43B94126595E8B636fed9fB585fF220Bc97d"
);
console.log("0x2cFC43B94126595E8B636fed9fB585fF220Bc97d", isAddress);

const isAddress2 = ethers.isAddress("0x");
console.log("0x", isAddress2);
