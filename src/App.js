import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import TranslatedFile from "./components/Translations/TranslatedFile";
import Articles from "./components/Articles/Articles";
import Article from "./components/Articles/Article";
// import About from "./components/About/About";
import Translations from "./components/Translations/Translations";
import Footer from "./components/Footer";
/*import Resume from "./components/Resume/ResumeNew";*/
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [load, updateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            updateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <Preloader load={load} />
            <div className="App" id={load ? "no-scroll" : "scroll"}>
                <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/translations" element={<Translations />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/tulpamancy-guide-into-the-strange-and-wonderful" element={<TranslatedFile />} />
                    <Route path="/gazzaniga" element={<Article />} />
                    {/*<Route path="/about" element={<About />} />*/}
                    {/*<Route path="/resume" element={<Resume />} />*/}
                    <Route path="*" element={<Navigate to="/"/>} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;