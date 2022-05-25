import React from "react";
import Header from "../../components/Header";
import CatMenu from "../../components/CatMenu";
import Mason from "../../components/Masonry";

import "./style.css";
import Footer from "../../components/Footer";

function Portfolio () {
    return (
        <div>
            <div>
            <Header />
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