import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
    return(
        <section id="heroSection" className="hero-section">
            <div className="hero-section-content-box">
                <h1>Hello,
                    <br />
                    I'm 
                    <br />
                    Kimberly
                </h1>
                <Link to="/contact">
                    <button>Say Hello</button>
                </Link>
            </div>
        </section>
    );
}