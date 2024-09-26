import Markdown from "react-markdown"; /* allows markdown components */
import CheatsheetForm from "@/components/CheatsheetForm";
import CheatsheetDisplay from "@/components/CheatsheetForm";

export default function Home() {
  const markdown = ` # Test `; /* string that is displayed with markdown formatting */
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
        <CheatsheetForm />
        <CheatsheetDisplay />
      </div>
      <div className="bg-slate-600 m-3 p-5">
        <Markdown>{markdown}</Markdown>
      </div>
    </div>
  );
}
