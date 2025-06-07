import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("XiejiaheModule", (m) => {
  const initialSupply = m.getParameter("initialSupply", 1000000);
  const token = m.contract("XJHToken", [initialSupply]);

  return { token };
});
