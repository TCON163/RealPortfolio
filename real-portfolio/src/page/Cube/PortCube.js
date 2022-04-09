import * as React from 'react';
import './PortCube.css'
import Cube from 'react-3d-cube';
import one from '../../assets/DJAmplifire.PNG';
import two from '../../assets/outlook.PNG';
import three from '../../assets/Nova.PNG';
import four from '../../assets/Airline.PNG';
import five from '../../assets/SurvivorPool.PNG';
import six from '../../assets/Github.PNG';
import { Link } from 'react-router-dom';
import NavBar from '../../utils/NavBar';


class PortCube extends React.Component {
  render() {
    return (
      <div className='landing wall'>
        <NavBar />
        <h1 className='banner'>FullStack Software Engineer</h1>
        <h3 className='sub-banner'>Rotate cube to check out some projects. Does not work on mobile :(</h3>
        <center>
            
            <div
            style={{
                width: 300,
                height: 300
            }}
            >

            <Cube size={300} index="front">
                <div>
                  <a href='https://dj.tcon.app' className='cube-link'>
                  <img src={one} alt="one" style={{width: '300px', height: '300px'}} />
                  </a>
                </div>
                <div>
                  <img src={two} alt="two" style={{width: '300px', height: '300px'}}/>
                </div>
                <div>
                  <a href='https://nova.tcon.app' className='cube-link' >
                    <img src={three} alt="two" style={{width: '300px', height: '300px'}}/>
                  </a>
                </div>
                <div>
                  <a href='https://airline.tcon.app' className='cube-link'>
                    <img src={four} alt="two" style={{width: '300px', height: '300px'}}/>
                  </a>
                </div>
                <div>
                  <a href='https://survivorpool.tcon.app'className='cube-link'>
                    <img src={five} alt="two" style={{width: '300px', height: '300px'}}/>
                  </a>
                </div>
                <div>
                  <a href='https://github.com/TCON163'className='cube-link'>
                    <img src={six} alt="two" style={{width: '300px', height: '300px'}}/>
                  </a>
                </div>
            </Cube>
            </div>
            <button className='proceed button-1'><Link to="/home"> Proceed to HomePage</Link></button>
        </center>

        
      </div>
    );
  }
}
export default PortCube