import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Appbar from "./components/Appbar";
import { useState, useEffect } from "react";
import Snackbar from '@mui/material/Snackbar';

import Login from "./pages/Login";
import ProductsPage from "./pages/ProductsPage";

//old bg - #282c34


function App() {
  const [auth, setAuth] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(()=> {
    if(auth) {
      setOpen(true)
    }
  }, [auth]);

  return (
    <div className="App">
      <Appbar auth={auth} setAuth={setAuth} />
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path="/" element={<Login setAuth={setAuth} />}></Route>
            <Route exact path="/products" element={<ProductsPage auth={auth} />}></Route>
          </Routes>
        </Router>
      </header>
      <Snackbar
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        onClose={handleClose}
        message="Log in successfull"
      />
    </div>
  );
}

export default App;
