// src/components/UserDashboard.tsx

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface UserData {
  name: string;
  email: string;
  // Add other fields as necessary
}

const UserDashboard = () => {
  const router = useRouter();
  const { id } = router.query; // Get user ID from the URL
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await fetch(`/api/user/${id}`); // Fetch user data from API
          if (!response.ok) {
            throw new Error("User not found");
          }
          const data: UserData = await response.json();
          setUserData(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Your Dashboard</h1>
      {userData ? (
        <div>
          <h2>Welcome, {userData.name}!</h2>
          <p>Email: {userData.email}</p>
          {/* Render more user-specific content here */}
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
};

export default UserDashboard;
