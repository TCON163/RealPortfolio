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
            <div className={windowSize> 700 ? "h-100" : "scroll"}>
    {/* Grid */}
            <div className={windowSize > 700 ? "grid-ts": ""}>

    {/* Cloud */}
                <div className="g-box cloud">
                    <h2 className="ts-title">Cloud</h2>
                    <div className="card">
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
                </div>
    {/* End of Cloud */}

    {/* May add a div to let them know list are in order from most favorite at the top */}


    {/* DevOps */}
                <div className="g-box devOps">
                  
                    <h2 className="ts-title">DevOps</h2>
                    <div className="card">
                    <ul>
                        <li>Jenkins</li>
                        <li>Docker</li>
                        <li>Jacoco</li>
                    </ul>
                    </div>
                </div>
    {/* End of DevOps */}
    {/* Backend */}
            
                <div className="g-box backEnd">
                
                    <h2 className="ts-title">Backend</h2>
                    <div className="card">
                    <ul>
                        <li className="main-li">
                        Java:
                        <ul>
                            <li>
                                Spring
                            </li>
                            <li>
                                Microservices:
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
                            Python:
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
                </div>
    {/* End of Backend */}
    {/* Frontend */}
               
                <div className="g-box frontEnd">
                   <h2 className="ts-title">Frontend</h2>
                   <div className="card">
                   <ul>
                       <li className="main-li">
                           JavaScript:
                           <ul>
                                <li>React</li>
                           </ul>                        
                        </li>
                        <li className="main-li">
                            TypeScript:
                            <ul>
                                <li>Angular</li>
                            </ul>
                        </li>
                   </ul>
                   </div>
                </div>
    {/* End ofFrontend */}
    {/* Databases */}
                <div className="g-box dataB">
                    <h2 className="ts-title">Databses</h2>
                    <div className="card">
                        <ul>
                            <li>MariaDB</li>
                            <li>Postgres</li>
                            <li>MySQL</li>
                        </ul>
                        </div>
                </div>
    {/* End of Databases */}
            </div>
    {/* End of Grid */}
        </div>
        </div>
    )
}

export default TechStack;