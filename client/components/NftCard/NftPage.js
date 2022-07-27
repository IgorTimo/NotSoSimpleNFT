import NFTCard from "./NftCard";
import { useAllTokens } from "queries";

const NftPage = () => {
    const res = useAllTokens().data
    console.log(res)
    
    const createNft = () => {


    }

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