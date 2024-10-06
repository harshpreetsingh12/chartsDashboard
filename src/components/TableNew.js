import React, { Component } from 'react';

export default class TableNew extends Component {

  render() {
   
    return (
        <div className='chartBox'>
        <div className='innerChartBox' style={{minHeight:'37px'}}>
          <h1>Account WishList</h1>
        </div>
       <div className='outerTable'>
        <div style={{width:"100%"}} className='tableBox headBx'>
            <p>Account</p>
            <div>
                <p>This month</p>
                <p>Ytd</p>
            </div>
        </div>
        <div style={{width:"100%"}} className='tableBox '>
            <p>Sales</p>
            <div>
                <p>10223</p>
                <p>24324</p>
            </div>
        </div>
        <div style={{width:"100%"}} className='tableBox '>
            <p>Advertising</p>
            <div>
                <p>324324</p>
                <p>211223</p>
            </div>
        </div>
        <div style={{width:"100%"}} className='tableBox '>
            <p>Inventory</p>
            <div>
                <p>2323</p>
                <p>4324</p>
            </div>
        </div>
        <div style={{width:"100%"}} className='tableBox '>
            <p>Product</p>
            <div>
                <p>3434</p>
                <p>234234</p>
            </div>
        </div>
        <div style={{width:"100%"}} className='tableBox '>
            <p>Entertainment</p>
            <div>
                <p>5435.43</p>
                <p>234354</p>
            </div>
        </div>
       </div>
      </div>
    );
  }
}

