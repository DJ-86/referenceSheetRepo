"use client";
import { useState, useEffect } from "react";

const CheatsheetDisplay = () => {
  type Cheatsheet = {
    title: string;
    syntax: string;
    usage: string;
    example: string;
    notes: string;
    linkToDocs: string;
  };

  const [cheatsheets, setCheatsheets] = useState<Cheatsheet[]>([]); // Array to hold multiple cheatsheets
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchCheatsheets = async () => {
      try {
        const response = await fetch("/api/cheatsheets"); // Adjust the endpoint as needed
        if (response.ok) {
          const data = await response.json();
          setCheatsheets(data); // Set the fetched data to the state
          console.log(data);
        } else {
          console.error("Failed to fetch cheatsheets");
        }
      } catch (error) {
        console.error("Error fetching cheatsheets:", error);
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchCheatsheets();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state while fetching
  }

  return (
    <div>
      {cheatsheets.length === 0 ? ( // Check if there are no cheatsheets
        <div>No cheatsheets available.</div>
      ) : (
        cheatsheets.map(
          (
            cheatsheet,
            index // Loop through each cheatsheet
          ) => (
            <div key={index} className="mb-4">
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

              <a
                href={cheatsheet.linkToDocs}
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
            </div>
          )
        )
      )}
    </div>
  );
};

export default CheatsheetDisplay;
