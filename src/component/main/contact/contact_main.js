import React, {Component} from 'react';
import Map from './contact_sub/map'
import Contactmail from './contact_sub/contactmail'
import Contactifo from './contact_sub/contactinfo'

class Contactmain extends Component {
    render() {
        return (
            <div className="bg1">
                <div className="fg">
            <div id="contact" className="container" style={{paddingLeft:"50px",paddingRight:"50px"}}>
                <div className="infobox" style={{marginTop:"50px", padding:"10px", borderRadius:0}}>
                <Map/>
                </div>

                <div className="infobox" style={{borderRadius:0, marginTop:"50px"}}>
                <div className="contact_content">
                    <div className="container">
                        <div className="col-lg-6">
                            <Contactmail/>
                        </div>
                        <div className="col-lg-6">
                            <Contactifo/>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                </div>
            </div>

        );
    }
}

export default Contactmain;