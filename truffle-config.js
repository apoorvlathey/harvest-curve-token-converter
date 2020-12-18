module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8546,
      network_id: "*",
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.12", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};
