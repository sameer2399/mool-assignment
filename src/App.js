import { ActionBar } from "./components/ActionBar/ActionBar";
import { DeclarationInfo } from "./components/DeclarationInfo/DeclarationInfo";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="max-w-5xl mx-auto md:py-8 p-4">
        <ActionBar />
        <DeclarationInfo/>
      </div>
    </div>
  );
}

export default App;
