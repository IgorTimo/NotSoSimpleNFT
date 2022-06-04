// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract YourCollectible is
    ERC721,
    ERC721Enumerable,
    ERC721URIStorage,
    Ownable
{
    using Counters for Counters.Counter;
    using Strings for uint256;

    Counters.Counter private _tokenIdCounter;

    uint private constant MIN_PAGE_NUMBER = 1;
    uint private constant DEFAULT_PAGE_SIZE = 20;
    uint private constant MAX_PAGE_SIZE = 100;

    constructor() ERC721("YourCollectible", "YCB") {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://ipfs.io/ipfs/";
    }

    function mintItem(address to, string memory uri) public returns (uint256) {
        _tokenIdCounter.increment();
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        return tokenId;
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function getAllTokens(uint _pageNumber, uint _pageSize) external view returns(string memory) {
        uint totalSupply = this.totalSupply();
        if (totalSupply == 0) {
            return '{"tokens":[]}';
        }

        uint pageSize = _pageSize == 0
            ? DEFAULT_PAGE_SIZE
            : _pageSize > MAX_PAGE_SIZE
                ? MAX_PAGE_SIZE
                : _pageSize;
        uint pageNumber = _pageNumber == 0 ? MIN_PAGE_NUMBER : _pageNumber;

        uint skip = pageSize * (pageNumber - 1);
        if (skip > totalSupply) {
            return '{"tokens":[]}';
        }
        uint takeTo = skip + pageSize;
        takeTo = takeTo > totalSupply ? totalSupply : takeTo;

        bytes memory b;

        for (uint i = skip + 1; i <= takeTo; i++) {
            string memory closeTag = i == takeTo ? '"]' : '"],';
            b = abi.encodePacked(b, '[', i.toString(), ',"', this.tokenURI(i), closeTag);
        }

        b = abi.encodePacked('{"tokens":[', b, ']}');

        return string(b);
    }

    function getTokensOf(address holder, uint _pageNumber, uint _pageSize) external view returns(string memory) {
        if (holder == address(0)) {
            return '{"tokens":[]}';
        }

        uint holderBalance = balanceOf(holder);
        if (holderBalance == 0) {
            return '{"tokens":[]}';
        }

        uint pageSize = _pageSize == 0
            ? DEFAULT_PAGE_SIZE
            : _pageSize > MAX_PAGE_SIZE
                ? MAX_PAGE_SIZE
                : _pageSize;
        uint pageNumber = _pageNumber == 0 ? MIN_PAGE_NUMBER : _pageNumber;

        uint skip = pageSize * (pageNumber - 1);
        if (skip > holderBalance) {
            return '{"tokens":[]}';
        }

        uint counted;
        uint skiped;
        uint taked;
        bytes memory b;

        for (uint i = 1; i <= this.totalSupply(); i++) {
            if (ownerOf(i) == holder) {
                counted++;

                if (skiped < skip) {
                    skiped++;
                    continue;
                }

                taked++;
                bool isThatsAll = counted == holderBalance || taked == pageSize;
                string memory closeTag = isThatsAll ? '"]' : '"],';
                b = abi.encodePacked(b, '[', i.toString(), ',"', this.tokenURI(i), closeTag);
                if (isThatsAll) {
                    break;
                }
            }
        }

        b = abi.encodePacked('{"tokens":[', b, ']}');

        return string(b);
    }
}
