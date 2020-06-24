import React from 'react';
import Purse from './images/purse-bags-removebg-preview.png';

function Quick(){
    return(
        <div style={{height: '90vh', marginTop: '4vh'}}>
            <div style={{borderRight: '1px solid #999393',borderBottom: '1px solid #999393', height: '30vh', width: '15vw'}}>
                <div class='row' style={{width: '20vw', marginBottom: '2vh'}} >
                    <div class='col-md-3' >
                        <img src='images/purse-bags-removebg-preview.png' style={{paddingLeft: '1.5vw',height: '3vh', width: '3vw'}} />   
                    </div>
                    <div>
                         <span style={{color: '#2c2370'}}>Purse</span>
                    </div>
                </div>
                <div class='row' style={{width: '20vw',marginBottom: '2vh'}} >
                    <div class='col-md-3' >
                        <img src='images/hand-bags.jpg'style={{paddingLeft: '1.5vw',height: '3vh', width: '3vw'}} />   
                    </div>
                    <div>
                        <span style={{color: '#2c2370'}}>Hand Bags</span>
                    </div>
                </div>
                <div class='row' style={{width: '20vw',marginBottom: '2vh'}}>
                    <div class='col-md-3'>
                        <img src='images/shoulder-bags.jpg' style={{paddingLeft: '1.5vw',height: '3vh', width: '3vw'}}/>
                    </div>
                    <div>
                        <span style={{color: '#2c2370'}}>Shoulder Bags</span>
                    </div>
                </div>
                <div class='row' style={{width: '20vw', marginBottom: '2vh'}}>
                    <div class='col-md-3'>
                        <img src='images/wallet-removebg-preview.png' style={{paddingLeft: '1.5vw',height: '3vh', width: '3vw'}}/>
                    </div>
                    <div>
                        <span style={{color: '#2c2370'}}>Wallet</span>
                    </div>
                </div>
                <div class='row' style={{width: '20vw', marginBottom: '2vh'}}>
                    <div class='col-md-3'>
                        <img src='/images/laptop bag.jpg' style={{paddingLeft: '1.5vw',height: '3vh', width: '3vw'}}/>
                    </div>
                    <div>
                        <span style={{color: '#2c2370'}}>Laptop Bags</span>
                    </div>
                </div>
                
            </div>
            
                
            
        </div>
    )
}

export default Quick;
