import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
    render() {
        return (
            <div className="banner banner-1 banner-4 light-banner">
                <div className="banner-item">
                    <div className="banner-inner bg-cover bg-center dark-overlay dark-overlay-2" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/subheader-durum.jpeg)" }}>
                        <div className="container">
                            <img src={process.env.PUBLIC_URL + "/assets/img/Logo.png"} alt="img" />
                            <h1 className="title">DÜRÜM GURMESİNDEN EN LEZZETLİ DÜRÜMLER</h1>
                            <p className="subtitle">
                                Sizler için kaliteli malzemelerden leziz dürümler hazırlıyoruz, hem de ekonomik fiyatlara...  
                              </p>
                            <Link to="/menu-v1" className="btn-custom primary">Menüyü Görüntüleyin</Link>
                        </div>
                        {/* <div className="banner-bottom-img">
                            <img src={process.env.PUBLIC_URL + "/assets/img/veg/2.png"} alt="veg" />
                            <img src={process.env.PUBLIC_URL + "/assets/img/prods/3.png"} alt="pizza" />
                            <img src={process.env.PUBLIC_URL + "/assets/img/veg/12.png"} alt="veg" />
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;