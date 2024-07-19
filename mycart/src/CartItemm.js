import React from 'react';

const CartItemm = (props) =>  {

  const{ price,title,qty } = props.product;
  const { product,
          onIncreaseQuantity,
          onDecreaseQuantity,
          onDeleteProduct }=props;

    return(
       <div className='cart-item'>
      <div className='left-block'><img style={styl.image} src={product.img}/>
      </div>
      <div className='right-block'>
        <div style={{fontSize:25}}>{title}</div>
        <div style={{color : '#777'}}>RS{price}</div>
          <div style={{ color: '#777' }}>Qty:{qty}</div>
        <div className='cart-}item-action'>
            <img alt='increase'
             onClick={()=> onIncreaseQuantity(product)}
             className='action-icons'
              src='https://cdn-icons-png.flaticon.com/128/992/992651.png'/>
            <img alt='decrease'
             onClick={()=> onDecreaseQuantity(product)}
             className='action-icons' 
              src='https://cdn-icons-png.flaticon.com/128/56/56889.png'/>
            <img alt='delete' className='action-icons'
              onClick={() => onDeleteProduct(product.id) }
             src='https://cdn-icons-png.flaticon.com/128/6861/6861362.png'/>
        </div>
    </div>
  </div>
);
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