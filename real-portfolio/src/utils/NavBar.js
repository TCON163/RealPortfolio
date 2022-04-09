import "./NavBar.css";
import React, {useEffect, useState} from "react";

function NavBar(){

    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(()=>{
        window.addEventListener("resize", ()=>{
            setWindowSize(window.innerWidth)
        })
    }, [])



    const belowSeven = ()=> {
        return(
            <div>
                <nav className="header">
                <ul>
                    <li>
                        <a href="home"><h1>Tyler Conner's Portfolio</h1></a>
                    </li>
                </ul>
                </nav>
            </div>
        );
    }


    const aboveSeven = () => {
        return(
            <div>
                 <nav className="header">
                <ul>
                    <li>
                    <a href="home"><h1>Tyler Conner's Portfolio</h1></a>
                    </li>
                    <div className="links">
                    <li className="nav-link oo">
                        <a href="techstack">
                        Tech Stacks
                        </a>
                    </li>
                    <li className="nav-link oo">
                        <a href="projects">
                        Projects
                        </a>
                    </li>
                    <li className="nav-link oo">
                        <a href="contact">
                        Contact
                        </a>
                    </li>
                    </div>
                </ul>
            </nav>
            </div>
        )
    }


    const setNavBar = ()=> {
        if(windowSize > 700){
            return aboveSeven();
        }
        return belowSeven();

    
    }


    return (
        <div>
         {setNavBar()}
        </div>
    );
}

export default NavBar;