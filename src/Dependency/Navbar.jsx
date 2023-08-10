import React from 'react';
// import safe from '../Images/safe.png';
import { AiOutlineSkype } from 'react-icons/Ai'
import { AiOutlineSafety } from 'react-icons/Ai'
import bag from '../Images/bag.png'

function Navbar() {
    return (

        <>
            <nav>
                <div className='navbar' style={{ display: 'flex ', width: '100%' }}>
                    <div style={{ fontSize: '20px', display: 'flex' }}> <  AiOutlineSkype style={{  fontSize: '2rem' }} /> <p>Safe Payments </p> </div>
                    <div style={{ fontSize: '20px', display: 'flex', marginLeft: '60px' }}><AiOutlineSafety style={{ fontSize: '2rem' }} /> <p> Security & Privacy </p></div>
                    <div > <img src={bag} alt="bag" /> </div>
                    <div  style={{marginRight: '50px'}}><button  >Get app</button></div>
                </div>
            </nav>




        </>










    )
}



export default Navbar;