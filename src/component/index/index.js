import React, { Component } from 'react';
import RentalList from './rentalList'
import PlaceList from './placeList'
import { Link } from "react-router-dom";
import Search from 'component/main/search'
import { connect } from 'react-redux'
import authService from 'services/auth-service';
import * as actions from 'actions'
import _ from 'lodash'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            key: null
        }
    }
    componentDidMount(){
        if(localStorage.getItem('auth_token')!==null && _.isEmpty(this.props.users.data)&& authService.isValid(authService.getToken()))
            this.props.fetchUserById(authService.getId())
    }
    render() {
        const data = [
        //     {
        //     title: "Gợi ý rentals",
        //     array: this.props.rentals.data || []
        // },
        {
            title: "Lịch sử tìm kiếm",
            array: this.props.users.data.searchHistory || []
        }]
        return (
            <div>
                <main>
                    <ToastContainer/>
                    <div id="home" className="carousel slide carousel-fade" data-ride="carousel">
                        <ol className="carousel-indicators home-dot">
                            <li data-target="#home" data-slide-to="0" className="active" />
                            <li data-target="#home" data-slide-to="1" />
                            <li data-target="#home" data-slide-to="2" />
                        </ol>

                        <div className="carousel-inner text-center home-inner" role="listbox">
                            <div className="item active">
                                <img src="img/img_home/index_slide/1.png" alt="Brandi Img 1" width="100%" />
                            </div>
                            <div className="item">
                                <img src="./img/img_home/index_slide/2.png" alt="Brandi Img 2" width="100%" />

                            </div>
                            <div className="item">
                                <img src="./img/img_home/index_slide/3.png" alt="Brandi Img 3" width="100%" />
                            </div>
                        </div>
                        <Search data={data} />
                    </div>

                    <RentalList />

                    <PlaceList />

                    <div id="home_event" className="mg-top-80">
                        <div className="container-fluid text-center">
                            <div className="col-sm-4">
                                <div className="home_event_img">
                                    <img src="./img/img_home/index_event/home_event_1.png" alt="Brandi Img 2" width="100%" />
                                </div>
                                <p><b>Lần đầu tiên tại Việt Nam</b></p>
                                <p>Ứng dụng cho thuê chỗ ở chuyên nghiệp, đặt phòng tin cậy cho Homestay cao cấp, căn hộ dịch vụ và biệt thự nghỉ dưỡng.</p>
                            </div>
                            <div className="col-sm-4">
                                <div className="home_event_img">
                                    <img src="./img/img_home/index_event/home_event_2.png" alt="Brandi Img 2" width="100%" />
                                </div>
                                <p><b>Sống như người bản địa</b></p>
                                <p>Trải nghiệm không gian bản địa để chuyến du lịch có nhiều màu sắc. Chúng tôi mang đến những trải nghiệm hoàn toàn mới nhưng vẫn đảm bảo sự tiện lợi và riêng tư tuyệt đối.</p>
                            </div>
                            <div className="col-sm-4">
                                <div className="home_event_img">
                                    <img src="./img/img_home/index_event/home_event_3.png" alt="Brandi Img 2" width="100%" />
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
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserById: (id) => dispatch(actions.fetchUserById(id))
    }
}
const mapStateToProps = (state) => {
    return {
        rentals: state.rentals,
        users : state.users
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);