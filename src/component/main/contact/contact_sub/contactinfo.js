import React, {Component} from 'react';

class Contactinfo extends Component {
    render() {
        return (
            <div>
                <div className="col-sm-12">
                    <div className="contact_sidebar"n>
                        {/* Contact Info */}
                        <div className="sidebar_section">
                            <div className="sidebar_contact_info">
                                <h3>Thông tin</h3>
                                <br />
                                <ul style={{fontSize: 17}}>
                                    <li type="circle">135 Nam Kỳ Khởi Nghĩa, quận 1,
                                        <br />TP. Hồ Chí Minh, Việt Nam</li>
                                    <br />
                                    <li type="circle">Công ty TNHH MMTT</li>
                                    <br />
                                    <li type="circle">01123 456 </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        );
    }
}

export default Contactinfo;