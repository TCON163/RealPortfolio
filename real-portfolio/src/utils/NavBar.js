import "./NavBar.css";
import React, {useEffect, useState} from "react";

function NavBar(){

    const [menu, setMenu] = useState(false);
    

    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(()=>{
        window.addEventListener("resize", ()=>{
            setWindowSize(window.innerWidth)
        })
    }, [])

    const onClick = () => {
        setMenu(!menu)
     
    }



    const belowSeven = ()=> {

        if(menu){
            return (<div className="menu-wall">
                        <nav className="header">
                            <ul>
                                <li><button className="button-2" onClick={onClick}>
                                        <div className="icon-2">X</div>
                                        
                                    </button>
                                </li>
                                
                                <li style={{textAlign: "center", width: "100%"}}>
                                    <a href="home" style={{color: "white"}}><h1>Tyler Conner's Portfolio</h1></a>
                                </li>
                            </ul>
                        </nav>

                        <div className="menu">
                            <ul>
                                <li className="menu-item">
                                    <a href="techstack"><p style={{color: "white", fontSize: "30px"}}>Tech Stacks</p></a>
                                </li>
                                <li className="menu-item">
                                    <a href="projects"><p style={{color: "white", fontSize: "30px"}}>Projects</p></a>
                                </li>
                                <li className="menu-item">
                                    <a href="contact"><p style={{color: "white", fontSize: "30px"}}>Contact</p></a>
                                </li>
                            </ul>

                        </div>
                    </div>)
        }
        return(
            <div>
                <nav className="header">
                <ul>
                    <li>
                        <button className="button-2" onClick={onClick}>
                            <div className="icon-1"></div>
                            <div className="icon-1"></div>
                            <div className="icon-1"></div>
                        </button>
                    </li>
                    
                    <li style={{textAlign: "center", width: "100%"}}>
                        <a href="home"><h1 style={{color: "white"}}>Tyler Conner's Portfolio</h1></a>
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
                    <a href="home"><h1 style={{color: "white"}}>Tyler Conner's Portfolio</h1></a>
                    </li>
                    <div className="links">
                    <li className="nav-link oo" >
                        <a href="techstack" style={{color: "white", fontSize: "20px"}}>
                        Tech Stacks
                        </a>
                    </li>
                    <li className="nav-link oo">
                        <a href="projects" style={{color: "white", fontSize: "20px"}}>
                        Projects
                        </a>
                    </li>
                    <li className="nav-link oo">
                        <a href="contact" style={{color: "white", fontSize: "20px"}}>
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