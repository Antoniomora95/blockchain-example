const crypto = require('crypto');
const SHA256 = message => crypto.createHash("sha256").update(message).digest('hex');

export class Block {
    constructor(timestamp = '', data = []) {
        this.timestamp = timestamp;
        // this.data should contain information like transactions
        this.data = data;
        this.hash = this.getHash();
        this.prevHash = ''; // previous block's hash
    }

    getHash() {
        return SHA256(this.prevHash + this.timestamp + JSON.stringify(this.data));
    }
}