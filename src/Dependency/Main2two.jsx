import React from 'react'

function Main2two(props){
    const {img, price,per} = props
    return(
        <div>
     <img style={{width: '180px', height: '25vh', padding: '10px'}} src={img} alt="" />
     <p>{price}</p>
     <p><button style={{color: 'white', backgroundColor: 'red', padding: '0 10px'}}>{per}</button></p>
        </div>
    )
}
 export default Main2two;