![landing](https://user-images.githubusercontent.com/98407930/183013671-ac02cd0f-6d5e-4334-9f78-650d012512c3.png)

# HealthBase
## Inspiration 💡
 Few months ago my brother was admitted into hospital . There we encountered few peoples who were struggliong to admit their patients into the hospital
 . The reason behind that was that they have some documents missing . This unmanagement of the documents leads to the more suffering of the patients and 
 waste of critical time. With a view of better management of the medical documentation that no one should suffer from this ,  this Project was made.

## Project Description 📖

This project is made using the leading edge technology of <b>Next.js</b> , <b>Tailwind.css</b> ,<b>Solidity</b> , <b>Hardhat</b> , <b>RainbowKit</b>,
<b>Wagmi</b> and <b>IPFS</b>(<b>Web3.storage</b>) . The contract is deployed on goerli testnet using <b>Alchemy</b>.

The landing page of the website is pretty simple on purpose , we know the peoples will be stressed . At first we just have to enter the basic detaiils just to 
make a account of the person , then just after registration you will be redirected to your <b>DOCS (documents)</b> page. Yes its that simple.

The next time you are visiting the page you dont have to do anything (you will be automatically redirected to the Docs page).

On docs page there you will see the side modal which you can close if you want . There you will see your info and the options of uploading your 
precious data , You can also delete your data if you want . You will have the full power to control your data and guss what it is secured with blockchain 
technology means no one (including government and the site owner itself) cant delete your data . (Thats cool 😎 right?)


## Technologies Used 🔱

<b>IPFS (web3.storage)</b> 

For storage to the Patients Data web3.storage is been used . The document that is taken using the frontend is pushed to the ipfs.
After uploading we get the CID by which i have made a link dynamically using template literals and fetched that in the frontend . 

#### Links to the files where Ipfs is been used :

<b>RainbowKit</b>

Rainbow kit is getting pretty famous with the ability of high customisability . So i decided to use that

<b>Next.js</b>

Next js framework is known for its SSR(server side rendring) capability thats why i have used that in this  Project

<b>Tailwind.css</b>

Tailwindcss have made the work soo much faster and easy that also saved a lot of time .

<b>Wagmi</b>
Contract interaction is been done using the a newly founded library named wagmi . 


## Contract Address










## Snips








## How To Get Started ?? 🍀

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
