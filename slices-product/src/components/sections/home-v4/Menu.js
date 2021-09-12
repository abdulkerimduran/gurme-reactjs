import React, { Component } from 'react';
import { products } from '../../../data/products.json';

class Menu extends Component {
    render() {
        return (
            <div className="section section-padding pt-0">
                <div className="container">
                    <div className="section-title-wrap section-header text-center">
                        <h5 className="custom-primary">Gurme Dürüm Menü</h5>
                        <h2 className="title">Menümüzü Keşfedin</h2>
                        <p className="subtitle">
                            Ekonomik fiyatlarla leziz dürümler ve kebaplar 
      </p>
                    </div>
                    <div className="row">
                        {products.map((item, i) => (
                            <div key={i} className="col-lg-6">
                                <div className="ct-mini-menu-item">
                                    <div className="ct-mini-menu-top">
                                        <h5>{item.title}</h5>
                                        <div className="ct-mini-menu-dots" />
                                        <span className="custom-primary">{new Intl.NumberFormat().format((item.price).toFixed(2))}$</span>
                                    </div>
                                    <div className="ct-mini-menu-bottom">
                                        <p>{item.shortdesc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;