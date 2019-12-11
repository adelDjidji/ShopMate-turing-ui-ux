import React from 'react'
import ShopBadge from "../Components/shopBadge"
export default () => {
    return (<div className="header row">
        <div className="col-lg-3">
            <b>Hi! <a href="#">Signin</a> or <a href="#">Register</a></b>
        </div>
        <div className="col-lg-4">
            <b style={{ marginRight: '15pt' }}>Daily deals</b>
            <b style={{ marginRight: '15pt' }}>Sell </b>
            <b style={{ marginRight: '15pt' }}>Help & contact</b>
        </div>
        <div className="col-lg-2" >
            <img className="icon" style={{ marginRight: '7pt', marginBottom: '5pt' }} src="Icon/gbr.png" alt="" />
            <b>£ GBP</b>
        </div>

        <div className="col-lg-2" style={{ textAlign: 'right', width: '23%' }}>
            <ShopBadge theme="dark" number={6} />
            <b style={{marginLeft: "18pt"}}>   Your Bag : 34.5 £</b>
        </div>
    </div>)
}