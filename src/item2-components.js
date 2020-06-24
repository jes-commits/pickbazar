import React from 'react';

function Item2(props){
    return(
        <div style={{backgroundColor: 'white', paddingTop: '2vh'}}>
            <div style={{width: '4vw',height: '4vh', backgroundColor: 'orange', borderRadius: '50px',marginLeft: '140px', marginBottom: '-5vh', marginTop: '2vh'}}>
                <span style={{color: 'white'  }}>20%</span>
            </div>
            <img src={require('./images/bag2-removebg-preview.png')} />
            <p style={{color: '#13166b',fontWeight: 'bolder'}}>{props.name}</p>
            <p style={{color: '#13166b',fontWeight: 'bolder'}}>1pc(%)</p>
            <p style={{color: 'orange',fontWeight: 'bolder', marginLeft: '-11vw'}}>$250</p>
            <div class='container'>
                <div class='row'>
                    <div class='col-md-3'>
                        <p style={{color: '#03fc5e',fontWeight: 'bolder'}}>$200</p>
                    </div>
                    <div style={{marginLeft: '5vw', marginTop: '-1vh'}}>
                        <button style={{width: '6vw', height: '6vh', borderRadius: '50px'}}>
                            <img src='shopping-cart1.png' style={{height: '2vh', width: '2vw'}} />
                            <span style={{marginLeft: '5px', color: '#03fc5e', fontWeight: 'bolder'}}>Cart</span>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item2;