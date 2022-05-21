import { expect } from "chai";
import { ethers } from "hardhat";
// eslint-disable-next-line node/no-missing-import
import { Sample, Lib1 } from "../typechain";

describe("Sample", () => {
  let sample: Sample;
  let lib1: Lib1;

  beforeEach(async () => {
    // deploy lib
    lib1 = await (await ethers.getContractFactory("Lib1")).deploy();

    // link
    const factory = await ethers.getContractFactory("Sample", {
      libraries: {
        Lib2: lib1.address,
      },
    });

    // deploy
    sample = await factory.deploy();
  });

  it("test", async () => {
    expect(await sample.get()).eq(33);
  });
});
