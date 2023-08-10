import React from "react";
import Navbar from './Navbar';
import Navbar2 from './Navbar2'
import Navbar3 from "./Navbar3";
import Main1 from './Main1'
import Main2 from './Main2'
import Main3 from './Main3'
import Main4 from './Main4'
import Main5 from './Main5'
import Footer from './Footer'


function Home(){

    return (
    <>
         <Navbar />
         <Navbar2 />
         <Navbar3 />
         
         <Main1 />
         <Main2 />
         <Main3 />
         <Main4 />
         <Main5 />
         <Footer />
           {/* {CategoryDiv} */}
    </>
    )
}


export default Home;