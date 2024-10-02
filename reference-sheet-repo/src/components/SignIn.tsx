"use client";
import { signIn, getSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!result?.error) {
      const session = await getSession(); // Get the session which includes user details
      const userId = session?.user?.id; // Get the userId from the session

      if (userId) {
        router.replace(`/dashboard/${userId}`); // Redirect to the user's unique dashboard
      } else {
        console.error("User ID not found in session");
      }
    } else {
      console.error(result.error);
    }
  };

  return (
    <div className="w-full flex flex-col">
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="items-center" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
