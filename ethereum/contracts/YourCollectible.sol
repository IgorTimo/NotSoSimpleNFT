// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "erc721_pagination/contracts/ERC721Pagination.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract YourCollectible is ERC721Pagination, Ownable
{
    uint private _tokenIdCounter;

    constructor() ERC721("YourCollectible", "YCB") ERC721Pagination(20, 100) {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://ipfs.io/ipfs/";
    }

    function mintItem(address to, string memory uri) public onlyOwner returns (uint256) {
        unchecked {
            _tokenIdCounter += 1;
        }
        uint256 tokenId = _tokenIdCounter;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        return tokenId;
    }
}
