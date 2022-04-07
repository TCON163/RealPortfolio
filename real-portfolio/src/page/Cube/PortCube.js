import * as React from 'react';
import './PortCube.css'
import Cube from 'react-3d-cube';
import one from '../assets/1.PNG';
import two from '../assets/2.PNG';
import three from '../assets/3.PNG';
import four from '../assets/4.PNG';
import five from '../assets/5.PNG';
import six from '../assets/6.PNG';


class PortCube extends React.Component {
  render() {
    return (
      <div>
        <center>
            <h1>react-3d-cube</h1>
            <br></br>
            <br></br>
            <div
            style={{
                width: 400,
                height: 400
            }}
            >

            <Cube size={400} index="front">
                <div>
                  <img src={one} alt="one" style={{width: '400px', height: '400px'}} />
                </div>
                <div>
                  <img src={two} alt="two" style={{width: '400px', height: '400px'}}/>
                </div>
                <div>
                <img src={three} alt="two" style={{width: '400px', height: '400px'}}/>
                </div>
                <div>
                <img src={four} alt="two" style={{width: '400px', height: '400px'}}/>
                </div>
                <div>
                <img src={five} alt="two" style={{width: '400px', height: '400px'}}/>
                </div>
                <div>
                <img src={six} alt="two" style={{width: '400px', height: '400px'}}/>
                </div>
            </Cube>
            </div>
        </center>
      </div>
    );
  }
}
export default PortCube