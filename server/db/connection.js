import dotenv from 'dotenv';
dotenv.config({ path: '../config.env' });

import fs from 'fs';
import dns from 'dns';
// Force Node's DNS resolver to use public resolvers as a fallback
dns.setServers(['8.8.8.8', '1.1.1.1']);
console.log('Node DNS servers:', dns.getServers());
import { MongoClient, ServerApiVersion } from "mongodb";

let url = process.env.ATLAS_URL || process.env.ATLAS_URI || "";

if (!url) {
    try {
        const cfgPath = new URL('../config.env', import.meta.url);
        const cfg = fs.readFileSync(cfgPath, 'utf8');
        const m = cfg.match(/^ATLAS_URI\s*=\s*(.+)$/m);
        if (m) url = m[1].trim();
    } catch (e) {}
}

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
