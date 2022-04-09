import "./NavBar.css";

function NavBar(){
    return (
        <div>
            <nav className="header">
                <ul>
                    <li>
                        <h1>Tyler Conner's Portfolio</h1>
                    </li>
                    <div className="links">
                    <li className="nav-link oo">
                        Tech Stacks
                    </li>
                    <li className="nav-link oo">
                        Projects
                    </li>
                    <li className="nav-link oo">
                        Contact
                    </li>
                    </div>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;