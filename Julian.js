const { ethers } = require("ethers");
const { abi } = require("./abi.js");

const provider = new ethers.providers.JsonRpcProvider("https://1rpc.io/arb"); // arbitum mainnet
const contractAddress = "0x88ed0391e502cbca4b277a3e8519d3a6a71f8925"; 

const key = ""; // private key
const wallet = new ethers.Wallet("0x" + key, provider);

const contract = new ethers.Contract(contractAddress, abi, wallet);

async function main() {
    const id = 0; // id of the token

    const gasPrice = await provider.getGasPrice();

    const gasLimit = 2_500_000;
    const redeem = await contract.redeem(id, { gasLimit, gasPrice });

    const receipt = await redeem.wait();
    console.log(receipt.transactionHash);
}

main();
