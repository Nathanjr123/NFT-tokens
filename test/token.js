const { expect } = require("chai");

describe("Token contract", function () {
  // ...previous test...

  it("Should transfer tokens between accounts", async function() {
    const [owner, addr1, addr2] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Token");

    const hardhatToken = await Token.deploy();

    // Transfer 50 tokens from owner to addr1
    await hardhatToken.transfer(addr1.address, 50);
    var bal = await hardhatToken.balanceOf(addr1.address);
    expect(bal.eq(50));

    // Transfer 50 tokens from addr1 to addr2
    await hardhatToken.connect(addr1).transfer(addr2.address, 50);
    var bal2 = await hardhatToken.balanceOf(addr2.address);
    expect(bal2.eq(50));
  });
});