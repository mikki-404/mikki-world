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
import NeuronsGoneWildArticle from "./components/Translations/Specific/NeuronsGoneWildArticle";

import Articles from "./components/Articles/Articles";
import GazzanigaArticle from "./components/Articles/Specific/GazzaniggaArticle";
import DrawingArticle from "./components/Articles/Specific/DrawingArticle";
import DisintegrationArticle from "./components/Articles/Specific/DisintegrationArticle";

import Blog from "./components/Blog/Blog";
import StockholmTripRecord from "./components/Blog/Specific/StockholmTrip";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import * as Links from "./Links";
import StrangeGirlWhoFellInLoveWithBrainArticle
    from "./components/Articles/Specific/StrangeGirlWhoFellInLoveWithBrainArticle";

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
                    <Route path={Links.TRANSLATIONS_PATH} element={<Translations />} />
                    <Route path={Links.TRANSLATION_TULPAMANCY_GUIDE_DRAGONHEART} element={<DragonheartGuideTranslation />} />
                    <Route path={Links.TRANSLATION_NEURONS_GONE_WILD} element={<NeuronsGoneWildArticle />} />

                    {/* ARTICLES */}
                    <Route path={Links.ARTICLES_PATH} element={<Articles />} />
                    <Route path={Links.ARTICLE_CONSCIOUSNESS_BY_GAZZANIGA} element={<GazzanigaArticle />} />
                    <Route path={Links.ARTICLE_DRAWING_AND_VISUAL} element={<DrawingArticle />} />
                    <Route path={Links.ARTICLE_DISINTEGRATION} element={<DisintegrationArticle />} />
                    <Route path={Links.ARTICLE_STRANGE_GIRL_WHO_FELL_IN_LOVE_WITH_BRAIN}
                           element={<StrangeGirlWhoFellInLoveWithBrainArticle />} />

                    {/* BLOG */}
                    <Route path={Links.BLOG_PATH} element={<Blog />} />
                    <Route path={Links.BLOG_STOCKHOLM_TRIP_PATH} element={<StockholmTripRecord />} />

                    <Route path="*" element={<Navigate to="/"/>} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;