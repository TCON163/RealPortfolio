import "./HomePage.css"
import NavBar from "../../utils/NavBar";

function HomePage(){
    return (
        <div className="wall">
            <NavBar />
    {/* Grid */}
            <div className="grid-home">
    {/* About Me */}
                <div className="about-me">
                    <div className="v-center">
                        <p className="a-me"><span className="at">@</span><span className="bout-me">bout me</span></p>
                    </div>
                    
                </div>
    {/* End of About Me */}
    {/* General Description */}
                <div className="general-info">
                    <p>general</p>
                </div>
    {/* End of General Description */}
    {/* Pics and interest */}
                <div className="pics">
                    <p>pics</p>
                </div>
    {/* End of Pics and interest */}
    {/* Work Experince */}
                <div className="work-experince">
                    <p>work experince</p>
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
                                <span className="span-link">GitHub Profile</span>
                            </a>
                        </div>
                    </div>
                </div>
    {/* End of Links */}
                
            </div>
    {/* End of Grid */}
        </div>
    );
}

export default HomePage;