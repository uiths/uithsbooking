import React, {Component} from 'react';

import $ from 'jquery';



class Footer extends Component {

    // componentDidMount() {
    //     $(document).ready(function() {
    //         var $magic = $(".magic"),
    //             magicWHalf = $magic.width() / 2;
    //         $(document).on("mousemove", function(e) {
    //             $magic.css({ left: e.pageX - magicWHalf, top: e.pageY - magicWHalf });
    //         });
    //     });
    // }

    render() {
        // this.componentDidMount();

        return (
            <div className="scene mg-top-20">

                <footer>
                    <div className="container text-left footer-container ">
                        <div className="row">
                            <div className="col-sm-4 footer-left">
                                <a className="na-brand2" href="#"><img src="/img/index_icon_footer.png" width="45%" alt={"none"}/></a>
                            </div>
                            <div className="col-sm-4 footer-center-content">
                                <h5 className="footer-text-head">Thông tin</h5>
                                <p className="text-white">Được thành lập năm 2018, chúng tôi có các chứng chỉ cần thiết để bạn có thể tin tưởng và
                                    đến với chúng tôi. Hãy đến với chúng tôi vì những thước phim chân thực sống động đặc sắc đến từng chi tiết đang đợi bạn</p>
                            </div>
                            <div className="col-sm-4 footer-center-link">
                                <h5 className="footer-text-head">Mở rộng</h5>
                                <div className="footer-center-link-div-first">
                                    <a className="footer-link-a" href="#">Youtube</a>
                                    <a className="footer-link-a" href="#">Skype</a>
                                    <a className="footer-link-a" href="#">Instagram</a>
                                    <a className="footer-link-a" href="#">Viber</a>
                                </div>
                                <div className="footer-center-link-div-second">
                                    <a className="footer-link-a" href="#">Facebook</a>
                                    <a className="footer-link-a" href="#">Zalo</a>
                                    <a className="footer-link-a" href="#">Google</a>
                                    <a className="footer-link-a" href="#">Yahoo</a>
                                </div>
                            </div>
                            <div className="col-sm-12 col-xs-12 text-center">
                                <p className="copyright"> © 2019 UITHOMESTAY, chạm tới giấc mơ cửa bạn</p>
                            </div>
                        </div>
                        <div className="magic"></div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;