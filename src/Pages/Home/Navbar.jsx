import { useState, useEffect } from "react";
// import { Link } from "react-scroll";

function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const toggleNav = () => {
        setIsActive(!isActive);
    };

    const closeMenu = () => {
        setIsActive(false);
    };

    //checks the pixel size of the window
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    //checks the pixel size of the window
    useEffect(() => {
        if(window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);

    return (
        //className changes depending on if the state is active
        <nav className={`navbar ${isActive ? "active" : ""}`}>
            <div><h2>Navbar</h2></div>
            {/* <a onClick={toggleNav} className={`navbar ${isActive ? "active" : ""}`}></a> */}
        </nav>
    )
}

export default Navbar;