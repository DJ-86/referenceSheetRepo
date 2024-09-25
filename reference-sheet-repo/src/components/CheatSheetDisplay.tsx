"use client";
import { useState, useEffect } from "react";

const CheatsheetDisplay = () => {
  const [cheatsheet, setCheatsheet] = useState<any>(null);

  useEffect(() => {
    const fetchCheatsheet = async () => {
      try {
        const response = await fetch("/api/cheatsheets"); // Adjust the endpoint as needed
        if (response.ok) {
          const data = await response.json();
          setCheatsheet(data);
        } else {
          console.error("Failed to fetch cheatsheet");
        }
      } catch (error) {
        console.error("Error fetching cheatsheet:", error);
      }
    };

    fetchCheatsheet();
  }, []);

  if (!cheatsheet) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{cheatsheet.title}</h1>
      <h2>Syntax:</h2>
      <pre className="bg-gray-800 p-4 text-white rounded">
        <code>{cheatsheet.syntax}</code>
      </pre>

      <h2>Usage:</h2>
      <p>{cheatsheet.usage}</p>

      <h2>Example:</h2>
      <pre className="bg-gray-800 p-4 text-white rounded">
        <code>{cheatsheet.example}</code>
      </pre>

      <h2>Notes:</h2>
      <p>{cheatsheet.notes}</p>

      <a href={cheatsheet.linkToDocs} target="_blank" rel="noopener noreferrer">
        Documentation
      </a>
    </div>
  );
};

export default CheatsheetDisplay;
