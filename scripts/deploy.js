const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const Blog = await hre.ethers.getContractFactory("Blog");
  const blog = await Blog.deploy("Aadarsh DApp Blog");

  await blog.deployed();

  console.log("Blog DApp deployed to:", blog.address);

  fs.writeFileSync('./config.js', `
    export const contractAddress = "${blog.address}"
    export const ownerAddress = "${blog.signer.address}"
  `);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
