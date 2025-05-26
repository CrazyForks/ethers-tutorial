import { isHexString } from "ethers";

// 有效的十六进制地址
console.log(isHexString("0x742d35Cc6634C0532925a3b844Bc454e4438f44e")); // true

// 有效的十六进制地址，并指定正确的字节长度 (地址是20字节)
console.log(isHexString("0x742d35Cc6634C0532925a3b844Bc454e4438f44e", 20)); // true

// 有效的十六进制字符串 (短)
console.log(isHexString("0x123aF")); // true

// 有效的十六进制字符串，并指定正确的字节长度
console.log(isHexString("0x123aFf", 3)); // true (3字节 = 6个十六进制字符)

// 无 "0x" 前缀
console.log(isHexString("742d35Cc6634C0532925a3b844Bc454e4438f44e")); // false

// 包含无效字符
console.log(isHexString("0x123GHI")); // false (G, H, I 不是有效的十六进制字符)

// 长度不匹配 (期望20字节，实际不是)
console.log(isHexString("0x123456", 20)); // false

// 奇数长度的十六进制字符 (不指定长度时是允许的，只要字符有效)
console.log(isHexString("0x123")); // true (因为 '1', '2', '3' 都是有效十六进制字符)

// 奇数长度的十六进制字符，但指定了字节长度，则会因长度不匹配而失败
console.log(isHexString("0x123", 2)); // false (期望2字节即4个字符，实际3个字符)

// 非字符串输入
console.log(isHexString(123)); // false
console.log(isHexString(null)); // false
console.log(isHexString(undefined)); // false
