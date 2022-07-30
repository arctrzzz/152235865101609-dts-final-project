import Header from "./containers/Header";
import Footer from "./containers/Footer";
import HomePage from "./containers/HomePage";
import DetailPage from "./containers/DetailPage";
import LoginPage from "./containers/LoginPage";
import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container sx={{ backgroundColor: "#C2C2C2" }}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="Homepage" element={<HomePage />}></Route>
            <Route path="Detailpage" element={<DetailPage />}></Route>
            <Route path="loginpage" element={<LoginPage />}></Route>
          </Route>
        </Routes>

        <Footer />
      </Container>
    </div>
  );
}

export default App;
