import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Aboutus extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-lg-30 ct-single-img-wrapper">
                            <img src={process.env.PUBLIC_URL + "/assets/img/restaurant.jpeg"} alt="img" />
                            <div className="ct-dots" />
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title-wrap mr-lg-30">
                                <h5 className="custom-primary">Dürüm Gurmesi</h5>
                                <h2 className="title">2018'den Beri En Lezzetli Dürümler</h2>
                                <p className="subtitle">
                                    Kaliteli hizmet anlayışından ödün vermeden sizler için en güzel dürümleri hazırlamaya devam ediyoruz.                                     
          </p>
                                <p className="subtitle">
                                    Eğer bu lezzeti hala tatmadıysanız, sizleri de ağırlamaktan mutluluk duyarız. 
          </p>
                               {/* <div className="signature">
                                   <img src={process.env.PUBLIC_URL + "/assets/img/signature.png"} alt="img" />
                                </div> */}
                                
                                <Link to="/menu-v1" className="btn-custom">MENÜMÜZÜ DENEYİN</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aboutus;