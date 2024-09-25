import Markdown from "react-markdown";
import CheatSheetForm from "../components/CheatSheetForm";
import CheatSheetDisplay from "../components/CheatSheetDisplay";

export default function Home() {
  const markdown = `# HTML Cheatsheet

  ## Basic HTML Structure
  
  \`\`\`html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <header>
        <h1>Welcome to My Cheatsheet</h1>
      </header>
      <section>
        <p>This is a basic HTML structure example.</p>
      </section>
    </body>
  </html>
  \`\`\`
  
  - **\`<!DOCTYPE html>\`**: Defines the document type and version (HTML5).
  - **\`<meta charset="UTF-8">\`**: Sets character encoding to UTF-8.
  `;
  return (
    <div className="container mx-auto bg-green-800">
      <h1 className="flex mb-5 justify-center text-5xl">
        Reference Sheet Repo
      </h1>
      <h2 className="flex justify-center">
        A site that I keep updated with technologies that I use
      </h2>
      <ul className="flex mt-5 justify-around">
        <li className="hover:text-black">HTML</li>
        <li className="hover:text-black">CSS</li>
        <li className="hover:text-black">Bootstrap</li>
        <li className="hover:text-black">Javascript</li>
        <li className="hover:text-black">React</li>
        <li className="hover:text-black">Tailwind</li>
        <li className="hover:text-black">Node.js</li>
        <li className="hover:text-black">Next.js</li>
        <li className="hover:text-black">MongoDB</li>
      </ul>
      <div>
        <CheatSheetForm />
        <CheatSheetDisplay />
      </div>
      <div className="bg-slate-600 m-3 p-5">
        <Markdown>{markdown}</Markdown>
      </div>
    </div>
  );
}
