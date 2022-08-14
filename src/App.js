import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import ScrollToTop from "./components/Common/ScrollToTop";
import Preloader from "./components/Common/Pre";
import Navbar from "./components/Common/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Common/Footer";

import Translations from "./components/Translations/Translations";
import DragonheartGuideTranslation from "./components/Translations/Specific/DragonheartGuideTranslation";

import Articles from "./components/Articles/Articles";
import GazzanigaArticle from "./components/Articles/Specific/GazzaniggaArticle";
import DrawingArticle from "./components/Articles/Specific/DrawingArticle";
import {DisintegrationArticle} from "./components/Articles/Specific/DisintegrationArticle";

import Blog from "./components/Blog/Blog";
import StockholmTripRecord from "./components/Blog/Specific/StockholmTrip";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {NeuronsGoneWildArticle} from "./components/Translations/Specific/NeuronsGoneWildArticle";
import * as Constants from "./FileWithConstants";

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

                    {/* TRANSLATIONS */}
                    <Route path={Constants.TRANSLATIONS_PATH} element={<Translations />} />
                    <Route path={Constants.TRANSLATION_TULPAMANCY_GUIDE_DRAGONHEART} element={<DragonheartGuideTranslation />} />
                    <Route path={Constants.TRANSLATION_NEURONS_GONE_WILD} element={<NeuronsGoneWildArticle />} />

                    {/* ARTICLES */}
                    <Route path={Constants.ARTICLES_PATH} element={<Articles />} />
                    <Route path={Constants.ARTICLE_CONSCIOUSNESS_BY_GAZZANIGA} element={<GazzanigaArticle />} />
                    <Route path={Constants.ARTICLE_DRAWING_AND_VISUAL} element={<DrawingArticle />} />
                    <Route path={Constants.ARTICLE_DISINTEGRATION} element={<DisintegrationArticle />} />

                    {/* BLOG */}
                    <Route path={Constants.BLOG_PATH} element={<Blog />} />
                    <Route path={Constants.BLOG_STOCKHOLM_TRIP_PATH} element={<StockholmTripRecord />} />

                    <Route path="*" element={<Navigate to="/"/>} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;