import { Web3Storage } from "web3.storage";

function MakeStorageClient() {
  return new Web3Storage({ token: process.env.NEXT_PUBLIC_WEB3STORAGE_TOKEN });
}

export const StoreData = async (files) => {
  console.log("Uploading files to IPFS with web3.storage....");
  const client = MakeStorageClient();
  const cid = await client.put([files]);
  console.log("Stored files with cid:", cid);
  return cid;
};

/*



// function GetAccessToken() {
//   console.log(web3storage_key);
//   console.log(process.env.NEXT_PUBLIC_WEB3STORAGE_TOKEN);
//   return process.env.NEXT_PUBLIC_WEB3STORAGE_TOKEN;
// }

*/
