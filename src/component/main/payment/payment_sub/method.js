import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Method extends Component {
    render() {
        return (
            <div>
                <div style={{marginLeft: '37%'}}>
                    <h3>Chọn Phương pháp thanh toán</h3>
                    <br />
                    <select style={{marginLeft: '14%'}}>
                        <option selected disabled hidden>Chọn tại đây</option>
                        <option value="CreditCard">Credit Card</option>
                        <option value="DebitCard">Debit Card</option>
                        <option value="Paypal">Paypal</option>
                        <option value="Visa">Visa</option>
                    </select>
                </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="submita">
                        {/* Thanh toan*/}
                        <button id="contact_form_submit" type="submit" className="btn btn-primary" value="Submit" style={{float: 'left', width: 150}}>Thanh toán</button>
                    </div>
                    <div className="submitb">
                        {/* Mua tiep*/}
                        <Link to="/" id="contact_form_submit" type="submit" className="btn btn-primary" value="Submit" style={{float: 'right', width: 150}}>Xem tiếp</Link>
                    </div>
                    <br/>
                    <br/>
                    <br/>
            </div>



        );
    }
}

export default Method;
