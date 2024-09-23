import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("RefSheets");

  if (req.method === "GET") {
    const cheatsheets = await db.collection("cheatsheets").find({}).toArray();
    res.status(200).json(cheatsheets);
  } else if (req.method === "POST") {
    const newCheatsheet = req.body;
    await db.collection("cheatsheets").insertOne(newCheatsheet);
    res.status(201).json(newCheatsheet);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
