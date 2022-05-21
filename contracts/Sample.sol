//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import {Lib2} from "./Lib.sol";

contract Sample {
    function get() external pure returns(uint256) {
        return Lib2.getSomething();
    }
}