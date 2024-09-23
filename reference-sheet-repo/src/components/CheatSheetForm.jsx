"use client";
import { useState } from "react";

const CheatsheetForm = () => {
  const [title, setTitle] = useState("");
  const [syntax, setSyntax] = useState("");
  const [usage, setUsage] = useState("");
  const [example, setExample] = useState("");
  const [notes, setNotes] = useState("");
  const [linkToDocs, setLinkToDocs] = useState("");
  const [language, setLanguage] = useState("");
  const [tags, setTags] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cheatsheetData = {
      title,
      syntax,
      usage,
      example,
      notes,
      linkToDocs,
      language,
      tags,
    };

    try {
      const response = await fetch("/api/cheatsheets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cheatsheetData),
      });

      if (response.ok) {
        // Handle successful response (e.g., reset form or show success message)
        console.log("Cheatsheet added successfully!");
        setTitle("");
        setSyntax("");
        setUsage("");
        setExample("");
        setNotes("");
        setLinkToDocs("");
        setLanguage("");
        setTags([]);
      } else {
        // Handle error response
        console.error("Failed to add cheatsheet");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className="flex flex-col items-center mt-12" onSubmit={handleSubmit}>
      <input
        className="mx-auto w-96 h-12 bg-white rounded text-black pl-4 mb-2"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="mx-auto w-96 h-12 bg-white rounded text-black pl-4 mb-2"
        placeholder="Syntax"
        value={syntax}
        onChange={(e) => setSyntax(e.target.value)}
        required
      />
      <textarea
        className="mx-auto w-96 h-12 bg-white rounded text-black pl-4 mb-2"
        placeholder="Usage"
        value={usage}
        onChange={(e) => setUsage(e.target.value)}
        required
      />
      <textarea
        className="mx-auto w-96 h-12 bg-white rounded text-black pl-4 mb-2"
        placeholder="Example"
        value={example}
        onChange={(e) => setExample(e.target.value)}
        required
      />
      <textarea
        className="mx-auto w-96 h-12 bg-white rounded text-black pl-4 mb-2"
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <input
        className="mx-auto w-96 h-12 bg-white rounded text-black pl-4 mb-2"
        type="url"
        placeholder="Link to Documentation"
        value={linkToDocs}
        onChange={(e) => setLinkToDocs(e.target.value)}
      />
      <input
        className="mx-auto w-96 h-12 bg-white rounded text-black pl-4 mb-2"
        type="url"
        placeholder="Language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      />
      <input
        className="mx-auto w-96 h-12 bg-white rounded text-black pl-4 mb-2"
        type="url"
        placeholder="Tags"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button type="submit">Add Cheatsheet</button>
    </form>
  );
};

export default CheatsheetForm;
