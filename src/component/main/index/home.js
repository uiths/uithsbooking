import React, { Component } from 'react';
import RentalList from '../index/rentalList'
import { Link } from "react-router-dom";

class Home extends Component {
    // setState = true ( đặt trạng thái với từng trạng thái một)
    constructor(props) {
        super(props);
        this.state = {
            disablee2: true,
            disablee3: true,
            disablee4: true,
            disablee5: true
        };
        //bind thằng nào thì nhận this của thằng đó
        //this.UnlockSelectBox = this.UnlockSelectBox.bind(this);
    }
    // Unlock = setState = false ( với từng trường hợp thì trạng thái đổi sang false tương ứng)
    UnlockSelectBox(i) {
        //document.getElementById("home-box-item-2").disabled = false;

        switch (i) {
            case 2:
                this.setState({
                    disablee2: false
                });
                break;
            case 3:
                this.setState({
                    disablee3: false
                });
                break;
            case 4:
                this.setState({
                    disablee4: false
                });
                break;
            case 5:
                this.setState({
                    disablee5: false
                });
                break;

        }

    }
    //render ( if true then...disabled and else return not disabled) ( nếu trang thái true thì trả về disabled và ngược lại)
    renderHomeItem2(bool) {
        if (bool)
            return <select id="home-box-item-2" className="form-control home-box-item" disabled >
                <option key={0} selected disabled>Chọn địa điểm</option>
                <option key={11} value="0">Đà Lạt</option>
                <option key={22} value="1">Vịnh Hạ Long</option>
            </select>;
        return <select id="home-box-item-2" onChange={this.UnlockSelectBox.bind(this, 3)} className="form-control home-box-item" >
            <option key={0} selected disabled>Chọn địa điểm</option>
            <option key={11} value="0">Đà Lạt</option>
            <option key={22} value="1">Vịnh Hạ Long</option>
        </select>;
    }
    //render ( if true then...disabled and else return not disabled) ( nếu trang thái true thì trả về disabled và ngược lại)
    renderHomeItem3(bool) {
        if (bool)
            return <select id="home-box-item-3" className="form-control home-box-item" disabled>
                <option selected disabled>Chọn ngày bắt đầu</option>
                <option value="0">20/3/2019</option>
                <option value="1">21/3/2019</option>
            </select>;
        return <select id="home-box-item-3" className="form-control home-box-item" onChange={this.UnlockSelectBox.bind(this, 4)} >
            <option selected disabled>Chọn ngày bắt đầu</option>
            <option value="0">20/3/2019</option>
            <option value="1">21/3/2019</option>
        </select>;
    }

    //render ( if true then...disabled and else return not disabled) ( nếu trang thái true thì trả về disabled và ngược lại)
    renderHomeItem4(bool) {
        if (bool)
            return <select id="home-box-item-4" className="form-control home-box-item" disabled>
                <option selected disabled>Chọn ngày kết thúc</option>
                <option value="0">20/4/2019</option>
                <option value="1">21/4/2019</option>
            </select>;
        return <select id="home-box-item-4" className="form-control home-box-item" onChange={this.UnlockSelectBox.bind(this, 5)}>
            <option selected disabled>Chọn ngày kết thúc</option>
            <option value="0">20/4/2019</option>
            <option value="1">21/4/2019</option>
        </select>;
    }

    //render ( if true then...disabled and else return not disabled) ( nếu trang thái true thì trả về disabled và ngược lại)
    renderHomeItemButton(bool) {
        if (bool)
            return <Link className="btn home-button-dropdown" role="button" to="/" disabled>TÌM THỬ</Link>;
        return <Link className="btn home-button-dropdown" role="button" to="/">TÌM THỬ</Link>;
    }


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
                                <img src={process.env.PUBLIC_URL+"/img/img_home/index_slide/1.png"} alt="Brandi Img 1" width="100%" />
                            </div>
                            <div className="item">
                                <img src="./img/img_home/index_slide/2.png" alt="Brandi Img 2" width="100%" />

                            </div>
                            <div className="item">
                                <img src="./img/img_home/index_slide/3.png" alt="Brandi Img 3" width="100%" />
                            </div>
                        </div>

                        {/*<div className="home-box">*/}
                        {/*<h3>GỢI Ý THUÊ NHANH</h3>*/}
                        {/*<hr/>*/}
                        {/*<div className="container-fluid">*/}
                        {/*<div className="form-group  ">*/}
                        {/*<select className="form-control home-box-item " onChange={this.UnlockSelectBox.bind(this, 2)}>*/}
                        {/*<option selected disabled>Chọn mức giá</option>*/}
                        {/*<option value="0">Dưới 2 triệu</option>*/}
                        {/*<option value="1">Dưới 4 triệu</option>*/}
                        {/*</select>*/}
                        {/*</div>*/}
                        {/*<div className="form-group">*/}
                        {/*{this.renderHomeItem2(this.state.disablee2)}*/}
                        {/*</div>*/}
                        {/*<div className="form-group">*/}
                        {/*{this.renderHomeItem3(this.state.disablee3)}*/}
                        {/*</div>*/}
                        {/*<div className="form-group ">*/}
                        {/*{this.renderHomeItem4(this.state.disablee4)}*/}
                        {/*</div>*/}
                        {/*{this.renderHomeItemButton(this.state.disablee5)}*/}
                        {/*</div>*/}
                        {/*</div>*/}
                    </div>

                    <RentalList/>

                    {/* <div className="main-bg-img">
                      <div className="caption">
                      </div>
                  </div>

                  <div id="team" className="container text-center ">
                      <div className="row">
                          <h2>EVENT</h2>
                          <div className="headdingGray"><sup className="spainGray pd-right-20"
                                                            >________________</sup><i
                              className="fa fa-heart-o"/>
                              <sup className="spainGray pd-left-20" >________________</sup></div>

                          <div id="team-slide" className="carousel slide team-img" data-ride="carousel">
                              <div className="carousel-inner" role="listbox">
                                  <div className="item active">
                                      <div className="col-sm-3  team-img-all">
                                          <div className="team-img-col">
                                              <img className="team-img-pic" src="img/img_home/index_event/1.jpg" width="100%"/>
                                          </div>
                                      </div>
                                      <div className="col-sm-3 team-img-all">
                                          <div className=" team-img-col">
                                              <img className="team-img-pic" src="img/img_home/index_event/2.jpg" width="100%"/>
                                          </div>
                                      </div>
                                      <div className="col-sm-3 team-img-all">
                                          <div className=" team-img-col">
                                              <img className="team-img-pic" src="img/img_home/index_event/3.jpg" width="100%"/>
                                          </div>
                                      </div>
                                      <div className="col-sm-3 team-img-all">
                                          <div className=" team-img-col">
                                              <img className="team-img-pic" src="img/img_home/index_event/4.jpg" width="100%"/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="item">
                                      <div className="col-sm-3  team-img-all">
                                          <div className="team-img-col">
                                              <img className="team-img-pic" src="img/img_home/index_event/5.jpg" width="100%"/>
                                          </div>
                                      </div>
                                      <div className="col-sm-3 team-img-all">
                                          <div className=" team-img-col">
                                              <img className="team-img-pic" src="img/img_home/index_event/6.jpg" width="100%"/>
                                          </div>
                                      </div>
                                      <div className="col-sm-3 team-img-all">
                                          <div className=" team-img-col">
                                              <img className="team-img-pic" src="img/img_home/index_event/7.jpg" width="100%"/>
                                          </div>
                                      </div>
                                      <div className="col-sm-3 team-img-all">
                                          <div className=" team-img-col">
                                              <img className="team-img-pic" src="img/img_home/index_event/8.jpg" width="100%"/>
                                          </div>
                                      </div>
                                  </div>

                              </div>
                              <ol className="carousel-indicators team-dot">
                                  <li data-target="#team-slide" data-slide-to="0" className="active"/>
                                  <li data-target="#team-slide" data-slide-to="1"/>
                              </ol>
                          </div>
                      </div>
                  </div>*/}


                </main>
            </div>
        );
    }
}

export default Home;