import React, { Component } from 'react';
import RentalList from '../index/rentalList'
import { Link } from "react-router-dom";
import Loading from 'component/main/user/loading'

class Home extends Component {
    render() {
        return (
            <div>
                <main>
                    <div id="home" className="carousel slide carousel-fade animated fadeInUp" data-ride="carousel">
                        <ol className="carousel-indicators home-dot">
                            <li data-target="#home" data-slide-to="0" className="active" />
                            <li data-target="#home" data-slide-to="1" />
                            <li data-target="#home" data-slide-to="2" />
                        </ol>

                        <div className="carousel-inner text-center home-inner" role="listbox">
                            <div className="item active">
                                <img  src={process.env.PUBLIC_URL+"/img/img_home/index_slide/1.png"} alt="Brandi Img 1" width="100%" />
                            </div>
                            <div className="item">
                                <img src="./img/img_home/index_slide/2.png" alt="Brandi Img 2" width="100%" />

                            </div>
                            <div className="item">
                                <img src="./img/img_home/index_slide/3.png" alt="Brandi Img 3" width="100%" />
                            </div>
                        </div>
                    </div>
                    <RentalList/>


                    <div id="sub_home02" className="container-fluid mg-top-40">
                        <h4  className="text-left title_h3 animated fadeInLeft">Điểm đến hàng đầu</h4>
                        <div className="sub_home02_list">
                            <div className="col-sm-3 sub_home02_container mg-top-15">
                                <Link className="sub_home02_link" to="/my_rent">
                                    <img className="sub_home02_img" src="../img/img_home/index_region/Ha_noi.png" alt="Snow" width="100%"/>
                                    <p className="sub_home_text_p">
                                        <b> Hà nội</b>
                                        <br/>
                                        1230 chỗ ở.
                                    </p>
                                </Link>
                            </div>
                            <div className="col-sm-3 sub_home02_container mg-top-15">
                                <Link className="sub_home02_link" to="/my_rent">
                                    <img className="sub_home02_img" src="../img/img_home/index_region/Da_lat.png" alt="Snow" width="100%"/>
                                    <p className="sub_home_text_p">
                                        <b> Đà Lạt</b>
                                        <br/>
                                        1000 chỗ ở.
                                    </p>
                                </Link>
                            </div>
                            <div className="col-sm-3 sub_home02_container mg-top-15">
                                <Link className="sub_home02_link" to="/my_rent">
                                    <img className="sub_home02_img" src="../img/img_home/index_region/Nha_trang.png" alt="Snow" width="100%"/>
                                    <p className="sub_home_text_p">
                                        <b> Nha Trang</b>
                                        <br/>
                                        999 chỗ ở.
                                    </p>
                                </Link>
                            </div>
                            <div className="col-sm-3 sub_home02_container mg-top-15">
                                <Link className="sub_home02_link" to="/my_rent">
                                    <img className="sub_home02_img" src="../img/img_home/index_region/Hoa_Binh.png" alt="Snow" width="100%"/>
                                    <p className="sub_home_text_p">
                                        <b> Hoà Bình</b>
                                        <br/>
                                        1200 chỗ ở.
                                    </p>
                                </Link>
                            </div>
                            <div className="col-sm-3 sub_home02_container mg-top-15">
                                <Link className="sub_home02_link" to="/my_rent">
                                    <img className="sub_home02_img" src="../img/img_home/index_region/TPHCM.png" alt="Snow" width="100%"/>
                                    <p className="sub_home_text_p">
                                        <b> Hồ Chí Minh</b>
                                        <br/>
                                        2891 chỗ ở.
                                    </p>
                                </Link>
                            </div>
                            <div className="col-sm-3 sub_home02_container mg-top-15">
                                <Link className="sub_home02_link" to="/my_rent">
                                    <img className="sub_home02_img" src="../img/img_home/index_region/Ha_long.png" alt="Snow" width="100%"/>
                                    <p className="sub_home_text_p">
                                        <b> Hạ Long</b>
                                        <br/>
                                        510 chỗ ở.
                                    </p>
                                </Link>
                            </div>
                            <div className="col-sm-3 sub_home02_container mg-top-15">
                                <Link className="sub_home02_link" to="/my_rent">
                                    <img className="sub_home02_img" src="../img/img_home/index_region/Vung_tau.png" alt="Snow" width="100%"/>
                                    <p className="sub_home_text_p">
                                        <b> Vũng Tàu</b>
                                        <br/>
                                        313 chỗ ở.
                                    </p>
                                </Link>
                            </div>
                            <div className="col-sm-3 sub_home02_container mg-top-15">
                                <Link className="sub_home02_link" to="/my_rent">
                                    <img className="sub_home02_img" src="../img/img_home/index_region/Da_Nang.png" alt="Snow" width="100%"/>
                                    <p className="sub_home_text_p">
                                        <b> Đà Nẵng</b>
                                        <br/>
                                        230 chỗ ở.
                                    </p>
                                </Link>
                            </div>



                        </div>
                    </div>

                    <div id="home_event" className="mg-top-80">
                        <div className="container-fluid text-center">
                            <div className="col-sm-4">
                                <div className="home_event_img">
                                    <img src="./img/img_home/index_event/home_event_1.png" alt="Brandi Img 2" width="100%"/>
                                </div>
                                <p><b>Lần đầu tiên tại Việt Nam</b></p>
                                <p>Ứng dụng cho thuê chỗ ở chuyên nghiệp, đặt phòng tin cậy cho Homestay cao cấp, căn hộ dịch vụ và biệt thự nghỉ dưỡng.</p>
                            </div>
                            <div className="col-sm-4">
                                <div className="home_event_img">
                                    <img src="./img/img_home/index_event/home_event_2.png" alt="Brandi Img 2" width="100%"/>
                                </div>
                                <p><b>Sống như người bản địa</b></p>
                                <p>Trải nghiệm không gian bản địa để chuyến du lịch có nhiều màu sắc. Chúng tôi mang đến những trải nghiệm hoàn toàn mới nhưng vẫn đảm bảo sự tiện lợi và riêng tư tuyệt đối.</p>
                            </div>
                            <div className="col-sm-4">
                                <div className="home_event_img">
                                    <img src="./img/img_home/index_event/home_event_3.png" alt="Brandi Img 2" width="100%"/>
                                </div>
                                <p><b>Mỗi căn hộ một cá tính riêng</b></p>
                                <p>Từ những căn hộ hiện đại, biệt thự biệt lập cho đến những ngôi nhà truyền thống, chúng tôi không ngừng mở rộng danh sách để đem đến sự lựa chọn đa dạng cho khách hàng.</p>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        );
    }
}

export default Home;