import { create } from 'ipfs-http-client';
import { mochNfts } from '../constants/moch_nfts.js';

const ipfs = create({ protocol: "https", host: "ipfs.infura.io", port: 5001 });

(async () => {
    for (let i = 0; i < mochNfts.length; i++) {
        if (i > 8) {
            console.log('Прерываю исполнения скрипта, иначе мы сейчас получим от IPFS ошибку Too Many Requests');
            break;
        }

        const uploaded = await ipfs.add(JSON.stringify(mochNfts[i]));
        console.log(i, uploaded.path);
    }
})();
