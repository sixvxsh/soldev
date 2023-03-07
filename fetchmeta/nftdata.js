// import { Metaplex, keypairIdentity, bundlrStorage } from "@metaplex-foundation/js";
// import { Connection, clusterApiUrl, Keypair } from "@solana/web3.js";
// import { PublicKey } from "@solana/web3.js";
// import fs from 'fs-es6'


// const connection = new Connection(clusterApiUrl("mainnet-beta"));
// const wallet = Keypair.generate();

// const metaplex = Metaplex.make(connection)
//     .use(keypairIdentity(wallet))
//     .use(bundlrStorage());


// fs.readFile('hash_list_200.json', 'utf8', function(err,data){
//     const hashlist = data 
// });
   
// for (let addr = 0; addr <= hashlist.length ; addr++) {
//     const mintAddress = new PublicKey(addr);
//     const nft = await metaplex.nfts().findByMint({ mintAddress });
//     fs.writeFile("writemeta.json", nft );
// };






// const { Metaplex, keypairIdentity, bundlrStorage } = require("@metaplex-foundation/js");
// const { Connection, clusterApiUrl, Keypair } = require("@solana/web3.js");
// const { PublicKey } = require("@solana/web3.js");
// const fs = require("fs");


// const connection = new Connection(clusterApiUrl("mainnet-beta"));
// const wallet = Keypair.generate();

// const metaplex = Metaplex.make(connection)
//     .use(keypairIdentity(wallet))
//     .use(bundlrStorage());

// fs.readFile('hash_list_200.json', 'utf8', async function(err,data){
//     if (err) {
//         console.error(err);
//         return;
//     }
//     const hashlist = JSON.parse(data);
//     for (let addr = 0; addr < hashlist.length; addr++) {
//         const mintAddress = new PublicKey(hashlist[addr]);
//         const nft = await metaplex.nfts().findByMint({ mintAddress });
//         fs.writeFile("writemeta.json", JSON.stringify(nft), (err) => {
//             if (err) {
//                 console.error(err);
//                 return;
//             }
//             console.log(`NFT ${addr} metadata written to file`);
//         });
//     }
// });



// last version
const { Metaplex, keypairIdentity, bundlrStorage } = require("@metaplex-foundation/js");
const { Connection, clusterApiUrl, Keypair } = require("@solana/web3.js");
const { PublicKey } = require("@solana/web3.js");
const fs = require("fs");

const connection = new Connection(clusterApiUrl("mainnet-beta"));
const wallet = Keypair.generate();

const metaplex = Metaplex.make(connection)
    .use(keypairIdentity(wallet))
    .use(bundlrStorage());


fs.readFile('hash_list_300.json', 'utf8', async function(err,data){
    if (err) {
        console.error(err);
        return;
    }
    const hashlist = JSON.parse(data);
    const metadataArray = [];

    for (let addr = 0; addr < hashlist.length; addr++) {
        const mintAddress = new PublicKey(hashlist[addr]);
        const nft = await metaplex.nfts().findByMint({ mintAddress });
        metadataArray.push(nft);
    }

    fs.writeFile("writemeta300.json", JSON.stringify(metadataArray), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`NFT metadata written to file`);
    });
});




// version1 sorting
// const fs = require('fs');

// const originalData = JSON.parse(fs.readFileSync('jsonviewer(300).json', 'utf8'));

// const filteredData = originalData.map(item => {
//   return {
//     name: item.name,
//     address: item.mint.address
//   };
// });

// filteredData.sort((a, b) => {
//   const nameA = a.name.toUpperCase();
//   const nameB = b.name.toUpperCase();
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }
//   return 0;
// });

// fs.writeFileSync('sorted-data300.json', JSON.stringify(filteredData, null, 2));




// version2 sort
// const fs = require('fs');

// const originalData = JSON.parse(fs.readFileSync('jsonviewer(300).json', 'utf8'));

// const filteredData = originalData.map(item => {
//   const numberInName = parseInt(item.name.match(/#(\d+)/)[1], 10);
//   return {
//     name: item.name,
//     address: item.mint.address,
//     numberInName: numberInName
//   };
// });

// filteredData.sort((a, b) => {
//   return a.numberInName - b.numberInName;
// });

// fs.writeFileSync('sorted-data300-300.json', JSON.stringify(filteredData, null, 2));



// version3 sort
const fs = require('fs');

const originalData = JSON.parse(fs.readFileSync('jsonviewer(200).json', 'utf8'));

const filteredData = originalData.map(item => {
  return {
    name: item.name,
    address: item.mint.address
  };
});

filteredData.sort((a, b) => {
  const nameA = parseInt(a.name.match(/#(\d+)/)[1]);
  const nameB = parseInt(b.name.match(/#(\d+)/)[1]);
  return nameA - nameB;
});

fs.writeFileSync('sorted-data(200).json', JSON.stringify(filteredData, null, 2));

