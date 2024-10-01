import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcryptjs";
import { connectToDatabase } from "../../lib/mongodb"; // Reuse the existing connection

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests are allowed" });
  }

  const { email, password, name } = req.body;

  // Reuse the existing connection to the database
  const db = await connectToDatabase();
  const usersCollection = db.collection("users");

  // Check if the user already exists
  const existingUser = await usersCollection.findOne({ email });
  if (existingUser) {
    return res.status(422).json({ message: "User already exists" });
  }

  // Hash the password
  const hashedPassword = await hash(password, 12);

  // Insert the new user into the database
  const result = await usersCollection.insertOne({
    email,
    password: hashedPassword,
    name,
  });

  res.status(201).json({ message: "User created!", userId: result.insertedId });
}
