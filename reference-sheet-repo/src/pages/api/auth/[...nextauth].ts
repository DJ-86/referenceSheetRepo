import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "../../../lib/mongodb"; // Reuse your connection
import { compare } from "bcryptjs";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Reuse your existing connection to the database
        const db = await connectToDatabase();
        const usersCollection = db.collection("users");

        // Check if the user exists
        const user = await usersCollection.findOne({
          email: credentials?.email,
        });

        if (!user) {
          throw new Error("No user found with the given email");
        }

        // Compare the password with the stored hash
        const isValid = await compare(credentials!.password, user.password);
        if (!isValid) {
          throw new Error("Invalid password");
        }

        // Return the user object (without password)
        return { id: user._id.toString(), email: user.email, name: user.name };
      },
    }),
  ],
  session: {
    jwt: true,
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error", // Error page
  },
});
