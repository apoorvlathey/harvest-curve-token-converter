# Harvest Curve Token Converter
### Deposit using any token to Harvest Curve Vaults

---

## Token Transfers on Forked Mainnet (in single txn) via deposit():
![Test Output](https://i.imgur.com/jyUTCnN.png)

### Flow: USDC -> Curve -> 3Crv LP -> f3Crv Vault Token

## Setup
1. `npm i` to install required packages
2. Create `.env` file with `NODE_URL=` RPC endpoint to connect to mainnet geth node.
3. Compile contracts with `npm run compile` (requires global install of truffle)
4. Run tests on forked mainnet using `npm run test`