import React from "react";
import Header from "../../components/Header";
import Mason from "../../components/Masonry";
import { Alert } from "react-bootstrap";
import "./style.css";
import Footer from "../../components/Footer";

function Portfolio () {
    return (
        <div>
            <div>
            <Header />
            </div>
            <>

    <Alert>
      This is an alert—check it out!
    </Alert>

</>
            <div id="mason">
            <Mason /> 
            </div>
        
        <Footer />
        </div>
        
    )
}

export default Portfolio;