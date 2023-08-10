import React from 'react'
import item from './item'

import {MdOutlineSelfImprovement} from 'react-icons/Md'
import {GiCementShoes}  from 'react-icons/Gi'
import {FcIphone} from 'react-icons/Fc'
  
function Sidebar(props){
    const {icon , text} = props
    return(
        <div>{icon} {text}</div>
    )
}
export default Sidebar;