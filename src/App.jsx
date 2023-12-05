import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="grid grid-rows-6 grid-cols-6 h-screen">
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
