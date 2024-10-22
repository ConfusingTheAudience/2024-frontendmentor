import Cart from "./components/Cart";
import Desserts from "./components/Desserts";
import { ProductProvider } from "./contexts/ProductContext";
import "./variables.css";

function App() {
  return (
    <div className="container">
      <ProductProvider>
        <Desserts />
        <Cart />
      </ProductProvider>
    </div>
  );
}

export default App;
