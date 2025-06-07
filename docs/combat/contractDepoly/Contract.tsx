import React, { useState } from "react";
import { ethers } from "ethers";
import {
  Button,
  Form,
  Input,
  Card,
  Typography,
  Space,
  Alert,
  InputNumber,
  notification,
} from "antd";
import { WalletOutlined, SendOutlined, LinkOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

// 声明 window.ethereum 类型
declare global {
  interface Window {
    ethereum: any;
  }
}

interface TransferForm {
  recipient: string;
  amount: string;
}

const DApp: React.FC = () => {
  const [account, setAccount] = useState<string>("");
  const [balance, setBalance] = useState<string>("");
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [txHash, setTxHash] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [form] = Form.useForm<TransferForm>();

  // 连接钱包
  const connectWallet = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.BrowserProvider(window.ethereum);
        setProvider(provider);

        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const account = accounts[0];
        setAccount(account);

        // 获取余额

        const balance = await provider.getBalance(account);
        setBalance(ethers.formatEther(balance));

        // 获取 signer
        const signer = await provider.getSigner();

        setSigner(signer);

        return;
      }

      notification.error({
        message: "错误",
        description: "请安装 MetaMask!",
      });
    } catch (error) {
      notification.error({
        message: "连接钱包失败",
        description: error.message,
      });
      console.error("连接钱包失败:", error);
    }
  };

  // 发送交易
  const sendTransaction = async (values: TransferForm) => {
    if (!signer) {
      notification.error({
        message: "错误",
        description: "请先连接钱包",
      });
      return;
    }

    if (ethers.isAddress(values.recipient) === false) {
      notification.error({
        message: "不是一个有效的以太坊地址",
      });
      return;
    }

    try {
      setIsLoading(true);
      const tx = await signer.sendTransaction({
        to: values.recipient,
        value: ethers.parseEther(String(values.amount)),
      });

      setTxHash(tx.hash);
      notification.success({
        message: `交易已发送: ${tx.hash}`,
      });

      // 等待交易确认
      await tx.wait();
      notification.success({
        message: `交易已确认`,
      });

      // 更新余额
      const newBalance = await provider?.getBalance(account);
      if (newBalance) {
        setBalance(ethers.formatEther(newBalance));
      }
    } catch (error) {
      console.error("转账失败:", error);
      notification.error({
        message: "转账失败",
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Card>
        <Title level={2}>简易 dApp 示例</Title>

        {!account ? (
          <Button
            type="primary"
            icon={<WalletOutlined />}
            onClick={connectWallet}
            size="large"
          >
            连接钱包
          </Button>
        ) : (
          <Space direction="vertical" style={{ width: "100%" }}>
            <Alert
              message="钱包已连接"
              description={
                <>
                  <Text strong>当前账户:</Text> {account}
                  <br />
                  <Text strong>账户余额:</Text> {balance} ETH
                </>
              }
              type="success"
              showIcon
            />

            <Card title="发送 ETH" size="small">
              <Form form={form} onFinish={sendTransaction} layout="vertical">
                <Form.Item
                  initialValue="0x817C6Ef5f2EF3CC56ce87942BF7ed74138EC284C"
                  name="recipient"
                  label="接收地址"
                  rules={[{ required: true, message: "请输入接收地址" }]}
                >
                  <Input placeholder="0x..." disabled={isLoading} />
                </Form.Item>

                <Form.Item
                  initialValue={0.00001}
                  name="amount"
                  label="发送数量 (ETH)"
                  rules={[{ required: true, message: "请输入发送数量" }]}
                >
                  <InputNumber
                    style={{ width: "100%" }}
                    placeholder="请输入要转账的地址"
                    min={0.00001}
                    max={1}
                    step={0.00001}
                    disabled={isLoading}
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    icon={<SendOutlined />}
                    loading={isLoading}
                    block
                  >
                    发送
                  </Button>
                </Form.Item>
              </Form>
            </Card>

            {txHash && (
              <Alert
                message="交易已发送"
                description={
                  <Space>
                    <Text>交易哈希: {txHash}</Text>
                    <div>
                      <Button
                        type="link"
                        icon={<LinkOutlined />}
                        href={`https://sepolia.etherscan.io/tx/${txHash}`}
                        target="_blank"
                      >
                        在 Etherscan 上查看
                      </Button>
                      或
                      <Button
                        type="link"
                        icon={<LinkOutlined />}
                        href={`https://explorer.buildbear.io/outstanding-juggernaut-05cd9cc5/tx/${txHash}`}
                        target="_blank"
                      >
                        在 buildbear 上查看
                      </Button>
                    </div>
                  </Space>
                }
                type="info"
                showIcon
              />
            )}
          </Space>
        )}
      </Card>
    </div>
  );
};

export default DApp;
