import Markdown from "react-markdown";

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
    <div className="bg-green-800">
      <Markdown>{markdown}</Markdown>
    </div>
  );
}
