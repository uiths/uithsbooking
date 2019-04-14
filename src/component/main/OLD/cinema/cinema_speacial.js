import React, {Component} from 'react';
import {  Link } from "react-router-dom";


class Cinema_special extends Component {
    render() {
        return (
            <div id="features" className="text-center ">
                <div className="container-fluid title_movie">
                    <h3 style={{marginLeft :'10px'}}><Link to = "/cinema" className="btn ">CÁC CỤM RẠP</Link>/<a
                        href="#" className="btn active">RẠP ĐẶC BIỆT</a></h3>
                </div>
                <div className="container-fluid fea-container">
                    <div className="row">
                        <div className="col-sm-6 fea-img">
                            <img src="../../../../../public/img/img_cinema/lamour-1.png" width="100%"/>
                            <div className="fea-fade">
                                <div className="fea-fade-text">
                                    <p className="text-center">
                                        <Link to="/cinema_info_01" className="fea-fade-button">CHI TIẾT</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="fea-img-text-bottom">
                                <p>UIT CINEMA</p>
                                <p>LAMOUR</p>
                            </div>
                        </div>
                        <div className="col-sm-6 fea-img">
                            <img src="../../../../../public/img/img_cinema/screenx-1.jpg" width="100%"/>
                            <div className="fea-fade">
                                <div className="fea-fade-text">
                                    <p className="text-center">
                                        <Link to="/cinema_info_01" className="fea-fade-button">CHI TIẾT</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="fea-img-text-bottom">
                                <p>UIT CINEMA</p>
                                <p>SCREEN-X</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cinema_special;