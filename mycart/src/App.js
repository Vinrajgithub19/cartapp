import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'watch',         
          qty: 1,
          img: 'data:image/jpeg;base64,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',
          id: '1'
        },
        {
          price: 999,
          title: 'laptop',
          qty: 2,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81kXSR8mWmQl7cPD7p24cNEkK-uIx7G893g&usqp=CAU',
          id: '2'
        },
        {
          price: 99,
          title: 'mcbook',
          qty: 1,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81kXSR8mWmQl7cPD7p24cNEkK-uIx7G893g&usqp=CAU',
          id: '3'
        },
        {
          price: 99,
          title: 'boat',
          qty: 1,
          img: 'https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/g/w/d/42-9-android-ios-wave-call-smart-talk-with-bluetooth-calling-original-imagpcbbskhqtmdu.jpeg?q=70',
          id: '4'
        }
      ]
    };
  }

  handleIncreaseQuantity = (product) => {
    console.log('This is the function to increase quantity', product);
    const { products } = this.state;
    const ind = products.indexOf(product);

    products[ind].qty += 1;
    this.setState({
      products: products
    });
  }

  handleDecreaseQuantity = (product) => {
    console.log('This is the function to decrease quantity', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;
    this.setState({
      products: products
    });
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items
    });
  }
 getCartCount=()=>{
  const {products}=this.state;
  
  let count= 0;

    products.forEach((product) =>{ 
    count += product.qty;
      })
       
      return count ;
 }
  getCartTotal=()=>{
    const{products}=this.state;

    let cartTotal = 0;
     
    products.forEach((product)=>{
      cartTotal += product.qty * product.price
    })
    return cartTotal;
  }
  render() {
    const { products } = this.state;

    return (
      <div className="App">
        <Navbar   count={this.getCartCount()} />
         <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />  <div style={{
          fontSize: 20, padding: 10}}>
          Total:  { this.getCartTotal() }
        </div>
        </div>
     
      
    );
  }
}

export default App;
