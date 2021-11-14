import { Block } from "./block";

export class Blockchain {
    constructor () {
        // this property will contain all the blocks
        // create a genesis block
        this.chain = [new Block(Date.now().toString())];
    }

    // just for convenience, I will create a function to get the latest block
    getOldLatestBlock() {
        return this.chain[this.chain.length - 1];
    }
    addBlock(block) {
        // since we are adding a new block, prevHash will be the hash of the old latest block.
        block.prevHash = this.getOldLatestBlock().hash;
        block.hash = block.getHash();

        // Object.freeze ensure immutability of the new block added to the blockchain
        this.chain.push(Object.freeze(block));
    }
}