import React from 'react';

class CartItemm extends React.Component{
  constructor(){
      super();
     this.state={
      price: 99,
      title: 'phone',
      qty:1,
      img:''
    }
    // this.increaseQuantity= this.increaseQuantity.bind(this)
  }
increaseQuantity = () => {
console.log('this',this.state);
}

render(){
  const{ price, title, qty } = this.state;
    return(
       <div className='cart-item'>
      <div className='left-block'><img style={styl.image}/>
      </div>
      <div className='right-block'>
        <div style={{fontSize:25}}>{title}</div>
        <div style={{color : '#777'}}>RS{price}</div>
          <div style={{ color: '#777' }}>Qty:{qty}</div>
        <div className='cart-}item-action'>
            <img alt='increase' onClick={this.increaseQuantity}
             className='action-icons' src='https://cdn-icons-png.flaticon.com/128/992/992651.png'/>
            <img alt='decrease' className='action-icons' src='https://cdn-icons-png.flaticon.com/128/56/56889.png'/>
            <img alt='delete' className='action-icons' src='https://cdn-icons-png.flaticon.com/128/6861/6861362.png'/>
        </div>
    </div>
  </div>
);
}
}


const styl = {
    image: {
        height: 90,
        width: 90,
        borderRadius: 4,
        background: "#ccc"
    }
  }

export default CartItemm;