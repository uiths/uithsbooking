import React, {Component} from 'react';
import Map from './contact_sub/map'
import Contactmail from './contact_sub/contactmail'
import Contactifo from './contact_sub/contactinfo'

class Contactmain extends Component {
    render() {
        return (
            <div id="contact" className="container-fluid">
                <div className="contact_box">
                <Map/>

                <div className="text-center" style={{paddingTop: 20}}>
                    <div className="headdingGray"> <sup className="spainGray" style={{paddingRight: 20}}>________________</sup><i className="fa fa-heart-o" />
                        <sup className="spainGray" style={{paddingLeft: 20}}>________________</sup> </div>
                </div>

                <div className="contact_content">
                    <div className="container">
                        <div className="row">
                            <Contactmail/>
                            <Contactifo/>
                        </div>
                    </div>
                </div>
                </div>

                    <div className='ripple-background'>
                        <div className='circle xxlarge shade1'></div>
                        <div className='circle xlarge shade2'></div>
                        <div className='circle large shade3'></div>
                        <div className='circle mediun shade4'></div>
                        <div className='circle small shade5'></div>
                    </div>
                </div>

        );
    }
}

export default Contactmain;