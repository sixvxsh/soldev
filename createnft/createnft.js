
// const { Metaplex, keypairIdentity, bundlrStorage } = require("@metaplex-foundation/js");
// const { Connection, clusterApiUrl, Keypair } = require("@solana/web3.js");
// const { PublicKey } = require("@solana/web3.js");
// const fs = require("fs");


// // create connection with solana cluster
// const connection = new Connection('https://api.devnet.solana.com');
// const wallet = Keypair.generate();


// // request for sol airdrop
// await connection.requestAirdrop(wallet.publicKey, 1e9); // 1 SOL


// const nftMint = await TokenMetadataProgram.createMint(
//   connection,
//   wallet,
//   wallet.publicKey,
//   undefined,
//   undefined,
//   undefined,
//   0,
//   true,
// );

// const nftMetadata = [
//   // Array of 500 NFT metadata objects
// ];

// for (let i = 0; i < 500; i++) {
//   await TokenMetadataProgram.mintTo(
//     connection,
//     wallet,
//     nftMint.publicKey,
//     wallet.publicKey,
//     [],
//     1,
//     nftMetadata[i],
//   );
// }


// const walletBalance = await connection.getBalance(wallet.publicKey);
// console.log(`Wallet balance: ${walletBalance}`);

// const nftSupply = await TokenMetadataProgram.getSupply(connection, nftMint.publicKey);
// console.log(`NFT supply: ${nftSupply}`);


// fs.writeFile("writemeta300.json", JSON.stringify(metadataArray), (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(`NFT metadata written to file`);
// });



const { Metaplex, keypairIdentity, bundlrStorage } = require("@metaplex-foundation/js");
const { Connection, clusterApiUrl, Keypair } = require("@solana/web3.js");
const fs = require("fs");
const {secret} = require ('./devnet.json');
// const { PublicKey } = require("@solana/web3.js");
// const { generateKeyPair } = require("crypto");
// const {initializeKeypair} = require("./initialize");
// const {createCollectionNft} = require("createCollectionNft")


async function main() {
  // create a new connection to the cluster's API
  const connection = new Connection(clusterApiUrl("devnet"));

  const wallet = Keypair.fromSecretKey(Uint8Array.from(secret));
  // console.log(`${wallet.publicKey.toBase58()}`);

  const mx = Metaplex.make(connection)
  .use(keypairIdentity(wallet))
  .use(bundlrStorage({
    address: "https://devnet.bundlr.network",
    providerUrl: "https://api.devnet.solana.com",
    timeout: 60000,
    }),
  );
   
  // console.log("pubkey" , wallet.publicKey.toBase58());
  // const payer = wallet;
  // const owner = wallet;
  // const mint = Keypair.generate();
  // const mintAuthority = Keypair.generate();
  // const otherCreator1 = Keypair.generate();
  // const otherCreator2 = Keypair.generate();
  // const collectionUpdateAuthority = Keypair.generate();
  // const collectionmigrated = mx.nfts()
  // .migrateToSizedCollection({ mintAddress, size: toBigNumber(500))};

  // readingfile
  // const buffer = fs.readFileSync('/path/to/onenft.json');
  // const file = toMetaplexFile(buffer, 'onenft.json');


  const { nft } = await mx.nfts().create({
    uri: "https://storage.googleapis.com/fractal-launchpad-public-assets/honeyland/assets_gold_pass/57.json",
    name: "Gold Pass #057",
    sellerFeeBasisPoints: 500,
  });

};
console.log(main());


  // const { nft } = await mx.nfts().create(
  //   {
  //     tokenStandard: NonFungible,
  //     uri: "https://storage.googleapis.com/fractal-launchpad-public-assets/honeyland/assets_gold_pass/57.json",
  //     name: "Gold Pass #057",
  //     symbol: "HL_Gold",
  //     sellerFeeBasisPoints: 500,
  //     isMutable: true,
  //     maxSupply: 1,
  //     useNewMint: mint,
  //     mintAuthority,
  //     updateAuthority,
  //     tokenOwner: owner.publicKey,
  //     isCollection: true,
  //     collectionAuthority: collectionUpdateAuthority,
  //     collection: collectionUpdateAuthority,
  //     uses: {
  //       useMethod: UseMethod.Burn,
  //       remaining: 0,
  //       total: 500,
  //     },
  //     creators: [
  //       {
  //         address: updateAuthority.publicKey,
  //         share: file.share,
  //       },
  //       {
  //         address: otherCreator1.publicKey,
  //         share: file.share,
  //       },
  //       {
  //         address: otherCreator2.publicKey,
  //         share: file.share,
  //       },
  //     ],
  //   },
  //   { payer }
  // );
  
  // };


// console.log(nft);

















// to here




 // When we create a collection NFT that verified.
//  const { nft } = await mx.nfts().create({
//    ...minimalInput(),
//    isCollection: true,
//    collection: collectionNft.address,
//    collectionAuthority: collectionUpdateAuthority,
//  });



// const {collection} = await mx.nfts().migrateToSizedCollection({
//   mintAddress,
//   size: toBigNumber(500),
//   collectionAuthority: Signer });


// const {verifyCollec} = await mx.nfts().verifyCollection({
//   mintAddress, collectionMintAddress });




// Then the created NFT is a sized collection.
// function minimalInput(): Omit<NftData, 'uri'> {
//     return {
//       name: 'My NFT Collection', // set the name of your collection
//       symbol: 'MNC', // set the symbol for your collection
//       creators: [], // define the creators of your collection
//       // add any other properties that you want to set for your collection
//     };
//   }




// const loadnfts = await mx.nfts().load({ 
//   metadata,
//   loadJsonMetadata: boolean
// });





  // fs.readFile('onenft' , 'utf-8' , async function(err,data) {
  //   if(err) {
  //     console.error(err);
  //     return;
  //   }
  // });
