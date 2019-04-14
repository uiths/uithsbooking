import React, {Component} from 'react';
import {Link} from 'react-router-dom';

function ResultObject(listDayMonth, listYears, listDays) {
    this.listDayMonth = listDayMonth;
    this.listYears = listYears;
    this.listDays = listDays;
}

var getDaysInMonth = function(month,year) {
    return new Date(year, month, 0).getDate();
};

class BookingMovie extends Component {

    constructor(props)
    {
        super(props);
        // this.state = {
        //     days: this.setcurrentday()
        // };
    }


    getdatemonth(){
        var result = [];
        var x= new Date();
        var MAXd =  getDaysInMonth(x.getMonth()+1, x.getFullYear());
        for( let i = 0 ; i < 9; i++) {
            var d;
            var z;
            var m = x.getMonth() + 1;
            d = x.getDate() + i;
            if ( d > MAXd ) {
                d = d - MAXd;
                m++;
                if ( m > 12) {
                    m = 1;
                }
            }
            if( d < 10)
            {
                d = "0"+d;
            }
            if( m < 10)
            {
                m = "0"+m;
            }
            z = d + "/" + m + " ";
            result.push(z);
        }
        return result;
    }
    getyears(){
        var result = [];
        var x= new Date();
        var MAXd =  getDaysInMonth(x.getMonth()+1, x.getFullYear());

        for( let i = 0 ; i < 9; i++) {
            var d;
            var m = x.getMonth() + 1;
            var y = x.getFullYear();
            d = x.getDate() + i;
            if ( d > MAXd ) {
                d = d - MAXd;
                m++;
                if ( m > 12) {
                    y++;
                }
            }
            result.push(y);
        }
        return result;
    }

    setcurrentday(){
        var result = [];

        for( let i = 0 ; i < 9; i++) {
            var day;
            var x= new Date().getDay() + i;
            if ( x > 6 ) {
                x = (x - 6) - 1;
            }
            switch (x) {
                case 0:
                    day = "CN";
                    break;
                case 1:
                    day = "T2";
                    break;
                case 2:
                    day = "T3";
                    break;
                case 3:
                    day = "T4";
                    break;
                case 4:
                    day = "T5";
                    break;
                case 5:
                    day = "T6";
                    break;
                case  6:
                    day = "T7";
            }
            result.push(day);
        }

        return result;
    }


    render() {
        //this.setcurrentday();
        var r = new ResultObject(this.getdatemonth(), this.getyears(), this.setcurrentday());

        return (
                    <div className="container">
                        <div className="modal-header">
                            <div>
                                <ul className="nav nav-tabs">
                                    <li className="active">
                                        <a className="tab-item" href="#2" data-toggle="tab"><span
                                            className="f-left tab-day">{r.listDays[0]}</span>{r.listDayMonth[0]}<br/>{r.listYears[0]}</a>
                                    </li>
                                    <li> <a className="tab-item" href="#1" data-toggle="tab"><span  className="f-left tab-day">{r.listDays[1]}</span>{r.listDayMonth[1]}<br/>{r.listYears[1]}</a>
                                    </li>
                                    <li> <a className="tab-item" href="#1" data-toggle="tab"><span  className="f-left tab-day">{r.listDays[2]}</span>{r.listDayMonth[2]}<br/>{r.listYears[2]}</a>
                                    </li>
                                    <li> <a className="tab-item" href="#1" data-toggle="tab"><span  className="f-left tab-day">{r.listDays[3]}</span>{r.listDayMonth[3]}<br/>{r.listYears[3]}</a>
                                    </li>
                                    <li> <a className="tab-item" href="#1" data-toggle="tab"><span className="f-left tab-day">{r.listDays[4]}</span>{r.listDayMonth[4]}<br/>{r.listYears[4]}</a>
                                    </li>
                                    <li> <a className="tab-item" href="#1" data-toggle="tab"><span  className="f-left tab-day">{r.listDays[5]}</span>{r.listDayMonth[5]}<br/>{r.listYears[5]}</a>
                                    </li>
                                    <li> <a className="tab-item" href="#1" data-toggle="tab"><span  className="f-left tab-day">{r.listDays[6]}</span>{r.listDayMonth[6]}<br/>{r.listYears[6]}</a>
                                    </li>
                                    <li> <a className="tab-item" href="#1" data-toggle="tab"><span  className="f-left tab-day">{r.listDays[7]}</span>{r.listDayMonth[7]}<br/>{r.listYears[7]}</a>
                                    </li>
                                    <li> <a className="tab-item" href="#1" data-toggle="tab"><span className="f-left tab-day">{r.listDays[8]}</span>{r.listDayMonth[8]}<br/>{r.listYears[8]}</a>
                                    </li>
                                </ul>

                                <div className="tab-content ">
                                    <div className="tab-pane active" id="1">
                                        <h3>Không có dữ liệu tại ngày này</h3>
                                    </div>
                                    <div className="tab-pane" id="2">
                                        <div className="mg-top-20">
                                            <ul className="nav nav-tabs tab-fix">
                                                <li className="tab-item-in"><a href="#tab_in1_1" data-toggle="tab">UIT
                                                    CINEMA BÌNH DƯƠNG</a>
                                                </li>
                                                <li className="tab-item-in"><a href="#tab_in1_2" data-toggle="tab">UIT
                                                    CINEMA THỦ ĐỨC</a>
                                                </li>
                                                <li className="tab-item-in"><a href="#tab_in1_1" data-toggle="tab">UIT
                                                    CINEMA BÌNH THẠNH</a>
                                                </li>
                                            </ul>

                                            <div className="tab-content">
                                                <div className="tab-pane active" id="tab_in1_1">
                                                    <div className=" mg-top-20">
                                                        <hr/>
                                                        <ul className="nav nav-tabs tab-fix">
                                                            <li className="tab-item-in"><a
                                                                href="#tab_continues">17:00</a>
                                                            </li>
                                                            <li className="tab-item-in"><a
                                                                href="#tab_continues">19:30</a>
                                                            </li>
                                                            <li className="tab-item-in"><a
                                                                href="#tab_continues">21:30</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="tab-pane" id="tab_in1_2">
                                                    <div className=" mg-top-20">
                                                        <hr/>
                                                        <ul className="nav nav-tabs tab-fix">
                                                            <li className="tab-item-in"><a
                                                                href="#tab_continues">17:00</a>
                                                            </li>
                                                            <li className="tab-item-in"><a
                                                                href="#tab_continues">19:30</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane" id="3">
                                        <div className=" mg-top-20">
                                            <ul className="nav nav-tabs tab-fix">
                                                <li className="tab-item-in"><a href="#tab_in_1" data-toggle="tab">UIT CINEMA
                                                    BÌNH DƯƠNG</a>
                                                </li>
                                                <li className="tab-item-in"><a href="#tab_in_2" data-toggle="tab">UIT CINEMA
                                                    THỦ ĐỨC</a>
                                                </li>
                                            </ul>

                                            <div className="tab-content">
                                                <div className="tab-pane active" id="tab_in_1">
                                                    <div className=" mg-top-20">
                                                        <hr/>
                                                        <ul className="nav nav-tabs tab-fix">
                                                            <li className="tab-item-in"><a
                                                                href="#tab_continues">17:00</a>
                                                            </li>
                                                            <li className="tab-item-in"><a
                                                                href="#tab_continues">21:30</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="tab-pane" id="tab_in_2">
                                                    <div className=" mg-top-20">
                                                        <hr/>
                                                        <ul className="nav nav-tabs tab-fix">
                                                            <li className="tab-item-in"><a
                                                                href="#tab_continues">17:00</a>
                                                            </li>
                                                            <li className="tab-item-in"><a
                                                                href="#tab_continues">19:30</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="mg-top-20">
                                <Link className="btn tab-button-dropdown" role="button" to="/slot">TIẾP TỤC</Link>
                            </div>
                        </div>

            </div>
        );

    }

}

export default BookingMovie;