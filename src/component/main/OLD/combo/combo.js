import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Combo extends Component {
    render() {
        return (
            <div id="features" className="text-center ">
                <div className="container-fluid title_movie">
                    <h3 className="text-center"><a href="#" className="btn active">ƯU ĐÃI</a></h3>
                </div>
                <div className="container fea-container">
                    <div className="row">
                        <div className="col-sm-4 fea-img">
                            <img src="../../../../../public/img/OLD/img_combo/1.png" width="100%"/>
                            <div className="fea-fade">
                                <div className="fea-fade-text fix-fea-fade-text-combo">
                                    <p className="text-center">
                                        <Link to="/payment" className="fea-fade-button">ĐẶT THÊM</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="fea-img-text-bottom">
                                <p>COMBO 1</p>
                                <p>Bugger bò, khoai tây chiên, nước ngọt</p>
                                <p>15 USD</p>
                            </div>
                        </div>
                        <div className="col-sm-4 fea-img">
                            <img src="../../../../../public/img/OLD/img_combo/2.png" width="100%"/>
                            <div className="fea-fade">
                                <div className="fea-fade-text fix-fea-fade-text-combo">
                                    <p className="text-center">
                                        <Link to="/payment" className="fea-fade-button">ĐẶT THÊM</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="fea-img-text-bottom">
                                <p>COMBO 2</p>
                                <p>Bánh Snack kèm sốt, kẹo Mars, nước ngọt</p>
                                <p>6 USD</p>
                            </div>
                        </div>

                        <div className="col-sm-4 fea-img ">
                            <img src="../../../../../public/img/OLD/img_combo/3.png" width="100%"/>
                            <div className="fea-fade ">
                                <div className="fea-fade-text fix-fea-fade-text-combo">
                                    <p className="text-center">
                                        <Link to="/payment" className="fea-fade-button">ĐẶT THÊM</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="fea-img-text-bottom">
                                <p>COMBO 3</p>
                                <p>Bắp rang bơ, kẹo M&M, nước ngọt</p>
                                <p>4 USD</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default Combo;