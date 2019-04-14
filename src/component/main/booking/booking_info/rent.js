import React, {Component} from 'react';
import Carousel from 'nuka-carousel';

class Rent extends Component {
    afterSlide (currentSlide) {
        const list = window.document.querySelector('.slider-list');
        const nextSlide = list.childNodes[currentSlide];
        list.style.height = nextSlide.offsetHeight + 'px';
    }
    render() {
        return (
            <div>
                <div className="container">
                    {/*Chèn hình ảnh nhà từ database vào đây*/}
                    <div style={{marginTop:"20px"}}>
                        <Carousel heightMode="first" framePadding="15px" afterSlide={this.afterSlide}>
                            <img src="../img/img_bookhouse/img_rent_info/1.jpg" />
                            <img src="../img/img_bookhouse/img_rent_info/2.jpg" />
                            <img src="../img/img_bookhouse/img_rent_info/3.jpg" />
                            <img src="../img/img_bookhouse/img_rent_info/4.jpg" />
                            <img src="../img/img_bookhouse/img_rent_info/5.jpg" />
                        </Carousel>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div>
                    <div className="col-sm-8">
                        <div>
                        <div className="infobox">
                        <div>
                            <h3>Căn hộ ấm cúng - Star Platinum</h3>
                            <h6 style={{color:"gray"}}>19 Ngọc Hà, Ba Đình, Hà Nội</h6>
                        </div>

                        <ul className="nav nav-tabs">
                            <li className="active"><a data-toggle="tab" href="#description">Mô tả</a></li>
                            <li><a data-toggle="tab" href="#info">Thông tin</a></li>
                            <li><a data-toggle="tab" href="#goods">Tiện nghi</a></li>
                            <li><a data-toggle="tab" href="#price">Giá</a></li>
                        </ul>
                            <div className="tab-content">
                                <div id="description" className="tab-pane fade in active">
                                <br/>
                                <p>Căn hộ tiện nghi, ấm cúng nằm giữa lòng thủ đô với ban công tuyệt đẹp nhìn ra bên ngoài. Chỉ cách Hồ Gươm tầm 10 phút đi bộ. Ở ngay sau đó là khu chợ đêm và phố đi bộ với đủ loại hình ăn chơi giải trí.</p>
                                <p>Nằm ở đường lớn phù hợp cho việc di chuyển bằng xe hơi. Có thể dễ dàng đón xe buýt hoặc taxi từ vị trí của căn hộ.</p>
                                </div>
                                <div id="info" className="tab-pane fade">
                                <br/>
                                    <i className="fa fa-bed"> 2 giường</i> <br/>
                                    <br/>
                                    <i className="fa fa-male"> Tối đa 5 người ở</i> <br/>
                                    <br/>
                                    <i className="fa fa-bath"> 1 phòng tắm</i> <br/>
                                    <br/>
                                </div>
                                <div id="goods" className="tab-pane fade">
                                    <br/>
                                    <i className="fa fa-tv"> TV</i> <br/>
                                    <br/>
                                    <i className="fa fa-wifi"> WiFi</i> <br/>
                                    <br/>
                                </div>
                                <div id="price" className="tab-pane fade">
                                    <br/>
                                    <h4>100,000 đ / Đêm</h4>

                                </div>
                            </div>
                        </div>
                        </div>

                    </div>


                </div>
                <div className="col-sm-4">
                    <div className="divide">
                            <div className="infobox">
                                <div>
                                <h3 style={{marginTop:"30px",paddingLeft:"35%"}}>Đặt chỗ</h3>
                                </div>
                                <hr/>
                                <label>Ngày đến</label>
                                <input type="date" className="form-control" id="start" name="trip-start"/>
                                <br/>
                                <label>Ngày đi</label>
                                <input type="date" className="form-control" id="end" name="trip-end"/>
                                <br/>
                                <label>Số người ở</label>
                                <select className="form-control">
                                    <option selected disabled hidden>Nhấn để chọn</option>
                                    <option value="1">1 người</option>
                                    <option value="2">2 người</option>
                                    <option value="3">3 người</option>
                                    <option value="4">4 người</option>
                                    <option value="5">5 người</option>
                                </select>
                                <hr/>
                                <br/>
                                <button type="submit" className="btn btn-primary center_button" data-toggle="modal" data-target="#payment">Thuê</button>
                                <br/>
                                <br/>
                                <div className="modal fade" id="payment" role="dialog">
                                    <div className="modal-dialog">


                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                <h4 className="modal-title">Thanh toán</h4>
                                            </div>
                                            <div className="modal-body">
                                                <p>Truyền prob thông tin thanh toán vào đây.</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-default" data-dismiss="modal">Thanh toán</button>
                                            </div>
                                        </div>
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

export default Rent;