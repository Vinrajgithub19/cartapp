import React from 'react';

    const Navbar = (props) => {
         return (
            <div style={style.nav}>
                <div style={style.CartIconContainer}>
                    <img  style={style.cartIcon}  src='https://cdn-icons-png.flaticon.com/128/3523/3523885.png' alt='cart-icon'/>
                    <span style={style.CartCount}>{props.count}</span>
               </div>
            </div>
        );
    
}
const style = {

    cartIcon:{
        height:31,
        marginRight: 20
    },
nav: {
        height: 70,
        background:'blue',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'

    },
    CartIconContainer:{
        position:'relative'
    },
    CartCount:{
  background:'yellow',
   borderRadius: '50%',
   padding : '4px 8px',
   position: 'absolute',
   right:0,
   top:-9
    }
    
};

export default Navbar;