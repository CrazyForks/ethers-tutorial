/*---------------------------------------------------------------------------------------------
 *  Copyright (c) xiejiahe xjh22222228/ethers-tutorial. All rights reserved.
 *  Licensed under the MIT License. See License in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import React from "react";
import { ethers } from "ethers";
import { Button, notification } from "antd";

const Wallet: React.FC = () => {
  function createWallet() {
    const wallet2 = new ethers.Wallet(
      "94e4e351a390d675b210a2e929fa57362682d9c4ffa6464c7e67f173c90cc7ba"
    );
    console.log(wallet2.address);

    const wallet = ethers.Wallet.createRandom();
    notification.success({
      duration: 0,
      message: "创建随机钱包",
      description: (
        <>
          <div>钱包地址：{wallet.address}</div>
          <div>钱包私钥：{wallet.privateKey}</div>
          <div>钱包公钥：{wallet.publicKey}</div>
          <div>钱包助记词：{wallet.mnemonic?.phrase || "无"}</div>
        </>
      ),
    });
  }

  return (
    <Button type="primary" onClick={createWallet}>
      创建随机钱包
    </Button>
  );
};

export default Wallet;
