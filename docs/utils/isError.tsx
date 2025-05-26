import { ethers } from "ethers";

try {
  const provider = new ethers.JsonRpcProvider("");
  await provider.getBalance("0x");
} catch (error: any) {
  if (ethers.isError(error, "UNSUPPORTED_OPERATION")) {
    // code...
    console.log(error);
  }
}
