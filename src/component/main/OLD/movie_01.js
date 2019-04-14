import React, {Component} from 'react';

class Movie_01 extends Component {
    render() {
        return (

            <div className="modal-dialog modal-lg">
                <div className="modal-content modal-button-video-bg">
                    <div className="modal-header">
                        <button type="button" className="close modal-button-video-close"
                                data-dismiss="modal">&times;</button>
                        <iframe width="860" height="515" src="https://www.youtube.com/embed/pzD9zGcUNrw"
                                frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen/>
                    </div>
                </div>
            </div>

        );
    }
}

export default Movie_01;