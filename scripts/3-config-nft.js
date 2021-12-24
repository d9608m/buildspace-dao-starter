import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x8AFe256d2E9151E422Dc71E6A6c62384b8f2b2C7",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Veil",
        description: "This NFT will give you access to SpaceDAO!",
        image: readFileSync("scripts/assets/veil.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()