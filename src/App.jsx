import CartContainer from "./CartContainer";
import { useGlobalContext } from "./context";
import Navbar from "./Navbar";
const App = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <main>
        <div className="loading" style={{ marginTop: "10rem" }}></div>
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default App;
