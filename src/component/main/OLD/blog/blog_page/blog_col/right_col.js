import React, {Component} from 'react';

class Rightcol extends Component {
    render() {
        return (
            <div className="rightcolumn">
                <div className="card">
                    <h3 className="bloghead">Event</h3>
                    <div id="home" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators home-dot">
                            <li data-target="#home" data-slide-to={0} className="active" />
                            <li data-target="#home" data-slide-to={1} />
                            <li data-target="#home" data-slide-to={2} />
                        </ol>
                        <div className="carousel-inner text-center home-inner" role="listbox">
                            <div className="item active">
                                <img src="/img_blog/1.jpg" alt="Brandi Img 1" width="100%" />
                            </div>
                            <div className="item">
                                <img src="/img_blog/2.jpg" alt="Brandi Img 2" width="100%" />
                            </div>
                            <div className="item">
                                <img src="/img_blog/3.jpg" alt="Brandi Img 3" width="100%" />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="card">
                    <h3 className="bloghead">Popular Post</h3>
                    <div className="placeholder">Chưa có bài viết nào nổi bật</div><br />
                </div>
            </div>

        );
    }
}

export default Rightcol;