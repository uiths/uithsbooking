import React, {Component} from 'react';
import {  Link } from "react-router-dom";

class Slot extends Component {

    onSeatClick(e){

        var a = document.getElementsByClassName("on");

        if (document.getElementById(e.target.id).classList.contains('on'))
        {
            e.target.classList.remove("on");
            e.target.classList.add("off");
            document.getElementById("slot").innerHTML = " ";

        }
        else {

            if(a.length > 0) {
                for(let i = 0; i < a.length; ++i){
                    a[i].classList.remove("on");
                }
            }

            e.target.classList.remove("off");
            e.target.classList.add("on");
            document.getElementById("slot").innerHTML = e.target.id;
        }

    }

    render() {
        return (
            <div className="container mg-top-20" >
                <div className="row">
                    <p className="slot-first">CHỌN GHẾ: <span id="slot"> </span></p>
                    <div className="slot-box">
                        <div className=" slot-container mg-top-25">
                            <button className="slot-button-left">F</button>
                            <button id="F19" className="btn_me off" onClick={this.onSeatClick}>19</button>
                            <button id="F18" className="btn_me off" onClick={this.onSeatClick}>18</button>
                            <button id="F17" className="btn_me off" onClick={this.onSeatClick}>17</button>
                            <button id="F16" className="btn_me off" onClick={this.onSeatClick}>16</button>
                            <button id="F15" className="btn_me off" onClick={this.onSeatClick}>15</button>
                            <button id="F14" className="btn_me off" onClick={this.onSeatClick}>14</button>
                            <button id="F13" className="btn_me off" onClick={this.onSeatClick}>13</button>
                            <button id="F12" className="btn_me off" onClick={this.onSeatClick}>12</button>
                            <button id="F11" className="btn_me off" onClick={this.onSeatClick}>11</button>
                            <button id="F10" className="btn_me off" onClick={this.onSeatClick}>10</button>
                            <button id="F9" className="btn_me off" onClick={this.onSeatClick}>09</button>
                            <button id="F8" className="btn_me off" onClick={this.onSeatClick}>08</button>
                            <button id="F7" className="btn_me off" onClick={this.onSeatClick}>07</button>
                            <button id="F6" className="btn_me off" onClick={this.onSeatClick}>06</button>
                            <button id="F5" className="btn_me off" onClick={this.onSeatClick}>05</button>
                            <button id="F4" className="btn_me off" onClick={this.onSeatClick}>04</button>
                            <button id="F3" className="btn_me off" onClick={this.onSeatClick}>03</button>
                            <button id="F2" className="btn_me off" onClick={this.onSeatClick}>02</button>
                            <button id="F1" className="btn_me off" onClick={this.onSeatClick}>01</button>
                            <button className="slot-button-right">F</button>
                        </div>
                        <div className=" slot-container mg-top-15">
                            <button className="slot-button-left">E</button>
                            <button id="E19" className="btn_me off" onClick={this.onSeatClick}>19</button>
                            <button id="E18" className="btn_me off" onClick={this.onSeatClick}>18</button>
                            <button id="E17" className="btn_me off" onClick={this.onSeatClick}>17</button>
                            <button id="E16" className="btn_me off" onClick={this.onSeatClick}>16</button>
                            <button id="E15" className="btn_me off" onClick={this.onSeatClick}>15</button>
                            <button id="E14" className="btn_me off" onClick={this.onSeatClick}>14</button>
                            <button id="E13" className="btn_me off" onClick={this.onSeatClick}>13</button>
                            <button id="E12" className="btn_me off" onClick={this.onSeatClick}>12</button>
                            <button id="E11" className="btn_me off" onClick={this.onSeatClick}>11</button>
                            <button id="E10" className="btn_me off" onClick={this.onSeatClick}>10</button>
                            <button id="E9" className="btn_me off" onClick={this.onSeatClick}>09</button>
                            <button id="E8" className="btn_me off" onClick={this.onSeatClick}>08</button>
                            <button id="E7" className="btn_me off" onClick={this.onSeatClick}>07</button>
                            <button id="E6" className="btn_me off" onClick={this.onSeatClick}>06</button>
                            <button id="E5" className="btn_me off" onClick={this.onSeatClick}>05</button>
                            <button id="E4" className="btn_me off" onClick={this.onSeatClick}>04</button>
                            <button id="E3" className="btn_me off" onClick={this.onSeatClick}>03</button>
                            <button id="E2" className="btn_me off" onClick={this.onSeatClick}>02</button>
                            <button id="E1" className="btn_me off" onClick={this.onSeatClick}>01</button>
                            <button className="slot-button-right">E</button>
                        </div>
                        <div className=" slot-container mg-top-15">
                            <button className="slot-button-left">D</button>
                            <button id="D19" className="btn_me off" onClick={this.onSeatClick}>19</button>
                            <button id="D18" className="btn_me off" onClick={this.onSeatClick}>18</button>
                            <button id="D17" className="btn_me off" onClick={this.onSeatClick}>17</button>
                            <button id="D16" className="btn_me off" onClick={this.onSeatClick}>16</button>
                            <button id="D15" className="btn_me off" onClick={this.onSeatClick}>15</button>
                            <button id="D14" className="btn_me off" onClick={this.onSeatClick}>14</button>
                            <button id="D13" className="btn_me off" onClick={this.onSeatClick}>13</button>
                            <button id="D12" className="btn_me off" onClick={this.onSeatClick}>12</button>
                            <button id="D11" className="btn_me off" onClick={this.onSeatClick}>11</button>
                            <button id="D10" className="btn_me off" onClick={this.onSeatClick}>10</button>
                            <button id="D9" className="btn_me off " onClick={this.onSeatClick}>09</button>
                            <button id="D8" className="btn_me off " onClick={this.onSeatClick}>08</button>
                            <button id="D7" className="btn_me off " onClick={this.onSeatClick}>07</button>
                            <button id="D6" className="btn_me off " onClick={this.onSeatClick}>06</button>
                            <button id="D5" className="btn_me off " onClick={this.onSeatClick}>05</button>
                            <button id="D4" className="btn_me off " onClick={this.onSeatClick}>04</button>
                            <button id="D3" className="btn_me off " onClick={this.onSeatClick}>03</button>
                            <button id="D2" className="btn_me off " onClick={this.onSeatClick}>02</button>
                            <button id="D1" className="btn_me off " onClick={this.onSeatClick}>01</button>
                            <button className="slot-button-right">D</button>
                        </div>
                        <div className=" slot-container mg-top-15">
                            <button className="slot-button-left">C</button>
                            <button id="C19" className="btn_me off " onClick={this.onSeatClick}>19</button>
                            <button id="C18" className="btn_me off" onClick={this.onSeatClick}>18</button>
                            <button id="C17" className="btn_me off" onClick={this.onSeatClick}>17</button>
                            <button id="C16" className="btn_me off" onClick={this.onSeatClick}>16</button>
                            <button id="C15" className="btn_me off" onClick={this.onSeatClick}>15</button>
                            <button id="C14" className="btn_me off" onClick={this.onSeatClick}>14</button>
                            <button id="C13" className="btn_me off" onClick={this.onSeatClick}>13</button>
                            <button id="C12" className="btn_me off" onClick={this.onSeatClick}>12</button>
                            <button id="C11" className="btn_me off" onClick={this.onSeatClick}>11</button>
                            <button id="C10" className="btn_me off" onClick={this.onSeatClick}>10</button>
                            <button id="C9" className="btn_me off" onClick={this.onSeatClick}>09</button>
                            <button id="C8" className="btn_me off" onClick={this.onSeatClick}>08</button>
                            <button id="C7" className="btn_me off" onClick={this.onSeatClick}>07</button>
                            <button id="C6" className="btn_me off" onClick={this.onSeatClick}>06</button>
                            <button id="C5" className="btn_me off" onClick={this.onSeatClick}>05</button>
                            <button id="C4" className="btn_me off" onClick={this.onSeatClick}>04</button>
                            <button id="C3" className="btn_me off" onClick={this.onSeatClick}>03</button>
                            <button id="C2" className="btn_me off" onClick={this.onSeatClick}>02</button>
                            <button id="C1" className="btn_me off" onClick={this.onSeatClick}>01</button>
                            <button className="slot-button-right">C</button>
                        </div>
                        <div className=" slot-container mg-top-15">
                            <button className="slot-button-left">B</button>
                            <button id="B19" className="btn_me off" onClick={this.onSeatClick}>19</button>
                            <button id="B18" className="btn_me off" onClick={this.onSeatClick}>18</button>
                            <button id="B17" className="btn_me off" onClick={this.onSeatClick}>17</button>
                            <button id="B16" className="btn_me off" onClick={this.onSeatClick}>16</button>
                            <button id="B15" className="btn_me off" onClick={this.onSeatClick}>15</button>
                            <button id="B14" className="btn_me off" onClick={this.onSeatClick}>14</button>
                            <button id="B13" className="btn_me off" onClick={this.onSeatClick}>13</button>
                            <button id="B12" className="btn_me off" onClick={this.onSeatClick}>12</button>
                            <button id="B11" className="btn_me off" onClick={this.onSeatClick}>11</button>
                            <button id="B10" className="btn_me off" onClick={this.onSeatClick}>10</button>
                            <button id="B9" className="btn_me off" onClick={this.onSeatClick}>09</button>
                            <button id="B8" className="btn_me off" onClick={this.onSeatClick}>08</button>
                            <button id="B7" className="btn_me off" onClick={this.onSeatClick}>07</button>
                            <button id="B6" className="btn_me off" onClick={this.onSeatClick}>06</button>
                            <button id="B5" className="btn_me off" onClick={this.onSeatClick}>05</button>
                            <button id="B4" className="btn_me off" onClick={this.onSeatClick}>04</button>
                            <button id="B3" className="btn_me off" onClick={this.onSeatClick}>03</button>
                            <button id="B2" className="btn_me off" onClick={this.onSeatClick}>02</button>
                            <button id="B1" className="btn_me off" onClick={this.onSeatClick}>01</button>
                            <button className="slot-button-right">B</button>
                        </div>
                        <div className=" slot-container mg-top-15">
                            <button className="slot-button-left">A</button>
                            <button id="A19" className="btn_me off" onClick={this.onSeatClick}>19</button>
                            <button id="A18" className="btn_me off" onClick={this.onSeatClick}>18</button>
                            <button id="A17" className="btn_me off" onClick={this.onSeatClick}>17</button>
                            <button id="A16" className="btn_me off" onClick={this.onSeatClick}>16</button>
                            <button id="A15" className="btn_me off" onClick={this.onSeatClick}>15</button>
                            <button id="A14" className="btn_me off" onClick={this.onSeatClick}>14</button>
                            <button id="A13" className="btn_me off" onClick={this.onSeatClick}>13</button>
                            <button id="A12" className="btn_me off" onClick={this.onSeatClick}>12</button>
                            <button id="A11" className="btn_me off" onClick={this.onSeatClick}>11</button>
                            <button id="A10" className="btn_me off" onClick={this.onSeatClick}>10</button>
                            <button id="A9" className="btn_me off" onClick={this.onSeatClick}>09</button>
                            <button id="A8" className="btn_me off" onClick={this.onSeatClick}>08</button>
                            <button id="A7" className="btn_me off" onClick={this.onSeatClick}>07</button>
                            <button id="A6" className="btn_me off" onClick={this.onSeatClick}>06</button>
                            <button id="A5" className="btn_me off" onClick={this.onSeatClick}>05</button>
                            <button id="A4" className="btn_me off" onClick={this.onSeatClick}>04</button>
                            <button id="A3" className="btn_me off" onClick={this.onSeatClick}>03</button>
                            <button id="A2" disabled className="btn_me off disable" onClick={this.onSeatClick}>02
                            </button>
                            <button id="A1" disabled className="btn_me off disable" onClick={this.onSeatClick}>01
                            </button>
                            <button className="slot-button-right">A</button>
                        </div>
                        <div className="slot-text">
                            <p>Màn hình</p>
                            <hr/>
                        </div>
                    </div>
                    <div className="mg-top-20">
                        <Link className="btn slot-button-final" role="button" to="/payment">TIẾP TỤC</Link>
                    </div>
                </div>
            </div>
        );
    }
}


export default Slot;