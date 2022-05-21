//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

library Lib1 {
    function getSomething() public pure returns (uint256) {
        return 33;
    }
}

library Lib2 {
    function getSomething() public pure returns (uint256) {}
}
