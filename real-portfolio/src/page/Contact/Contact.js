import { useState} from 'react';
import "./Contact.css";
import NavBar from '../../utils/NavBar';

function Contact() {

    const [click, setClick] = useState(false);
    const [click1, setClick1] = useState(false);

    const onC = () => {
        setClick(!click)
    }
    const onC1 = () => {
        setClick1(!click1)
    }

    return (
    <div className='wall'>
        <NavBar />
        <div className='v-center contact'>
            <div>
            <h3 style={{fontSize: '35px'}}>My Phone Number:</h3>
            
            <h3 style={{color: 'yellow', fontSize: click ? "30px" : ""}} onClick={onC}>{click ? "(251) 487-2789":"10010101 11100101 11101001 11010101"}</h3>
            <br />
            <h3 style={{fontSize: '35px'}}>My Email address:</h3>
            <h3  onClick={onC1} style={{overflow: "wrap", width: "400px", color: 'yellow', fontSize: click1 ? "30px" : ""}}>{click1 ? "tylerconnercareersearch@gmail.com" : "01110100 01111001 01101100 01100101 01110010 01100011 01101111 01101110 01101110 01100101 01110010 01100011 01100001 01110010 01100101 01100101 01110010 01110011 01100101 01100001 01110010 01100011 01101000 01000000 01100111 01101101 01100001 01101001 01101100 00101110 01100011 01101111 01101101"
}</h3>
            </div>
        </div>
    </div>
    );
}


export default Contact;