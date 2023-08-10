import React from 'react'
import Main2one from './Main2one'
import Main2two from './Main2two'
import seller from './seller'   
import price from './price'


function Main2(){
      const sellerDiv = seller.map((seller) => (<div key={seller.img}><Main2one
        img= {seller.img}
        price= {seller.price}
        code= {seller.code} /></div>))

        const priceDiv = price.map((price) => <div key={price.img}> <Main2two
        img={price.img}
        price={price.price}
        per={price.per} /> </div>)
    return(
        <div style={{display: 'flex', justifyContent: 'center', gap: '15px', backgroundColor: ' rgba(128, 128, 128, 0.082)'}}>
        <div className='main2one'>
             <div style={{ display: 'flex', padding: '10px 10px'}} >
                <div style={{marginRight: 'auto'}}>
                    <h3>Exclusive Seller Codes</h3>
                    <p style={{fontSize: '13px'}}>Big markdowns on popular items</p>
                </div>
                <div><p>View more</p></div>
                
             </div>
             <div style={{display: 'flex', padding:'10px 10px',justifyContent: 'space-around'}}>{sellerDiv} </div>
        </div>
        <div className='main2two'>
        <div style={{ display: 'flex', padding: '10px 10px'}} >
                <div style={{marginRight: 'auto'}}>
                    <h3>Weekly Deals</h3>
                    <p style={{fontSize: '13px'}}>Low price for 30 days</p>
                </div>
                <div><p>View more</p></div>
             </div>

             <div style={{display: 'flex', justifyContent: 'space-around'}}> {priceDiv} </div>
        </div>
        </div>
    )
}
export default Main2;