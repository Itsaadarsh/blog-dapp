const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Blog", function () {
  it("Should create a post", async function () {
    const Blog = await ethers.getContractFactory("Blog");
    const blog = await Blog.deploy("Aadarsh Blog");
    await blog.deployed();

    await blog.createPost("Learning Web3 Part 1", "This is my web3 blog!");
    const posts = await blog.fetchPosts()
    expect(posts[0].title).to.equal("Learning Web3 Part 1")
  });

  it("Should edit a post", async function () {
    const Blog = await ethers.getContractFactory("Blog");
    const blog = await Blog.deploy("Aadarsh Blog");
    await blog.deployed();

    await blog.createPost("Learning Web3 prat 2", "This is my web3 blog prat 2!");
    await blog.updatePost(1, "Learning Web3 Part 2", "This is my web3 blog part 2!", true);
    const posts = await blog.fetchPosts()
    expect(posts[0].title).to.equal("Learning Web3 Part 2")
  });

  it("Update blog name", async function () {
    const Blog = await ethers.getContractFactory("Blog");
    const blog = await Blog.deploy("Aadarsh Blg");
    await blog.deployed();

    expect(await blog.name()).to.equal("Aadarsh Blg")
    await blog.updateName("Aadarsh Blog");
    expect(await blog.name()).to.equal("Aadarsh Blog")
  });
});
