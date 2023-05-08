const { ethers } = require("ethers");
const { abi } = require("./abi.js");

const provider = new ethers.providers.JsonRpcProvider("https://endpoints.omniatech.io/v1/arbitrum/one/public"); // arbitum mainnet
const contractAddress = ""; 
const contract = new ethers.Contract(contractAddress, abi, provider);

const key = ""; // private key
const wallet = new ethers.Wallet("0x" + key, provider);


async function main() {
    const id = 0; // id of the token

    const gasLimit = await contract.estimateGas.redeem(id);
    const redeem = await contract.redeem(id, { gasLimit, gasPrice: ethers.utils.formatUnits("2", "gwei") });

    const receipt = await redeem.wait();
    console.log(receipt.transactionHash);
}

main();
