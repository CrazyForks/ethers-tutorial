import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("Contract", function () {
  async function deployContractFixture() {
    const [owner, otherAccount] = await hre.ethers.getSigners();

    // 部署要测试的合约（假设Contract.sol有一个带有初始值的构造函数）
    const Contract = await hre.ethers.getContractFactory("Contract");
    const contract = await Contract.deploy(42); // 假设构造函数接收初始值参数

    return { contract, owner, otherAccount };
  }
});
