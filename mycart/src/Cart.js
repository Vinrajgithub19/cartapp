import React from 'react';
import CartItemm from './CartItemm';


const Cart =(props)=> {
     const{products = []}= props;
               return (
           <div className='cart'>
                {products.map((product) => {
                    return (
                    <CartItemm 
                    product={product}
                    key={product.id}
                            onIncreaseQuantity={props.onIncreaseQuantity}
                            onDecreaseQuantity={props.onDecreaseQuantity}
                            onDeleteProduct={props.onDeleteProduct}
                    /> 
                    )
                    })}
                 </div>
        );
    
}


export default Cart;