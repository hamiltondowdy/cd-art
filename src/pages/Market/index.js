import React from "react";
import './style.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Market () {
    return (
        <div>
            <Header />
            <iframe src="https://www.saatchiart.com/account/artworks/343593" id="frame"></iframe>
            <Footer />
        </div>
        
    )
}

export default Market;

