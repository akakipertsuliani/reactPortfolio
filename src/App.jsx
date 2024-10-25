import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Loader from "./Loader/Loader";
import Work from "./Work";
import Footer from "./Footer";
import About from "./AboutPage/About";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <Router>
            <>
                {!loading ? <Header /> : false}
                <Routes>
                	{!loading ? <Route path="/" element={<Work />} /> : false}
                	{!loading ? <Route path="/about" element={<About />} /> : false}
                	{!loading ? <Route path="/contact" element={<Footer />} /> : false}
                </Routes>
                {loading ? <Loader /> : false}
            </>
        </Router>
    );
}

export default App;
