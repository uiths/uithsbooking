import React, {Component} from 'react';
import Table from './payment_sub/table'
import Method from './payment_sub/method'
class Paymentmain extends Component {
    render() {
        return (
            <div className="container">
                <h3>Thanh toán</h3>
                <Table/>
                <div className="text-center" style={{paddingTop: 20}}>
                    <div className="headdingGray"> <sup className="spainGray" style={{paddingRight: 20}}>________________</sup><i className="fa fa-heart-o" />
                        <sup className="spainGray" style={{paddingLeft: 20}}>________________</sup> </div>
                </div>
                <Method/>
            </div>
        );
    }
}

export default Paymentmain;