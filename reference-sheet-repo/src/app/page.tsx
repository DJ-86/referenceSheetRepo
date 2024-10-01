import CheatSheetForm from "../components/CheatsheetForm";
import CheatsheetDisplay from "../components/CheatsheetDisplay";
import SignIn from "@/components/SignIn";
import RegistrationForm from "@/components/RegistrationForm";

export default function Home() {
  return (
    <div className="container mx-auto bg-green-800">
      <h1 className="flex mb-5 justify-center text-5xl">
        Reference Sheet Repo
      </h1>
      <RegistrationForm />
      <SignIn />
      <CheatSheetForm />
      <CheatsheetDisplay />
      <div className="bg-slate-600 m-3 p-5"></div>
    </div>
  );
}
