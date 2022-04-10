import "./HomePage.css"
import NavBar from "../../utils/NavBar";
import {useEffect, useState} from 'react';
import tyler from '../../assets/t.png';


function HomePage(){

    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(()=>{
        window.addEventListener("resize", ()=>{
            setWindowSize(window.innerWidth)
        })
    }, [])


    return (
        <div className="wall">
            <NavBar />
            <div className={windowSize> 825 ? "h-100" : "mini1"}>
    {/* Grid */}
            <div className={windowSize>825 ? "grid-home" : ""}>

                <div className="v-center" style={{marginTop: "30px"}}>
                    <img alt="me" src={tyler} style={{border: "solid 3px white"}}></img>
                </div>

    {/* About Me */}
                <div className="about-me">
                    <div className="v-center">
                        <p id="about" className="a-me"><span className={windowSize > 901 ? "at": "at2"}>@</span><span className={windowSize > 901 ? "bout-me": "bout-me2"}>bout me</span></p>
                    </div>
                    
                </div>
    {/* End of About Me */}


    {/* General Description */}
                <div className="general-info">
                    <div className="info ">
                        <h3 style={{fontSize: "30px"}}>Bio:</h3>
                        <p>I was born and raised in Mobile, Alabama. Graduated from Troy University with a Bachelors in Risk Management & Insurance. I was a commercial insurance underwriter for 5 year before I enter the tech Industry.</p>
                        <p>Insurance lead me to my current path in the tech industry. I spent most of my insurance career at a company, that swore they had state-of-the-art technology. It was good, but I wouldn't have called it state-of-the-art. At the time, I didn't know much about tech, but thought it had to be better, based off other industries' technology. </p>
                        <p>Later on, I joined another insurance company. When I got there they just started a transition from paper files to document management system. They had three huge rooms filled with files. The software they had, made the prior company look like they were state-of-the-art. This is what sparked my journey into tech.</p>
                        
              
                        <h3 style={{fontSize: "30px"}}>Goals:</h3>
                        <ul>
                            <li>
                            <p>1) To develope software that will change the insurance industry. </p>
                            <p>2) To become an expert in AI.</p>
                            </li>
                        </ul>
                      
                   
                    </div>
                    
                </div>
    {/* End of General Description */}
    
    
    {/* Pics and interest */}
                {/* <div className="pics">
                    
                    <div className="pic-card">
                    <img className="pic " src={belize} alt="belize" style={{width: "200px", height: "150px"}} />
                    </div>
                    <div className="pic-card">
                    <img className="pic " src={mardi} alt="mardi" style={{width: "200px", height: "150px"}} />
                
                    </div>
                  </div> */}
    {/* End of Pics and interest */}
    {/* Work Experince */}
                <div className="work-experince">
                    <h3  style={{textAlign: "center", color: "purple", fontSize: "30px", marginLeft: "25px"}}>Tech Experince</h3>
                    <ul style={{marginTop: "-20px"}}>
                        <li>
                            <h3 >InfoSys - 01/2022 to present</h3>
                            <ul id="rev1">
                                <li>Currently on a project with a Power Company</li>
                                
                            </ul>
                        </li>
                        <li>
                            <h3 >Revature -  9/2021 to 01/2022</h3>
                            <ul id="rev">
                                <li>
                                    Nova Games
                                    <ul>
                                        <li>Role: DevOps lead</li>
                                    </ul>
                                </li>

                                <li>
                                    DJ Amplifier
                                    <ul> 
                                        <li>Role: Scrum master</li>
                                    </ul>
                                </li>
                                <li>
                                    Airline Kiosk
                                    <ul>
                                        <li>Role: Frontend</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
    {/* End of Work Experince */}
     {/* Links */}
                <div className="display-links">
                    <div className="v-center">
                        <div className="links-grid">
                            <a href="techstack">
                                <span className="span-link">Tech Stacks</span>
                            </a>
                            <a href="projects">
                                <span className="span-link">Projects</span>
                            </a>
                            <a href="https://github.com/TCON163">
                                <span className="span-link" >GitHub Profile</span>
                            </a>
                        </div>
                    </div>
                </div>
    {/* End of Links */}
                
            </div>
    {/* End of Grid */}
        </div>
        </div>
    );
}

export default HomePage;