"use client";
import { useState } from "react";
import MonacoEditor from "@/components/MonacoEditor";

const CheatsheetForm = () => {
  const [title, setTitle] = useState<string>("");
  const [syntax, setSyntax] = useState<string>("");
  const [usage, setUsage] = useState<string>("");
  const [example, setExample] = useState<string>(""); // State for the Monaco editor
  const [notes, setNotes] = useState<string>("");
  const [linkToDocs, setLinkToDocs] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cheatsheetData = {
      title,
      syntax,
      usage,
      example, // This will now hold the editor content
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
        console.log("Cheatsheet added successfully!");
        setTitle("");
        setSyntax("");
        setUsage("");
        setExample(""); // Reset the editor content
        setNotes("");
        setLinkToDocs("");
        setLanguage("");
        setTags([]);
      } else {
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

      {/* Monaco Editor with state */}
      <MonacoEditor value={example} onChange={setExample} />

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
        type="text"
        placeholder="Tags (comma-separated)"
        value={tags.join(", ")}
        onChange={(e) =>
          setTags(e.target.value.split(",").map((tag) => tag.trim()))
        }
      />
      <button type="submit">Add Cheatsheet</button>
    </form>
  );
};

export default CheatsheetForm;
