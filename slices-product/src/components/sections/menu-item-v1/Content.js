import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getProduct } from '../../../helper/Producthelper';
import productcategory from "../../../data/products-category.json";

import { Tab, Nav } from "react-bootstrap";
import Relatedproduct from '../../layouts/Relatedproductone';
import {connect} from 'react-redux';
import {addToCart} from '../../../actions/cartActions';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 1,
            sizeIndex: 0,
            item: getProduct(this.props.productId,this.props.products),
            totalPrice: getProduct(this.props.productId,this.props.products).price,
            price: getProduct(this.props.productId,this.props.products).price
        };
        this.ChangeSize = this.ChangeSize.bind(this);
    }
    IncrementItem = () => {
        this.setState({ clicks:  parseInt(this.state.clicks, 10) + 1 ,
          totalPrice: (parseInt(this.state.clicks, 10) + 1) * this.state.price
    
        });
      };
    
      DecreaseItem = () => {
        if (this.state.clicks < 1) {
          this.setState({
            clicks: 0,
            totalPrice: 0
          });
        } else {
          this.setState({
            clicks: this.state.clicks - 1,
            totalPrice: (this.state.clicks -1) * this.state.price
          });
        }
      };
    
     ChangeSize(i) {
    
        this.setState({
            sizeIndex: i,
            price: this.state.item.sizes[i].price,
            totalPrice: this.state.clicks * this.state.item.sizes[i].price
        })
      };

    handleChange(event) {
        this.setState({ clicks: event.target.value });
    }
    
    onClickAddProduct (item, size, quantity, description, e){
        e.preventDefault();
        this.props.addToCart(item, size, quantity, description);
    }

    render() {
        const productId = this.props.productId;
        const item = getProduct(productId,this.props.products);
        return (
            <Fragment>
                <div className="section product-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                {/* Main Thumb */}
                                <div className="product-thumb">
                                    <img src={process.env.PUBLIC_URL + "/" + item.img} alt={item.name} />
                                </div>
                                {/* /Main Thumb */}
                            </div>
                            <div className="col-md-7">
                                <div className="product-content">
                                    {/* Product Title */}
                                    <h2 className="title">{item.name}</h2>
                                    {/* /Product Title */}
                                    <div className="favorite">
                                        <i className="far fa-heart" />
                                    </div>
                                    {/* Price */}
                                    <div className="price-wrapper">
                                        <p className="product-price">{new Intl.NumberFormat().format((item.price).toFixed(2))}₺</p>
                                    </div>
                                    {/* /Price */}
                                    {/* Product Short Description */}
                                    <p>{item.shortdesc}</p>
                                    {/* /Product Short Description */}
                                    {/* Variations */}
                                    <div className="customize-variations">
                                        <div className="customize-size-wrapper">
                                            <h5>Porsiyon Tipi:  </h5>
                                            {item.sizes.map((item, i) => (
                                                <div key= {"item-size-" + i} 
                                                className={
                                                    this.state.sizeIndex === i ? "customize-size active" : "customize-size"
                                                  }
                                                  onClick={()=>{this.ChangeSize(i)}}
                                                    >
                                                    {item.name}
                                                </div>
                                            ))}
                                        </div>
                                    
                                    </div>
                                    {/* /Variations */}
                                    {/* Add To Cart Form */}
                                    <form className="atc-form" method="post">
                                        <div className="form-group">
                                            <label>Adet</label>
                                            <div className="qty">
                                                <span className="qty-subtract" onClick={this.DecreaseItem}><i className="fa fa-minus" /></span>
                                                <input type="text" name="clicks" value={this.state.clicks} onChange={this.handleChange.bind(this)} />
                                                <span className="qty-add" onClick={this.IncrementItem}><i className="fa fa-plus" /></span>
                                            </div>
                                        </div>
                                        <button onClick = {(e) => this.onClickAddProduct(item, this.state.sizeIndex ,this.state.clicks ,"", e)}  type="submit" name="button" className="btn-custom secondary"> SİPARİŞ VER <i className="fas fa-shopping-cart" /> </button>
                                    </form>
                                    {/* /Add To Cart Form */}
                                    {/* Product Meta */}
                                    <ul className="product-meta">
                                        <li>
                                            <span>Kategoriler: </span>
                                            <div className="product-meta-item">
                                                {item.category.slice(0, 2).map((category) => (
                                                    productcategory.filter(item => {
                                                        return item.id === category
                                                    }).map((categories, i) => (
                                                        <Link key={i} to="#">{categories.title} {i=== item.category.length -1 ? '' : ',' } </Link>
                                                    ))
                                                ))}
                                            </div>
                                        </li>
                                    </ul>
                                    {/* /Product Meta */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section pt-0">
                    <div className="container">
                        {/* Additional Information Start */}
                        <div className="product-additional-info">
                            <Tab.Container defaultActiveKey="tab1">
                                <Nav variant="tabs" className="nav">
                                    <Nav.Item>
                                        <Nav.Link eventKey="tab1">Açıklama</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="tab1">
                                        <h4>Açıklama</h4>
                                        <div dangerouslySetInnerHTML={{ __html: item.shortdesc }} />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                        {/* Additional Information End */}
                    </div>
                </div>
                <Relatedproduct />
            </Fragment>
        );
    }
}



export default connect((state) => ({products:state.products.items}),{

    addToCart
  })(Content);