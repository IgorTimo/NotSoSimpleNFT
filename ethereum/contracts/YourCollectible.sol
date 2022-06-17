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


    // <<<<< The following functions are overrides required by Solidity.
    function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal override(ERC721Pagination) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721Pagination) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId) public view override(ERC721Pagination) returns(string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721Pagination) returns(bool) {
        return super.supportsInterface(interfaceId);
    }
    // >>>> These functions are overrides required by Solidity.
}
