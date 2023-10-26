import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeScreen from "./screens/HomeScreen";
import GaassetsScreen from "./screens/GaassetsScreen";
import GaassetScreen from "./screens/GaassetScreen";
import CartScreen from "./screens/CartScreen";
import Gaasset from "./components/Gaasset";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3 gBack">
        <Container>
          <Routes>
            <Route path="/" element={<GaassetsScreen />} exact />
            <Route path="/gaasset/:id" element={<GaassetScreen />} />
            <Route path="/cart/:id?" element={<CartScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
