import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Scrollbar from 'react-perfect-scrollbar';
import cartitem from '../../data/cartlist.json';
import cart from '../../data/cartsample.json';
import  {connect} from 'react-redux';
import {addToCart,removeFromCart} from '../../actions/cartActions';
import {fetchProducts} from '../../actions/productActions';

const priceTotal = cart.reduce((totalPrice, cartItem) => totalPrice + cartItem.item.price * cartItem.quantity, 0);

class Cartlist extends Component {
    
  

    render() {
        return (
            <Fragment>
                <div className="cart-sidebar-body">
                    <Scrollbar className="cart-sidebar-scroll" style={{ height: "100vh" }}>
                        {cart.map((cartItem, i) => (
                            <div key={i} className="cart-sidebar-item">
                                <div className="media">
                                    <Link to="/menu-item-v1/1">
                                        <img src={process.env.PUBLIC_URL + "/" + cartItem.item.img} alt={cartItem.item.name} />
                                    </Link>
                                    <div className="media-body">
                                        <h5> <Link to="/menu-item-v1/1" title={cartItem.item.name}>{cartItem.item.name}</Link> </h5>
                                        <span>{cartItem.quantity}x {new Intl.NumberFormat().format((cartItem.item.price).toFixed(2))}₺</span>
                                    </div>
                                </div>
                                <div className="cart-sidebar-item-meta">
                                    {cartItem.item.sizes.map((size, i) => {
                                       return size.id === cartItem.size ? 
                                       <span >{size.name}</span>
                                        :
                                        ""
                                    })}
                                    <span key={i}>{cartItem.description}</span>
                                </div>
                                <div className="cart-sidebar-price">
                            </div>
                                <div className="close-btn">
                                    <span />
                                    <span />
                                </div>
                            </div>
                        ))}
                    </Scrollbar>
                </div>
                <div className="cart-sidebar-footer">
                    <h4>Total: <span>{new Intl.NumberFormat().format((priceTotal).toFixed(2))}₺</span> </h4>
                    <button type="button" className="btn-custom">SİPARİŞ VER</button>
                </div>
            </Fragment>
        );
    }
}


export default connect((state) => ({products:state.products.items}),{
    addToCart,
    removeFromCart,
    fetchProducts
  })(Cartlist);