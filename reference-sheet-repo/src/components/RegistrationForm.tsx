"use client"; // Required for client components

import { useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for App Router

const RegistrationForm = () => {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ name, password, email }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // Redirect on successful registration
      router.push("/dashboard");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Username"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
