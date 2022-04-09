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
   {/* Grid 1 */}
            <div className={windowSize>800 ? "grid-proj-1" : ""}>
    {/* DJ */}
                <div className="red">
                    <h2 >DJ Amplifire</h2>
                    <div>
                        <p className="mt-10">DJAmplifire is a site where you can host or join a room. Through the Spotify API the site can connect to all your devices, and allows you to jam out with your favorite DJ. Once you create a room you will get a code that you can share with others so that they can join your room.</p>
                     
                        <p className="mt-10"><a href="https://dj.tcon.app">dj.tcon.app**</a></p>
                        <p className="mt-10" style={{fontSize: "14px"}}>**disclaimer: I would have to enter your spotify email into the project, so that SpotifyAPI works.</p>


                        <h5 className="mt-10"><a href="https://github.com/TCON163/DJAmplifire">GitHub Repository</a></h5>
                        <h5 className="mt-10">TechStack</h5>
                        <ul className="mt-10" style={{textAlign: "start"}}>
                            <li >
                                FrontEnd: Angular
                                <ul>
                                    <li >There is a React Component embedded.</li>
                                </ul>
                            </li>
                            <li >BackEnd: Java - Spring</li>
                            <li>Team size: 6 people</li>
                        </ul>
                        
                    </div>
                </div>
    {/* End of DJ */}
    
    {/* MarchM */}
                <div className="red">
                   <h2>March Madness SurvivorPool</h2>
                   <div>
                        <p className="mt-10">A Survivor Pool for your favorite March Tourney. Each day of the tournament you have to pick a team to win. Once you pick a team, you will not be able to use that team for the rest of the tourney. Once a team you picked losses you are eliminated.</p>
                        <p className="mt-10"><a href="https://survivorpool.tcon.app">SurvivorPool.tcon.app***</a></p>
                        <p className="mt-10" style={{fontSize: "14px"}}>*** Currently Backend is on an AWS EC2, but won't work since backend is HTTP</p>
                        <p className="mt-10"><a href="http://marchmadness-frontend.s3-website.us-east-2.amazonaws.com/">It does work here in my AWS S3 Bucket.</a></p>
                        
                        <h5 className="mt-10"><a href="https://github.com/TCON163/MarchMadnessSuicideBracket">GitHub Repository</a></h5>
                        <h5 className="mt-10">TechStack</h5>
                        <ul className="mt-10" style={{textAlign: "start"}}>
                            <li >FrontEnd: Angular</li>
                            <li >BackEnd: Java Spring</li>
                            <li>Personal Project</li>
                        </ul>
                    
                    
                    </div> 
                </div>
    {/* End of MarchM */}
    
    {/* Nova */}
                <div className="red">
                    <h2>Nova Games</h2>
                    <div >
                        <p className="mt-10">NOVA Games is an e-Commerce application for video games. Group project where we implemented a Microservices Architech. I was the devOps Lead, that built the CI/CD pipeline with Jenkins, Docker, and AWS.</p>

                        <p className="mt-10"><a href="https://nova.tcon.app">nova.tcon.app*</a></p>
                        <p className="mt-10" style={{fontSize: "14px"}}>* The Backend is no longer up.</p>
                        <p className="mt-10" style={{fontSize: "14px"}}><a href="https://github.com/Revature-Nova/NovaFrontEnd">FrontEnd GitHub Repository</a></p>
                        <p className="mt-10" style={{fontSize: "14px"}}><a href="https://github.com/Revature-Nova/NovaBackEnd">FrontEnd GitHub Repository - ReadMe here</a></p>                   
                        <h5 className="mt-10">TechStack</h5>
                        <ul className="mt-10" style={{textAlign: "start"}}>
                            <li>FrontEnd: Angular</li>
                            <li>BackEnd: Java, Spring, & MicroServices</li>
                            <li>DevOps: Jenkins, AWS, & Docker</li>
                            <li>Team size: 14 people</li>
                        </ul>
                    </div>
                </div>
    {/* End of Nova */}
            </div>
    {/* End of Grid 1 */}





    {/* Grid 2 */}
            <div className={windowSize>700 ? "grid-proj-2" : ""}>
    {/* Airline */}
                <div className="red">
                    <h2>Gautier Airlines</h2>
                    <div>
                        <p className="mt-10 ">pronounced: Go-shay</p>
                        <p className="mt-10">An Airline Kiosk that allows you to look at flights, check-in, and buy/cancel tickets. </p>
                        <p className="mt-10"><a href="https://airline.tcon.app">airline.tcon.app*</a></p>
                        <p className="mt-10" style={{fontSize: "14px"}}>* The Backend is no longer up.</p>
                        <h5 className="mt-10"><a href="https://github.com/TCON163/Team_Excellence">GitHub Repository</a></h5>
                        <h5 className="mt-10">TechStack</h5>
                        <ul className="mt-10" style={{textAlign: "start"}}>
                            <li>FrontEnd: React</li>
                            <li>BackEnd: Java, Servlets, and Hibernate</li>
                            <li>Team size: 2 people</li>
                        </ul>
                    </div>
                </div>
    {/* End of Airline */}

    {/* Insurance */}
                <div className="red">
                    <h2>Insurance</h2>
                    <div>
                        <p className="mt-10">With my background in insurance, I love to use technology to solve problems in the insurance industry</p>
                        <p className="mt-10">I don't have any of my insurance projects online, due to privacy.</p>
                        <p> A lot of my projects are invovled around Natural Language Processing (NLP). I am using AI, so that A LOT of data entry can be eliminated with Automation.</p>
                        <p className="mt-10">Some Projects:</p>
                        <ul className="mt-10" style={{textAlign: "start"}}>
                            <li>1) Scan application to insert data into your AMS.</li>
                            <li>2) Email Reader, that can automate your workflow.</li>
                        </ul>
                    </div>
                </div>
    {/* End of Insurance */}
    
    {/* Outlook */}
                <div className="red">
                    <h2>Outlook Add-in w/ React</h2>
                    <div>
                        
                    </div>
                </div>
    {/* End of Outlook */}
    
    {/* Staging */}
                <div className="red">Counsultant Employee Management</div>
    {/* End of Staging */}
            </div>
    {/* Grid 2 */}
           
        </div>
    );
}

export default Projects;