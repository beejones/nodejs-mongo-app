import * as mongoDB from "mongodb";
export const collections: { kvstore?: mongoDB.Collection } = {};

export const connect = async (): Promise<mongoDB.MongoClient> => {
    const client: mongoDB.MongoClient = new mongoDB.MongoClient('mongodb://root:mongo@172.19.0.2:27017/');
    await client.connect();        
    const db: mongoDB.Db = client.db('kv');
   
    const collection: mongoDB.Collection = db.collection('kvstore');
    collections.kvstore = collection;
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${collection.collectionName}`);
    return client;
 }