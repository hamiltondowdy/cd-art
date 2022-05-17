import React from "react";
import Slides from "../../components/Slides";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";

function Home () {
    return (
        <div>
            <Header />
            <Slides />
            <Footer />
        </div>
        
    )
}

export default Home;