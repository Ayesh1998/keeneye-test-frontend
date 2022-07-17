import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/home";
import ErrorPage from "./pages/error-page/ErrorPage";
import NavBar from "./common/nav-bar/nav-bar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./redux/actions/cartAction";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  //used react-router-dom version 6.3.0, so used element in Route instead of component
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
