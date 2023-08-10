import React from 'react'


function Main2one(props){
    const {img, price, code} = props
    return(
        <div >
          <div>  <img style={{width: '180px', height: '25vh', paddingBottom: '10px'}} src={img} alt="" /> </div>
            <p> <button style={{padding: '5px 10px',border: '2px',borderRadius: '20px', color: 'white', backgroundColor: 'red'}}>{price}</button></p>
            <p style={{ fontSize: '15px', color: 'red'}}>{code}</p>
        </div>
    )
}


export default Main2one;