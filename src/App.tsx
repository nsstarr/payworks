import Nav from "./components/Nav";
import "./styles.css";
import PagePayments from "./pages/PagePayments";

function App() {
  return (
    <main className="m-0 flex min-h-screen bg-white-100">
      <Nav />
      <PagePayments />
    </main>
  );
}

export default App;
