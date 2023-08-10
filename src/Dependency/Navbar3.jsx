import React from "react";
import Ali from '../Images/Ali.png';
import { TfiSearch } from 'react-icons/tfi'
import { BsCart2 } from 'react-icons/bs'
function Navbar3() {
    return (
        <div className="navbar3">
            <div style={{ display: "flex" }}>
                <p style={{ position: 'relative', left: '130px', }}><img src={Ali} alt="ali" width='50%' /> </p>
                <div className="ali"><input type="text" placeholder="iphone 13 pro max"  ></input>  </div>
                <p style={{ position: "relative", top: '9px', left: '8px', borderRadius: '5px' }}><TfiSearch /></p>
                <div style={{ marginLeft: '90px', fontSize: 'xx-large' }}><BsCart2 /></div>
            </div>

            <div style={{ display: 'flex', gap: '15px', marginLeft: '350px' }}>
                <p>  human hair wigs </p>
                <hr />
                <p>apple watch band</p>
                <hr />
                <p>necklace for women</p>
                <hr />
                <p>fishing</p>
                <hr />
                <p>nails</p>
                <hr />
                <p>gel nail polish</p>
            </div>
        </div>
    )
}


export default Navbar3;