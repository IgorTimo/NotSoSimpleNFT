import NFTCard from "./NftCard";
import { useAllTokens } from "queries";
import { useState } from "react";



const NftPage = () => {
    const res = useAllTokens().data
    console.log("result:", res)

    const [nftData, setNftData] = useState([])

    // const createNft = () => {

        // return cardImage

 
return ( 
<div className="container mx-auto">
    <div className="grid grid-cols-3 gap-4">
        <NFTCard/>
        <NFTCard/>
        <NFTCard/>
    </div>
</div>
 );
}
 
export default NftPage;