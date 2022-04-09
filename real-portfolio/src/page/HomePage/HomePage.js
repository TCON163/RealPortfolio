import "./HomePage.css"
import NavBar from "../../utils/NavBar";

function HomePage(){
    return (
        <div className="wall">
            <NavBar />
            <div className="grid-home">
                <div className="about-me">
                    <span className="at">@</span><span className="bout-me">bout me</span>
                </div>
                <div className="general-info">
                    <p>general</p>
                </div>
                <div className="pics">
                    <p>pics</p>
                </div>
                <div className="work-experince">
                    <p>work experince</p>
                </div>
                <div className="display-links">
                    <p>links</p>
                </div>
                
            </div>
        </div>
    );
}

export default HomePage;