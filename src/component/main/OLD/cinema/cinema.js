import React, {Component} from 'react';
import {  Link } from "react-router-dom";


class Cinema extends Component {
    render() {
        return (
            <div id="features" className="text-center ">
                <div className="container-fluid title_movie">
                    <h3 style={{marginLeft :'10px'}}><a href="#" className="btn active">CÁC CỤM RẠP</a>/<Link
                       to="/cinema_speacial" className="btn ">RẠP ĐẶC BIỆT</Link></h3>
                </div>
                <div className="container-fluid fea-container">
                    <div className="row">
                        <div className="col-sm-4 fea-img">
                            <img src="../../../../../public/img/img_cinema/cinema.png" width="100%"/>
                            <div className="fea-fade">
                                <div className="fea-fade-text fix-fea-fade-text-combo">
                                    <p className="text-center">
                                        <Link to="/cinema_info_01" className="fea-fade-button">CHI TIẾT</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="fea-img-text-bottom">
                                <p>UIT CINEMA</p>
                                <p>BÌNH DƯƠNG</p>
                            </div>
                        </div>
                        <div className="col-sm-4 fea-img">
                            <img src="../../../../../public/img/img_cinema/cinema.png" width="100%"/>
                            <div className="fea-fade">
                                <div className="fea-fade-text fix-fea-fade-text-combo">
                                    <p className="text-center">
                                        <Link to="/cinema_info_01" className="fea-fade-button">CHI TIẾT</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="fea-img-text-bottom">
                                <p>UIT CINEMA</p>
                                <p>THỦ ĐỨC</p>
                            </div>
                        </div>

                        <div className="col-sm-4 fea-img ">
                            <img src="../../../../../public/img/img_cinema/cinema.png" width="100%"/>
                            <div className="fea-fade">
                                <div className="fea-fade-text fix-fea-fade-text-combo">
                                    <p className="text-center">
                                        <Link to="/cinema_info_01" className="fea-fade-button">CHI TIẾT</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="fea-img-text-bottom">
                                <p>UIT CINEMA</p>
                                <p>BÌNH THẠNH</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cinema;