import React from 'react'
import {MdOutlineArrowDropDown} from 'react-icons/Md'
import {GiSmartphone} from 'react-icons/Gi'
import {GiNigeria} from 'react-icons/Gi'
import {GiSelfLove} from 'react-icons/Gi'
import {MdOutlinePersonOutline} from 'react-icons/Md'
function Navbar2() {
    const [sell, setSell] = React.useState(false);
    const [help, setHelp] = React.useState(false)
    const [person, setPerson] = React.useState(false)
    const handleMouseOver = () => {

        setSell(true)
    };
    const handleMouseOut = () => { 
        setSell(false)
    }
     const helpMouseOver =()=>{
        setHelp(true)
     }
        const helpMouseOut=()=>{
            setHelp(false)
        }
        const personMouseOver =()=>{
            setPerson(true)
        }
        const PersonMouseOut = () =>{
            setPerson(false)
        }
        const personHiddenMouseOver =()=>{
            setPerson(true)
        }
        const personHiddenMouseOut =()=>{
            setPerson(false)
        }

  
  

  return(<div className='navbar2' style={{display:'flex'}}>
    <div>
        <p onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut}>Sell on AliExpress  <MdOutlineArrowDropDown/></p>
        { sell &&<p>Seller login</p>}
        { sell&&<p>Non-chinesse seller registration</p>}
       
    </div>
    <hr/>
     <div>
     <p onMouseOver={helpMouseOver}
     onMouseOut={helpMouseOut}>Help <MdOutlineArrowDropDown/></p>
     {help&&<p>Help center</p>}
     {help&&<p>Dispute & Report</p>}
     {help&&<p>Report IPR Infringement</p>}
     </div>
     <div>Buyer protection
     </div>
     <div><p> <GiSmartphone/> App</p></div>
     <hr/>

     <div>
        <p> <GiNigeria/>  / English  / NGN <MdOutlineArrowDropDown/> </p>
     </div>
     <hr/>

     <div>
        <p> <GiSelfLove/>  Wish List </p>
     </div>
     <div>
        <p onMouseOver={personMouseOver}
        onMouseOut={PersonMouseOut}> <MdOutlinePersonOutline/>   Account  <MdOutlineArrowDropDown/> </p>
        { person&& <div className='welcome'
         onMouseEnter={personHiddenMouseOver}
                         onMouseLeave={personHiddenMouseOut}
                         style={{width: '150px' , cursor:'pointer'}}>
            <p>Welcome to AliExpress!</p>
            <p> <button style={{width:'60px', height: '25px', backgroundColor:'red', color:'white', border:'none', cursor:'pointer'}}>Register</button >  <button style={{width:'50px', height: '25px', backgroundColor:'white', color:'red', border:'none',cursor:'pointer'}}>Sign in</button></p>
            <p>My Orders</p>
            <p>My Coins</p>
            <p>Message center</p>
            <p>Payment</p>
            <p>Wish List</p>
            <p>My Favorite stores</p>
            <p>My Coupons</p>


            </div>}
     </div>



 </div>
  )
    
     
}

export default Navbar2;