import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";



const LockModule = buildModule("LockModule", (m) => {
 

  const lock = m.contract("MyToken", [10000000000], {
   
  });

  return { lock };
});

export default LockModule;
