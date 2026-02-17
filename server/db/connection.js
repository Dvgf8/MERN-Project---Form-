import dotenv from "dotenv";
dotenv.config({ path: "../../config.env" });

import { MongoClient, ServerApiVersion } from "mongodb";

const url = process.env.ATLAS_URL || process.env.ATLAS_URI || "";

if (!url) console.error("No MongoDB connection string found in ATLAS_URL or ATLAS_URI");
const client = new MongoClient(url, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (error) {
    console.error("Error connecting to MongoDB:", error);
}

let db = client.db("MERN");

export default db;
