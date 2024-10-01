import { MongoClient, Db } from "mongodb";

const uri: string = process.env.MONGODB_URI || ""; // Ensure it's not undefined
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // In development, reuse the MongoClient to avoid opening new connections
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, create a new MongoClient instance
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

export async function connectToDatabase(): Promise<Db> {
  const client = await clientPromise;
  return client.db("RefSheets");
}
