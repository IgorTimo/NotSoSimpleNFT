import NFTCard from '@components/NftCard/NftCard';
import React from 'react'

const NftModal = ({ children }) => ( 
        <div className='h-screen'>
        <div>
                <h1>Превед Медвед!</h1>

                <NFTCard {...children} />
        </div>
        </div>
     );

 
export default NftModal;




// этот код без return и без фиг. скобок тоже работал
// const NftModal = () => ( 
//         <div>  
//           <h1>Превед Медвед!</h1>
//           </div>
//        );
  
   
//   export default NftModal;