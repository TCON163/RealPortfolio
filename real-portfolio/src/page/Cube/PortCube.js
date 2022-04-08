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


class PortCube extends React.Component {
  render() {
    return (
      <div className='wall'>
        <h1 className='banner'>Tyler Conner - FullStack Software Engineer</h1>
        <h3 className='sub-banner'>(Rotate cube to check out some projects.)</h3>
        <center>
            
            <div
            style={{
                width: 300,
                height: 300
            }}
            >

            <Cube size={300} index="front">
                <div>
                  <img src={one} alt="one" style={{width: '300px', height: '300px'}} />
                </div>
                <div>
                  <img src={two} alt="two" style={{width: '300px', height: '300px'}}/>
                </div>
                <div>
                <img src={three} alt="two" style={{width: '300px', height: '300px'}}/>
                </div>
                <div>
                <img src={four} alt="two" style={{width: '300px', height: '300px'}}/>
                </div>
                <div>
                <img src={five} alt="two" style={{width: '300px', height: '300px'}}/>
                </div>
                <div>
                <img src={six} alt="two" style={{width: '300px', height: '300px'}}/>
                </div>
            </Cube>
            </div>
            <button className='proceed'><Link to="/home"> Proceed to HomePage</Link></button>
        </center>

        
      </div>
    );
  }
}
export default PortCube