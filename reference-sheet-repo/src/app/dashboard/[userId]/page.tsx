// src/app/dashboard/[userId]/UserDashboard.tsx
import { connectToDatabase } from "../../../lib/mongodb"; // Adjust the path if necessary
import { ObjectId } from "mongodb"; // Required for ObjectId

const UserDashboard = async ({ params }) => {
  const { userId } = params; // Get userId from URL parameters

  // Connect to the database
  const db = await connectToDatabase();
  const usersCollection = db.collection("users");

  // Fetch the user by userId
  const user = await usersCollection.findOne({ _id: new ObjectId(userId) });

  // If user is not found, return a user-friendly message
  if (!user) {
    return <div>User not found</div>;
  }

  // Render user information
  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
      {/* Add more user-specific data as needed */}
    </div>
  );
};

export default UserDashboard;
