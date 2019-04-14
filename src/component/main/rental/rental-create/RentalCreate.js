import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import RentalCreateForm from './RentalCreateForm';
import { Redirect } from 'react-router-dom';
import Dropzone from 'react-dropzone'
import * as actions from 'actions';
class Create_rent extends Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            redirect: false,
            imageSrc: [],
            imageFiles: [],
            imgSrc: '',
            isChange: false,
            title: '',
            city: '',
            address: '',
            category: 'apartment',
            image1: null,
            image2: null,
            image3: null,
            image4: null,
            image5: null,
            bathrooms: 1,
            bedrooms: 1,
            people: 1,
            isWifi: false,
            isTv: false,
            isFridge: false,
            isElevator: false,
            isConditioner: false,
            isWashing: false,
            isLoad: false,
            description: '',
            price: 100000,
            isLoading: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const { title, city, address, category, bathrooms, bedrooms, people,
            isWifi, isTv, isElevator, isConditioner, isFridge, isWashing, description, price } = this.state
        const data = {
            title, city, address, category, bathrooms, bedrooms, people,
            isWifi, isTv, isElevator, isConditioner, isFridge, isWashing, description, price
        }
        const imageFiles = this.state.imageFiles;
        this.setState({
            isLoading: true
        })
        actions.createRental(data, imageFiles)
            .then(
                (rental) => this.setState({ redirect: true, isLoading: false }),
                (errors) => this.setState({ errors, isLoading: false }))
    }

    handleChange(e) {
        if (e.target.name === "image1" || e.target.name === "image2" || e.target.name === "image3"
            || e.target.name === "image4" || e.target.name === "image5") {
            let tempArr = this.state.imageSrc;
            let tempArr2 = this.state.imageFiles;
            let temp = URL.createObjectURL(e.target.files[0]);
            if (e.target.name === "image1") {
                this.setState({
                    image1: e.target.files[0],

                    isLoad: true
                })
                tempArr2[0] = e.target.files[0];
                tempArr[0] = temp;
            }
            if (e.target.name === "image2") {
                this.setState({
                    image2: e.target.files[0]
                })
                tempArr2[1] = e.target.files[0];
                tempArr[1] = temp;
            }
            if (e.target.name === "image3") {
                this.setState({
                    image3: e.target.files[0]
                })
                tempArr2[2] = e.target.files[0];
                tempArr[2] = temp;
            }
            if (e.target.name === "image4") {
                this.setState({
                    image4: e.target.files[0]
                })
                tempArr2[3] = e.target.files[0];
                tempArr[3] = temp;
            }
            if (e.target.name === "image5") {
                this.setState({
                    image4: e.target.files[0]
                })
                tempArr2[4] = e.target.files[0];
                tempArr[4] = temp;
            }
            this.setState({ imageSrc: tempArr, imageFiles: tempArr2 });
        }
        else {
            let temp = e.target.value;
            if (temp === "true")
                temp = true
            this.setState({
                [e.target.name]: temp
            })
        }
    }

    render() {
        const { isLoad, isLoading } = this.state;
        if (this.state.redirect) {
            return <Redirect to={{ pathname: '/rental/manage',  state: { posted: true } }} />
        }
        const fileInpStyle = {
            border: "1px solid #ccc",
            display: "block",
            padding: "6px 12px",
            cursor: "pointer"
        }
        return (
            <div>
                <div className="container">
                    <div id="create-rent" className=" text-left ">
                        <h3 className="title_h3 type1 animated fadeInLeft">Cho thuê nhà</h3>
                        <div className="container fea-container">
                            <div className="row">
                                <div className="col-sm-6 animated fadeInLeft">
                                    <div className="form-style-5">
                                        <form enctype="multipart/form-data">
                                            <legend></legend>
                                            <label style={{ fontSize: "17px" }} className="field a-field a-field_a2 page__field" htmlFor="title">
                                                <input onChange={this.handleChange} className="field__input a-field__input" placeholder="Tiêu đề" id="title" type="text" name="title" value={this.state.title} />
                                                <span className="a-field__label-wrap">
                                                    <span className="a-field__label">Tiêu đề</span>
                                                </span>
                                            </label>
                                            <label style={{ fontSize: "17px" }} className="field a-field a-field_a2 page__field" htmlFor="city">
                                                <input onChange={this.handleChange} className="field__input a-field__input" placeholder="Thành phố" id="city" type="text" name="city" value={this.state.city} />
                                                <span className="a-field__label-wrap">
                                                    <span className="a-field__label">Thành phố</span>
                                                </span>
                                            </label>
                                            <label style={{ fontSize: "17px" }} className="field a-field a-field_a2 page__field" htmlFor="address">
                                                <input onChange={this.handleChange} className="field__input a-field__input" placeholder="Địa chỉ" id="address" type="text" name="address" value={this.state.address} />
                                                <span className="a-field__label-wrap">
                                                    <span className="a-field__label">Địa chỉ</span>
                                                </span>
                                            </label>
                                            <label htmlFor="category">Loại hình</label>
                                            <select onChange={this.handleChange} value={this.state.category} class="form-control" id="category" name="category">
                                                <option value="apartment">Căn hộ</option>
                                                <option value="homestay">Homestay</option>
                                                <option value="hotel">Khách sạn</option>
                                                <option value="villa">Biệt thự</option>
                                            </select><br />
                                            Chọn ảnh :
                                            <input onChange={this.handleChange} style={fileInpStyle} type="file" name="image1" /><br />
                                            <input onChange={this.handleChange} style={fileInpStyle} type="file" name="image2" /><br />
                                            <input onChange={this.handleChange} style={fileInpStyle} type="file" name="image3" /><br />
                                            <input onChange={this.handleChange} style={fileInpStyle} type="file" name="image4" /><br />
                                            <input onChange={this.handleChange} style={fileInpStyle} type="file" name="image5" /><br />

                                            
                                            <label htmlFor="bedrooms">Phòng ngủ</label>
                                            <input onChange={this.handleChange} min="1" class="form-control" type="number" name="bedrooms" /><br />
                                            <label htmlFor="people">Phòng tắm</label>
                                            <input onChange={this.handleChange} min="1" class="form-control" type="number" name="bathrooms" /><br />
                                            <label htmlFor="people">Số người</label>
                                            <input onChange={this.handleChange} min="1" class="form-control" type="number" name="people" /><br />
                                            <label htmlFor="people">Tiện ích</label>
                                            <input onChange={this.handleChange} style={{ width: "20px", display: "inline-block" }} type="checkbox" value="true" name="isWifi" />Wifi<br />
                                            <input onChange={this.handleChange} style={{ width: "20px", display: "inline-block" }} type="checkbox" value="true" name="isFridge" />Tủ lạnh<br />
                                            <input onChange={this.handleChange} style={{ width: "20px", display: "inline-block" }} type="checkbox" value="true" name="isConditioner" />Máy điều hòa<br />
                                            <input onChange={this.handleChange} style={{ width: "20px", display: "inline-block" }} type="checkbox" value="true" name="isElevator" />Thang máy<br />
                                            <input onChange={this.handleChange} style={{ width: "20px", display: "inline-block" }} type="checkbox" value="true" name="isTv" />TV<br />
                                            <input onChange={this.handleChange} style={{ width: "20px", display: "inline-block" }} type="checkbox" value="true" name="isWashing" />Máy giặt<br />
                                            <textarea onChange={this.handleChange} class="form-control" name="description" placeholder="Mô tả về ngôi nhà của bạn" />
                                            <input step="10000" onChange={this.handleChange} min="100000" class="form-control" type="number" name="price" placeholder="Giá" /><br />
                                            { isLoading ?
                                                <button className="btnn-submit" to="" type="submit" onClick={this.handleClick}>Đang đăng tải</button>
                                                :<button className="btnn-submit" to="" type="submit" onClick={this.handleClick}>Đăng</button>

                                            }
                                            </form>
                                    </div>
                                </div>
                                <div className="col-sm-6 animated fadeInRight ">
                                    {isLoad ? (
                                        <Fragment>
                                            <img src={this.state.imageSrc[2]} width="100%" />
                                            <img src={this.state.imageSrc[0]} width="100%" />
                                            <img src={this.state.imageSrc[1]} width="100%" />
                                        </Fragment>) : (<img src="../img/img_create_house/1.png" width="100%" />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Create_rent;