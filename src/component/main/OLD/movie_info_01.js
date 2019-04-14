import React, {Component} from 'react';
import Movie_01 from "./movie_01";
import {Link} from "react-router-dom";

class Movie_info_01 extends Component {
    render() {
        return (
            <div>
                    <div id="features" className="text-center ">
                        <div className="container title_movie mg-left-10">
                            <h3 className="mg-0"><a href="#" className="btn active">THÔNG TIN PHIM</a>
                            </h3>
                        </div>
                        <div className="container fea-container">
                            <div className="row">
                                <div className="col-sm-3 fea-img">
                                    <img src="../../../../public/img/img_home/index_nowshowing/the_nun.jpg" width="100%"/>
                                    <div className="fea-fade">
                                        <button type="button" className="fea-fade-play" data-toggle="modal"
                                                data-target="#myModal"><i className="fa fa-play-circle-o"/></button>
                                    </div>
                                </div>
                                <div className="col-sm-offset-1 col-sm-6 mg-top-25 text-left">
                                    <h3 className="spainBold">THE NUN</h3>
                                    <h4><span className="spainBold">Tên tiếng việt:</span> Ác quỷ ma sơ</h4>
                                    <h4><span className="spainBold">Đạo diễn:</span> jackyJan</h4>
                                    <h4><span className="spainBold">Một số diễn viên chính:</span> Speran,Anna,..</h4>
                                    <h4><span className="spainBold">Nước sản xuất:</span> Mĩ</h4>
                                    <h4><span className="spainBold">Thời lượng:</span> 120 phút</h4>
                                    <h4><span className="spainBold">Lứa tuổi:</span> 18+</h4>
                                    <h4><span className="spainBold">Phụ đề:</span> Có</h4>
                                    <h4><span className="spainBold">Lồng tiếng:</span> Không</h4>
                                    <h4><span className="spainBold">Thể loại:</span> 2D</h4>
                                </div>
                            </div>
                        </div>
                        <div className="container fea-container">
                                    <h4 className="text-left"><span className="spainBold">Giới thiệu:</span> Cái chết bí ẩn của nữ ma sơ điều
                                        gì đang chờ đợi</h4>

                            <Link className="btn slot-button-final center-block" role="button" to="/booking_movie">ĐẶT VÉ</Link>


                        </div>
                    </div>
                {/*movie*/}
                <div className="modal fade" id="myModal" role="dialog">
                    <Movie_01/>
                </div>
            </div>

        );
    }
}

export default Movie_info_01;