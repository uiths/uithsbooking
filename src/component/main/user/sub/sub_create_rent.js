import React, {Component} from 'react';
import {Redirect} from "react-router-dom";


class Sub_create_rent extends Component {

    constructor(props)
    {
        super(props);

        window.setTimeout(() => {
            this.props.history.push('/')
            // history is available by design in this.props when using react-router
        }, 5000) // 5000 means 5 seconds
    }


    render() {
        return (
            <div>
                <div className="sub_create_rent animated fadeIn">
                    <p><span/></p>
                    <p><span/></p>

                </div>
                <div className="container">
                    <div className="sub_create_rent_sketchy animated jackInTheBox">Thành công! Xin đợi admin kiểm duyệt!</div>
                </div>

            </div>
        );
    }
}

export default Sub_create_rent;