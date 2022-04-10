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
        <div className={windowSize>900 ? "wall" : ""}>
            <NavBar />
            <div className={windowSize> 900 ? "h-100" : "mini"}>
   {/* Grid 1 */}
            <div className={windowSize>900 ? "grid-proj-1" : ""}>
    {/* DJ */}
                <div className="red ofh">
                    <h2 >DJ Amplifire</h2>
                    <div>
                        <p className="mt-10">DJAmplifire is a site where you can host or join a room, using the Spotify API. The spotify API allows you to connect all your device to Jam! .</p>
                     
                        <p className="mt-10"><a href="https://dj.tcon.app" style={{fontSize: '25px'}}>dj.tcon.app**</a></p>
                        <p className="mt-10" style={{fontSize: "14px"}}>**disclaimer: I would have to enter your spotify email into the project, so that SpotifyAPI works.</p>


                        <h5 className="mt-10"><a href="https://github.com/TCON163/DJAmplifire">GitHub Repository</a></h5>
            
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
                <div className="red ofh">
                   <h2>March Madness SurvivorPool</h2>
                   <div>
                        <p className="mt-10">A Survivor Pool for your favorite March Tourney. Each day of the tournament you have to pick a team to win. Once you pick a team, you will not be able to use that team for the rest of the tourney. Once a team you picked losses you are eliminated.</p>
                        <p className="mt-10"><a href="https://survivorpool.tcon.app" style={{fontSize: '25px'}}>SurvivorPool.tcon.app***</a></p>
                        <p className="mt-10" style={{fontSize: "14px"}}>*** Currently Backend is on an AWS EC2, but won't work since backend is HTTP</p>
                        <p className="mt-10"><a href="http://marchmadness-frontend.s3-website.us-east-2.amazonaws.com/" style={{fontSize: '20px'}}>It does work <span style={{color: 'yellow'}}>here</span> in my AWS S3 Bucket.</a></p>
                        
                        <h5 className="mt-10"><a href="https://github.com/TCON163/MarchMadnessSuicideBracket">GitHub Repository</a></h5>
                    
                        <ul className="mt-10" style={{textAlign: "start"}}>
                            <li >FrontEnd: Angular</li>
                            <li >BackEnd: Java Spring</li>
                            <li>Personal Project</li>
                        </ul>
                    
                    
                    </div> 
                </div>
    {/* End of MarchM */}
    
    {/* Nova */}
                <div className="red ofh">
                    <h2>Nova Games</h2>
                    <div >
                        <p className="mt-10">NOVA Games is an e-Commerce store built using microservices. I was the devOps Lead. Built the CI/CD pipeline with Jenkins, Docker, and AWS.</p>

                        <p className="mt-10"><a href="https://nova.tcon.app" style={{fontSize: '25px'}}>nova.tcon.app*</a></p>
                        <p className="mt-10" style={{fontSize: "14px"}}>* The Backend is no longer up.</p>
                        <p className="mt-10" style={{fontSize: "14px"}}><a href="https://github.com/Revature-Nova/NovaBackEnd">FrontEnd GitHub Repository</a></p>                   
                      
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
            <div className={windowSize>800 ? "grid-proj-2" : ""}>
    {/* Airline */}
                <div className="red">
                    <h2>Gautier Airlines</h2>
                    <div>

                        <p className="mt-10">An Airline Kiosk that allows you to look at flights, check-in, and buy/cancel tickets. </p>
                        <p className="mt-10"><a href="https://airline.tcon.app" style={{fontSize: '25px'}}>airline.tcon.app*</a></p>
                        <p className="mt-10" style={{fontSize: "14px"}}>* The Backend is no longer up.</p>
                        <h5 className="mt-10"><a href="https://github.com/TCON163/Team_Excellence">GitHub Repository</a></h5>
                       
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
                       <p className="mt-10"> A lot of my projects are invovled around Natural Language Processing (NLP). I am using AI, so that A LOT of data entry can be eliminated with Automation.</p>
                       <p className="mt-10" style={{color: 'purple', fontSize: '18px'}}>Some Projects:</p>
                        <ul className="mt-10" style={{textAlign: "start"}}>
                            <li>1) Scan application to insert data into your AMS.</li>
                            <li>2) Email Reader, that can automate your workflow.</li>
                            <li>3) Document Management System</li>
                        </ul>
                    </div>
                </div>
    {/* End of Insurance */}
    
    {/* Outlook */}
                <div className="red">
                    <h2>Outlook Add-in w/ React</h2>
                    <div>
                        <p >This project is where I played around with creatign a Outlook Add-in with React.</p>
                        <h5 ><a href="https://github.com/TCON163/OutlookReact/tree/main/My%20Office%20Add-ins">GitHub Repository</a></h5>
                        <p >I really enjoyed using this setup to see what all data you can grab from Outlook with your react add-in. </p>

                    </div>
                </div>
    {/* End of Outlook */}
    
    {/* Staging */}
                <div className="red">
                    <h2>Counsultant Employee Management</h2>
                    <div>
                        <p className="mt-10">This is a system used to manage employees.</p>
                        <p className="mt-10">I developed the document mangaement system for this project. I also have a brach where I redid the data structure of the backend. </p>
                        <h5 ><a href="https://github.com/Client-Portal-Project/Backend-Java">GitHub Repository - main</a></h5>
                        <h5 ><a href="https://github.com/Client-Portal-Project/Backend-Java/tree/TCON2">GitHub Repository - my branch</a></h5>
  
                    </div>
                
                </div>
    {/* End of Staging */}
            </div>
    {/* End ofGrid 2 */}
        </div>
           
        </div>
    );
}

export default Projects;