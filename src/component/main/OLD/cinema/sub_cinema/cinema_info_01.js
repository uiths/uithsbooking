import React, {Component} from 'react';

class Cinema_info_01 extends Component {
    render() {
        return (
            <div id="features" className="text-center ">
                <div className="container-fluid title_movie">
                    <h3 className="mg-0"><a href="#" className="btn active">THÔNG TIN RẠP</a></h3>
                </div>
                <div className="container-fluid fea-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9656.563754177629!2d106.69112691529742!3d11.029287055839886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d04135bcf1ff%3A0xf12909d370b95da7!2zxJBp4buHbiBCacOqbiBQaOG7pywgVHAuIFRo4bunIEThuqd1IE3hu5l0LCBCw6xuaCBExrDGoW5nLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1540605112628"
                        width="100%" height="450" frameBorder="0" style={{border:0}} allowFullScreen/>
                </div>
                <div className="container fea-container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h4><span className="spainBold">Địa chỉ:</span> 456,Điện Biên Phủ, Tân Uyên, Bình Dương</h4>
                            <h4><span className="spainBold">SDT của rạp:</span> +84 456 789</h4>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Cinema_info_01;