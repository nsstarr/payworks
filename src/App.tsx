import { useState } from "react";
import Nav from "./components/Nav";
import "./styles.css";
import PagePayments from "./pages/Payments";

function App() {
  const [count, setCount] = useState(0);
  return (
    <main className="flex m-0 min-h-screen">
      <Nav />
      <PagePayments />
    </main>
  );
}

export default App;
