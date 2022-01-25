import Welcome from "./components/Welcome";
import Comment from "./components/Comment";
import Clock from "./components/Clock";
import Toggle from "./components/Toggle";
import LoginControl from "./components/LoginControl";
import Calculator from "./components/Calculator";
import Invoices from "./components/Invoices";
import Invoice from "./components/Invoice";
import { Routes, Route, Link } from "react-router-dom";
import Counter from "./components/Counter";
import FriendStatus from "./components/FriendStatus";
import ContextApp from "./components/Context/ContextApp"
import Theme from "./components/Context/Theme";
import TextInputWithFocusButton from './components/TextInputWithFocusButton'
import logProps from "./components/HighOrder/logProps";
import PortalApp from "./components/Portal/PortalApp";
import Products from "./components/Products";
import Product from "./components/Product";
import ReduxExample from "./components/ReduxExample";

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64",
  },
};
const Hoc = logProps(TextInputWithFocusButton)
const Hoc2 = logProps(Welcome)
function App() {
  return (
    <div>
      <Hoc2 name="Viki" />
      <Link to="/">Comment</Link> |<Link to="clock">Clock</Link> |
      <Link to="toggle">Toggle</Link> |<Link to="login">Login</Link> |
      <Link to="calc">Calculator</Link> | <Link to="invoices">Invoices</Link> | <Link to="products">Products</Link>
      <Hoc />
      <PortalApp/>
      
      <div>
        <Routes>
          <Route path="/" element={<Comment comment={comment} />} />
          <Route path="clock" element={<Clock />} />
          <Route path="toggle" element={<Toggle />} />
          <Route path="login" element={<LoginControl />} />
          <Route path="calc" element={<Calculator />} />
          <Route path="counter" element={<Counter />} />
          <Route path="status" element={<FriendStatus />} />
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path=":invoiceId/:invoiceName" element={<Invoice />} />
          </Route>
          <Route path="context" element={<ContextApp />} />
          <Route path="theme" element={<Theme />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:productId" element={<Product />} />
          <Route path="redux" element={<ReduxExample />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
