import * as crypto from "crypto";
import { ObjectId } from "mongodb";
import { collections, connect } from "./connect";

const getObjectId = (key: string) => {
    const buffer = Buffer.from(key);


}

(async () => {
    const client =  await connect();
    const key = 'item1';

    // Creating the digest in hex encoding
    const algorithm = "sha256"
    const digest = crypto.createHash(algorithm).update(key).digest().slice(0, 12);

    const id = new ObjectId(digest);
    const payload = {
        "_id": id,
        "name": "Fable Anniversary",
        "price": 4.99,
        "category": "Video Game"
     };
    await collections.kvstore?.insertOne(payload);
    const doc = await collections.kvstore?.findOne(id);
    console.log(`Doc found: ${JSON.stringify(doc)}`);
})();

