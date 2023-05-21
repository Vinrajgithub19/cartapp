import React from 'react';
 
class CartItem extends React.Component{
    constructor() {
        super();
        this.state = {
            price: 99,
             title: ' watch',
              qty: 1,
               img: " "
        }
        }
    }
    

    
increaseQuantity = ()=> {
      this.setState((prevstate)=> {
      return{
      qty:prevstate.qty+1
   }
   });
   }
 decreaseQuantity = () =>{
        const{qty}= this.state;
           if(qty=== 0){
            return
        }
          this.setState((prevstate)=>{
            return{
            qty:prevstate.qty-1
            }
        });
    }

    render() {
        const { price,qty, title} = this.state;
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={style.image} />
                </div>
                <div className='right-block'> 
                <div style={{fontSize:30}}> {title} </div>
                <div style={{ color:"#777" }}>Rs {price}</div>
                <div style={{color:"#777"}}>Qty:{qty}</div>
                   <div className='cart-item-actions'>
                 {/*buttons */}
                        <img alt="increase" 
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                            onClick={ this.increaseQuantity } />
                       <img alt="decrease" 
                       className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/128/5974/5974627.png" 
                        onClick={this.decreaseQuantity }/>
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/484/484662.png" />
                    </div>
                </div>
            </div>

        );
    }

const style ={
    image:{
        height:90,
        width:90,
        borderRadius:4,
        background:"#777"
    }

}

export default CartItem;