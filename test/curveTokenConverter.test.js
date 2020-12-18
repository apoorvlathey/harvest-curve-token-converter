const { accounts, contract, web3 } = require("@openzeppelin/test-environment");
const {
  expectRevert,
  BN,
  ether,
  balance,
  constants,
} = require("@openzeppelin/test-helpers");
const { setWeb3, printTokenTransfers } = require("truffle-token-test-utils");
setWeb3(web3);

const CurveTokenConverter = contract.fromArtifact("Curve_Token_Converter");
const Eth2Token = contract.fromArtifact("Eth2Token");
const IERC20 = contract.fromArtifact("IERC20");

describe("Harvest Curve Token Converter", () => {
  const user = accounts[1];

  const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
  const Farm3CrvVault = "0x71B9eC42bB3CB40F017D8AD8011BE8e384a95fa5";

  before(async () => {
    this.tokenConverter = await CurveTokenConverter.new();
    this.Eth2Token = await Eth2Token.new();

    this.USDC = await IERC20.at(USDC);
    this.Farm3Crv = await IERC20.at(Farm3CrvVault);

    // get USDC
    await this.Eth2Token.eth2Token(USDC, {
      from: user,
      value: ether("10"),
    });
  });

  it("should deposit to 3Crv Farm", async () => {
    // approve contract to spend USDC
    const iniUSDCBal = await this.USDC.balanceOf(user);
    await this.USDC.approve(this.tokenConverter.address, iniUSDCBal, {
      from: user,
    });
    // deposit
    tx = await this.tokenConverter.deposit(
      USDC,
      iniUSDCBal,
      Farm3CrvVault,
      {
        from: user,
      }
    );
    await printTokenTransfers(tx);
  });
});
