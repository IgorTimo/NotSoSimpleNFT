import NFTCard from "./NftCard";
import { useAllTokens } from "queries";
import { useState } from "react";



const NftPage = () => {
    const res = useAllTokens().data
    console.log("", res)
  const test = res?.map( (el) => {
        return <NFTCard img={el.image} title={el.name} desc={el.description}/>
    } 
    )



 
return ( 
<div className="container mx-auto">
    <div className="grid grid-cols-3 gap-4">
        { test }
    </div>
</div>
 );
}
 
export default NftPage;