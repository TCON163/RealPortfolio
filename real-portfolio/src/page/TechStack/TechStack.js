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
            <div className={windowSize > 700 ? "grid-ts": "reg"}>
                <div className="g-box cloud">Cloud</div>
          
                <div className="g-box devOps">DevOps</div>
            
                <div className="g-box backEnd">Backend</div>
               
                <div className="g-box frontEnd">Frontend</div>
                
                <div className="g-box dataB">Databases</div>
            </div>
        </div>
    )
}

export default TechStack;