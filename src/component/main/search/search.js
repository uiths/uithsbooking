import React, {Component} from 'react';

class Search extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div id="features" className="text-left ">
                        <h3>300+ Homes </h3>
                        <div className="container fea-container">
                            <div className="row">
                                <div className="col-sm-3 fea-img">
                                    <img src="../img/img_bookhouse/house1.jpg" width="100%"/>
                                    <div className="fea-fade">
                                        <div className="fea-fade-text">
                                            <p className="text-center">
                                                <button className="fea-fade-button">Chi tiết</button>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="fea-img-text-bottom">
                                        <p>Nhà 1</p>
                                        <p>Hồ Chí Minh</p>
                                    </div>
                                </div>
                                <div className="col-sm-3 fea-img">
                                    <img src="../img/img_bookhouse/house1.jpg" width="100%"/>
                                    <div className="fea-fade">
                                        <div className="fea-fade-text">
                                            <p className="text-center">
                                                <button className="fea-fade-button">Chi tiết</button>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="fea-img-text-bottom">
                                        <p>Nhà 2</p>
                                        <p>Hà Lội</p>
                                    </div>
                                </div>

                                <div className="col-sm-3 fea-img ">
                                    <img src="../img/img_bookhouse/house1.jpg" width="100%"/>
                                    <div className="fea-fade">
                                        <div className="fea-fade-text">
                                            <p className="text-center">
                                                <button className="fea-fade-button">Chi tiết</button>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="fea-img-text-bottom">
                                        <p>Nhà 3</p>
                                        <p>USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Search;