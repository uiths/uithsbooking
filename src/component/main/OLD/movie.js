import React, {Component} from 'react';
import {  Link } from "react-router-dom";
import Movie_01 from "./movie_01";


class Movie extends Component {
    render() {
        return (
            <div>
                <div id="features" className="text-center ">
                    <div className="container-fluid title_movie">
                        <h3><a href="#" className="btn active">PHIM ĐANG CHIẾU</a>/
                            <Link className="btn" to="/movie_commingsoon">PHIM SẮP CHIẾU</Link></h3>
                    </div>
                    <div className="container fea-container">
                        <div className="row">
                            <div className="col-sm-3 fea-img">
                                <img src="../../../../public/img/img_home/index_nowshowing/the_nun.jpg" width="100%"/>
                                <div className="fea-fade">
                                    <button type="button" className="fea-fade-play" data-toggle="modal"
                                            data-target="#myModal"><i className="fa fa-play-circle-o"/></button>
                                    <div className="fea-fade-text">
                                        <hr className="hr-color-orange"/>
                                            <p className="text-center">
                                                <Link to="/movie_info_01" className="fea-fade-button f-left">CHI TIẾT</Link>
                                                <span>18+</span>
                                                <Link to="/booking_movie" className="fea-fade-button f-right">ĐẶT VÉ
                                                </Link>
                                            </p>
                                    </div>
                                </div>
                                <div className="fea-img-text-bottom">
                                    <p>THE NUN</p>
                                    <p>ÁC QUỶ MA SƠ</p>
                                </div>
                            </div>
                            <div className="col-sm-3 fea-img">
                                <img src="../../../../public/img/img_home/index_nowshowing/chuoidunglaymecon.jpg" width="100%"/>
                                <div className="fea-fade">
                                    <button type="button" className="fea-fade-play" data-toggle="modal"
                                            data-target="#myModal"><i className="fa fa-play-circle-o"/></button>
                                    <div className="fea-fade-text">
                                        <hr className="hr-color-orange"/>
                                            <p className="text-center">
                                                <Link to="/movie_info_01" className="fea-fade-button f-left">CHI TIẾT</Link>
                                                <span>18+</span>
                                                <Link to="/booking_movie" className="fea-fade-button f-right">ĐẶT VÉ
                                                </Link>
                                            </p>
                                    </div>
                                </div>
                                <div className="fea-img-text-bottom">
                                    <p>CHÚ ƠI ĐỪNG </p>
                                    <p>LẤY MẸ CON</p>
                                </div>
                            </div>

                            <div className="col-sm-3 fea-img ">
                                <img src="../../../../public/img/img_home/index_nowshowing/shin.jpg" width="100%"/>
                                <div className="fea-fade">
                                    <button type="button" className="fea-fade-play" data-toggle="modal"
                                            data-target="#myModal"><i className="fa fa-play-circle-o"/></button>
                                    <div className="fea-fade-text">
                                        <hr className="hr-color-orange"/>
                                            <p className="text-center">
                                                <button className="fea-fade-button f-left">CHI TIẾT</button>
                                                <span>18+</span>
                                                <Link to="/booking_movie" className="fea-fade-button f-right">ĐẶT VÉ
                                                </Link>
                                            </p>
                                    </div>
                                </div>
                                <div className="fea-img-text-bottom">
                                    <p>SHIN</p>
                                    <p>CẬU BÉ BÚT CHÌ</p>
                                </div>
                            </div>
                            <div className="col-sm-3 fea-img ">
                                <img src="../../../../public/img/img_home/index_nowshowing/joneyEnglish.jpg" width="100%"/>
                                <div className="fea-fade">
                                    <button type="button" className="fea-fade-play" data-toggle="modal"
                                            data-target="#myModal"><i className="fa fa-play-circle-o"/></button>
                                    <div className="fea-fade-text">
                                        <hr className="hr-color-orange"/>
                                            <p className="text-center">
                                                <button className="fea-fade-button f-left">CHI TIẾT</button>
                                                <span>18+</span>
                                                <Link to="/booking_movie" className="fea-fade-button f-right">ĐẶT VÉ
                                                </Link>
                                            </p>
                                    </div>
                                </div>
                                <div className="fea-img-text-bottom">
                                    <p>JohnyEnglish</p>
                                    <p>Điệp viên tái xuất</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container fea-container">
                        <div className="row">
                            <div className="col-sm-3 fea-img">
                                <img src="../../../../public/img/img_home/index_nowshowing/chuchorobotax.jpg" width="100%"/>
                                <div className="fea-fade">
                                    <button type="button" className="fea-fade-play" data-toggle="modal"
                                            data-target="#myModal"><i className="fa fa-play-circle-o"/></button>
                                    <div className="fea-fade-text">
                                        <hr className="hr-color-orange"/>
                                            <p className="text-center">
                                                <button className="fea-fade-button f-left">CHI TIẾT</button>
                                                <span>18+</span>
                                                <Link to="/booking_movie" className="fea-fade-button f-right">ĐẶT VÉ
                                                </Link>
                                            </p>
                                    </div>
                                </div>
                                <div className="fea-img-text-bottom">
                                    <p>THE NUN</p>
                                    <p>ÁC QUỶ MA SƠ</p>
                                </div>
                            </div>
                            <div className="col-sm-3 fea-img">
                                <img src="../../../../public/img/img_home/index_nowshowing/smallfoot.jpg" width="100%"/>
                                <div className="fea-fade">
                                    <button type="button" className="fea-fade-play" data-toggle="modal"
                                            data-target="#myModal"><i className="fa fa-play-circle-o"/></button>
                                    <div className="fea-fade-text">
                                        <hr className="hr-color-orange"/>
                                            <p className="text-center">
                                                <button className="fea-fade-button f-left">CHI TIẾT</button>
                                                <span>18+</span>
                                                <Link to="/booking_movie" className="fea-fade-button f-right">ĐẶT VÉ
                                                </Link>
                                            </p>
                                    </div>
                                </div>
                                <div className="fea-img-text-bottom">
                                    <p>CHÚ ƠI ĐỪNG </p>
                                    <p>LẤY MẸ CON</p>
                                </div>
                            </div>

                            <div className="col-sm-3 fea-img ">
                                <img src="../../../../public/img/img_home/index_nowshowing/acquyvohinh.jpg" width="100%"/>
                                <div className="fea-fade">
                                    <button type="button" className="fea-fade-play" data-toggle="modal"
                                            data-target="#myModal"><i className="fa fa-play-circle-o"/></button>
                                    <div className="fea-fade-text">
                                        <hr className="hr-color-orange"/>
                                            <p className="text-center">
                                                <button className="fea-fade-button f-left">CHI TIẾT</button>
                                                <span>18+</span>
                                                <Link to="/booking_movie" className="fea-fade-button f-right">ĐẶT VÉ
                                                </Link>
                                            </p>
                                    </div>
                                </div>
                                <div className="fea-img-text-bottom">
                                    <p>SHIN</p>
                                    <p>CẬU BÉ BÚT CHÌ</p>
                                </div>
                            </div>
                            <div className="col-sm-3 fea-img ">
                                <img src="../../../../public/img/img_home/index_nowshowing/thienthancongly.jpg" width="100%"/>
                                <div className="fea-fade">
                                    <button type="button" className="fea-fade-play" data-toggle="modal"
                                            data-target="#myModal"><i className="fa fa-play-circle-o"/></button>
                                    <div className="fea-fade-text">
                                        <hr className="hr-color-orange"/>
                                            <p className="text-center">
                                                <button className="fea-fade-button f-left">CHI TIẾT</button>
                                                <span>18+</span>
                                                <Link to="/booking_movie" className="fea-fade-button f-right">ĐẶT VÉ
                                                </Link>
                                            </p>
                                    </div>
                                </div>
                                <div className="fea-img-text-bottom">
                                    <p>JohnyEnglish</p>
                                    <p>Điệp viên tái xuất</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container fea-container">
                        <div className="row">
                            <div className="col-sm-3 fea-img">
                                <img src="../../../../public/img/img_home/index_nowshowing/acquybongdem.jpg" width="100%"/>
                                <div className="fea-fade">
                                    <button type="button" className="fea-fade-play" data-toggle="modal"
                                            data-target="#myModal"><i className="fa fa-play-circle-o"/></button>
                                    <div className="fea-fade-text">
                                        <hr className="hr-color-orange"/>
                                            <p className="text-center">
                                                <button className="fea-fade-button f-left">CHI TIẾT</button>
                                                <span>18+</span>
                                                <Link to="/booking_movie" className="fea-fade-button f-right">ĐẶT VÉ
                                                </Link>
                                            </p>
                                    </div>
                                </div>
                                <div className="fea-img-text-bottom">
                                    <p>THE NUN</p>
                                    <p>ÁC QUỶ MA SƠ</p>
                                </div>
                            </div>
                            <div className="col-sm-3 fea-img">
                                <img src="../../../../public/img/img_home/index_nowshowing/kehoachdoichong.jpg" width="100%"/>
                                <div className="fea-fade">
                                    <button type="button" className="fea-fade-play" data-toggle="modal"
                                            data-target="#myModal"><i className="fa fa-play-circle-o"/></button>
                                    <div className="fea-fade-text">
                                        <hr className="hr-color-orange"/>
                                            <p className="text-center">
                                                <button className="fea-fade-button f-left">CHI TIẾT</button>
                                                <span>18+</span>
                                                <Link to="/booking_movie" className="fea-fade-button f-right">ĐẶT VÉ
                                                </Link>
                                            </p>
                                    </div>
                                </div>
                                <div className="fea-img-text-bottom">
                                    <p>CHÚ ƠI ĐỪNG </p>
                                    <p>LẤY MẸ CON</p>
                                </div>
                            </div>

                            <div className="col-sm-3 fea-img ">
                                <img src="../../../../public/img/img_home/index_nowshowing/donghomathuat.jpg" width="100%"/>
                                <div className="fea-fade">
                                    <button type="button" className="fea-fade-play" data-toggle="modal"
                                            data-target="#myModal"><i className="fa fa-play-circle-o"/></button>
                                    <div className="fea-fade-text">
                                        <hr className="hr-color-orange"/>
                                            <p className="text-center">
                                                <button className="fea-fade-button f-left">CHI TIẾT</button>
                                                <span>18+</span>
                                                <Link to="/booking_movie" className="fea-fade-button f-right">ĐẶT VÉ
                                                </Link>
                                            </p>
                                    </div>
                                </div>
                                <div className="fea-img-text-bottom">
                                    <p>SHIN</p>
                                    <p>CẬU BÉ BÚT CHÌ</p>
                                </div>
                            </div>
                            <div className="col-sm-3 fea-img ">
                                <img src="../../../../public/img/img_home/index_nowshowing/nguoitukhosai.jpg" width="100%"/>
                                <div className="fea-fade">
                                    <button type="button" className="fea-fade-play" data-toggle="modal"
                                            data-target="#myModal"><i className="fa fa-play-circle-o"/></button>
                                    <div className="fea-fade-text">
                                        <hr className="hr-color-orange"/>
                                            <p className="text-center">
                                                <button className="fea-fade-button f-left">CHI TIẾT</button>
                                                <span>18+</span>
                                                <Link to="/booking_movie" className="fea-fade-button f-right">ĐẶT VÉ
                                                </Link>
                                            </p>
                                    </div>
                                </div>
                                <div className="fea-img-text-bottom">
                                    <p>JohnyEnglish</p>
                                    <p>Điệp viên tái xuất</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container fea-container">
                        <div className="row">
                            <div className="col-sm-3 fea-img">
                                <img src="../../../../public/img/img_home/index_nowshowing/congiasieugiau.jpg" width="100%"/>
                                <div className="fea-fade">
                                    <button type="button" className="fea-fade-play" data-toggle="modal"
                                            data-target="#myModal"><i className="fa fa-play-circle-o"/></button>
                                    <div className="fea-fade-text">
                                        <hr className="hr-color-orange"/>
                                            <p className="text-center">
                                                <button className="fea-fade-button f-left">CHI TIẾT</button>
                                                <span>18+</span>
                                                <Link to="/booking_movie" className="fea-fade-button f-right">ĐẶT VÉ
                                                </Link>
                                            </p>
                                    </div>
                                </div>
                                <div className="fea-img-text-bottom">
                                    <p>THE NUN</p>
                                    <p>ÁC QUỶ MA SƠ</p>
                                </div>
                            </div>

                        </div>
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

export default Movie;