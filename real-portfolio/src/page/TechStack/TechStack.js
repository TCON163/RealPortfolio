import "./TechStack.css";
import NavBar from "../../utils/NavBar";
import {useEffect, useState} from "react";

function TechStack(){

    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(()=>{
        window.addEventListener("resize", ()=>{
            setWindowSize(window.innerWidth)
        })
    }, [])


    return(
        <div className="wall">
            <NavBar />
    {/* Grid */}
            <div className={windowSize > 700 ? "grid-ts": "reg"}>

    {/* Cloud */}
                <div className="g-box cloud">
                    <h2>Cloud</h2>
                    <ul>
                        <li>
                            AWS
                        </li>
                        <li>Google Cloud Platform</li>
                        <li>
                            Microsoft Azure
                        </li>
                    </ul>
                </div>
    {/* End of Cloud */}

    {/* May add a div to let them know list are in order from most favorite at the top */}


    {/* DevOps */}
                <div className="g-box devOps">
                  
                    <h2>DevOps</h2>
                    <ul>
                        <li>Jenkins</li>
                        <li>Docker</li>
                        <li>Jacoco</li>
                    </ul>
                </div>
    {/* End of DevOps */}
    {/* Backend */}
            
                <div className="g-box backEnd">
                
                    <h2>Backend</h2>

                    <ul>
                        <li className="main-li">
                        Java
                        <ul>
                            <li>
                                Spring
                            </li>
                            <li>
                                Microservices
                                <ul>
                                    <li>
                                        Eureka
                                    </li>
                                    <li>Zuul</li>
                                </ul>
                            </li>
                        </ul>
                        </li>
                        <li className="main-li">
                            Python
                            <ul>
                                <li>
                                    Django
                                </li>
                                <li>
                                    Flask
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
    {/* End of Backend */}
    {/* Frontend */}
               
                <div className="g-box frontEnd">
                   <h2>Frontend</h2>
                   <ul>
                       <li className="main-li">
                           JavaScript
                           <ul>
                                <li>React</li>
                           </ul>                        
                        </li>
                        <li className="main-li">
                            TypeScript
                            <ul>
                                <li>Angular</li>
                            </ul>
                        </li>
                   </ul>
                </div>
    {/* End ofFrontend */}
    {/* Databases */}
                <div className="g-box dataB">
                    <h2>Databses</h2>
                        <ul>
                            <li>MariaDB</li>
                            <li>Postgres</li>
                            <li>MySQL</li>
                        </ul>

                </div>
    {/* End of Databases */}
            </div>
    {/* End of Grid */}
        </div>
    )
}

export default TechStack;