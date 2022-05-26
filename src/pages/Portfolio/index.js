import React from "react";
import Header from "../../components/Header";
import CatMenu from "../../components/CatMenu";
import Mason from "../../components/Masonry";
import Footer from "../../components/Footer";
import "./style.css";

function Portfolio () {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div id="title">
                <h1>Portfolio</h1>
                </div>
                <CatMenu />
                
            <div id="mason">
                <Mason /> 
            </div>
                <Footer />
        </div>
        
    )
}

export default Portfolio;