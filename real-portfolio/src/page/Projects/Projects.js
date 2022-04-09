import "./Projects.css"
import NavBar from "../../utils/NavBar";
import {useEffect, useState} from "react";

function Projects() {

    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(()=>{
        window.addEventListener("resize", ()=>{
            setWindowSize(window.innerWidth)
        })
    }, [])

    return (
        <div className="wall">
            <NavBar />
            <div className={windowSize>700 ? "grid-proj-1" : ""}>
                <div className="red">DJ Amplifire</div>
                <div className="red">March Madness SurvivorPool</div>
                <div className="red">Nova Games</div>
            </div>
            <div className={windowSize>700 ? "grid-proj-2" : ""}>
            <div className="red">Gautier Airlines</div>
            <div className="red">Insurance</div>
            <div className="red">Outlook</div>
            <div className="red">Counsultant Employee Management</div>
            </div>
           
        </div>
    );
}

export default Projects;