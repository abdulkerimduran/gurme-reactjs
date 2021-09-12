import React, { Component, Fragment } from "react";
import { Modal } from "react-bootstrap";
import { getProduct } from "../../helper/Producthelper";
import {connect} from 'react-redux';
import {fetchProducts} from '../../actions/productActions';

class Quickview extends Component {
   ;
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
    this.setState({ clicks: event.target.value,
               totalPrice: event.target.value * this.state.price
                   });
  }
  render() {
    const productId = this.props.productId;
    const item = getProduct(productId,this.props.products);
    return (
      <Fragment>
        <Modal.Header
          className="modal-bg"
          closeButton
          style={{
            backgroundImage:
              "url(" + process.env.PUBLIC_URL + "/" + item.img + ")",
          }}
        />
        <Modal.Body>
          <div className="customize-meta">
            <h4 className="customize-title">
              {item.name}{" "}
              <span className="custom-primary">
                {new Intl.NumberFormat().format(this.state.price.toFixed(2))} {" "}₺
              </span>{" "}
            </h4>
            <p>{item.shortdesc}</p>
          </div>
          <div className="customize-variations">
            <div className="customize-size-wrapper">
              <h5>Porsiyon Tipi: </h5>
              {item.sizes.map((item, i) => (
                <div
                  key= {"item-size-" + i} 
                  className={
                    this.state.sizeIndex === i ? "customize-size active" : "customize-size"
                  }
                  onClick={()=>{this.ChangeSize(i)}}
                  
                >
                  {item.name}
                </div>
              ))}
            </div>
            {/* <div className="row"> */}
            {/* Variation Start */}
            {/* {item.attributes.slice(0,3).map((item, i) => (
                                <div key={i} className="col-lg-4 col-12">
                                    <div className="customize-variation-wrapper">
                                        <i className={item.icon} />
                                        <h5>{item.name}</h5>
                                        {item.items.map((add, i) => (
                                            <div key={i} className="customize-variation-item">
                                                <div className={"custom-control custom-" + item.type}>
                                                    <input type={item.type} id={add.title + i} name={item.name} className="custom-control-input" />
                                                    <label className="custom-control-label" htmlFor={add.title + i}>{add.title}</label>
                                                </div>
                                                <span>+{new Intl.NumberFormat().format((add.addprice).toFixed(2))}$</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))} */}
            {/* Variation End */}
            {/* </div> */}
          </div>
          <div className="customize-textarea">
            <div>
              <h5>Not: </h5>
            </div>
            <textarea placeholder="Eklemek istediğiniz not..." />
          </div>
          <div className="customize-controls">
            <div className="qty">
              <span className="qty-subtract" onClick={this.DecreaseItem}>
                <i className="fa fa-minus" />
              </span>
              <input
                type="text"
                name="clicks"
                value={this.state.clicks}
                onChange={this.handleChange.bind(this)}
              />
              <span className="qty-add" onClick={this.IncrementItem}>
                <i className="fa fa-plus" />
              </span>
            </div>
            <div
              className="customize-total"
              data-price={new Intl.NumberFormat().format(this.state.price.toFixed(2))}
            >
              <h5>
                Toplam:{" "}
                <span className="final-price custom-primary">
                  {new Intl.NumberFormat().format(this.state.totalPrice.toFixed(2))}{" "}
                  <span>₺</span>{" "}
                </span>{" "}
              </h5>
            </div>
          </div>
          <button type="button" className="btn-custom btn-block">
            SİPARİŞE EKLE
          </button>
        </Modal.Body>
      </Fragment>
    );
  }
}

// export default Quickview;

export default connect((state) => ({products:state.products.items}),{
  fetchProducts
})(Quickview);
