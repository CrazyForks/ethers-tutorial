/*---------------------------------------------------------------------------------------------
 *  Copyright (c) xiejiahe xjh22222228/ethers-tutorial. All rights reserved.
 *  Licensed under the MIT License. See License in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import React from "react";
import { ethers } from "ethers";
import { Button, notification } from "antd";

const provider = new ethers.JsonRpcProvider(
  "https://rpc.buildbear.io/outstanding-juggernaut-05cd9cc5"
);

const Contract: React.FC = () => {
  const [loading, setLoading] = React.useState(false);

  // 查询合约信息
  async function getContract() {
    notification.destroy();
    setLoading(true);
    try {
      // 编写交互ABI，后面会介绍ABI是什么
      const abi = [
        "function balanceOf(address owner) view returns (uint256)",
        "function decimals() view returns (uint8)",
        "function symbol() view returns (string)",
      ];
      // 创建代币合约实例
      const contract = new ethers.Contract(
        "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
        abi,
        provider
      );

      // 调用 abi 编写的方法
      const balance = await contract.balanceOf(
        "0x2cFC43B94126595E8B636fed9fB585fF220Bc97d"
      );
      const symbol = await contract.symbol();
      const decimals = await contract.decimals();
      notification.success({
        duration: 0,
        message: "合约信息：",
        description: (
          <>
            <div>余额(wei)：{balance}</div>
            <div>代币符号：{symbol}</div>
            <div>代币小数位数：{decimals}</div>
          </>
        ),
      });
    } catch (error: any) {
      notification.error({
        message: "Error",
        description: error.message,
      });
    }
    setLoading(false);
  }

  return (
    <Button type="primary" onClick={getContract} loading={loading}>
      查询合约信息 Contract
    </Button>
  );
};

export default Contract;
