import { Provider } from "react-redux";
import store from "./redux/store";
import Route from "./utils/Route";
import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";

export default function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Route path="/">
        <Home/>
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </Provider>
  );
}
