require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const { INFURA_API_KEY, MNEMONIC } = process.env;

module.exports = {
  compilers: {
    solc: {
      version: "^0.8.18",
        }
    },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    sepolia: {
      provider: () => new HDWalletProvider(MNEMONIC, INFURA_API_KEY),
      network_id: "11155111",
      //gas: 6721975,
      gas: "8721975",
      skipDryRun: false
    },
  },
};