import React from "react";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import HomePage from "./containers/HomePage";
import DetailPage from "./containers/DetailPage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
// import { auth } from "./authentication/firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
function App() {
  // const navigate = useNavigate();
  // const [user, loading] = useAuthState(auth);

  // useEffect(() => {
  //   if (loading) {
  //     return;
  //   }
  //   if (!user) {
  //     navigate("/login");
  //   }
  // });

  return (
    <div className="App">
      <Container sx={{ backgroundColor: "#ECB390" }}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="" element={<HomePage />}></Route>
            <Route path="Homepage" element={<HomePage />}></Route>
            <Route path="Detailpage" element={<DetailPage />}></Route>
            <Route path="login" element={<LoginPage />}></Route>
            <Route path="register" element={<RegisterPage />}></Route>
          </Route>
        </Routes>

        <Footer />
      </Container>
    </div>
  );
}

export default App;
