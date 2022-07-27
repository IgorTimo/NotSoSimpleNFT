import NFTCard from "./NftCard";
import { useAllTokens } from "queries";

const NftPage = () => {

    const tok = useAllTokens()
    console.log (tok)

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