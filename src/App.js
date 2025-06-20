import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from './pages/ContactPage';
import NewsPage from './pages/NewsPage';
import ProductPage from './pages/ProductPage';
import ServicePage from './pages/ServicePage';
import StaticPage from './pages/StaticPage';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/NewsPage" element={<NewsPage />} />
            <Route path="/ProductPage" element={<ProductPage />} />
            <Route path="/ServicePage" element={<ServicePage />} />
            <Route path="/StaticPage" element={<StaticPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
