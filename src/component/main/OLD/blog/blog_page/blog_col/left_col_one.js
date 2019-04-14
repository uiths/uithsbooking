import React, {Component} from 'react';

class Leftcolone extends Component {
    render() {
        return (
            <div className="leftcolumn">
                <div className="card">
                    <h3 className="bloghead">Công bố trailer mới của Venom</h3>
                    <h6>Hiếu Nguyễn, Sep 29, 2018</h6>
                    <img src="../../../../../../../public/img/img_blog/blog1.jpg" alt="unavailable" width={520} height={300} />
                    <p style={{marginTop: 10}}>Sony Pictures Entertainment vừa đăng tải trên channel Youtube của họ trailer mới nhất của bộ phim bom tấn sắp ra mắt, Venom.</p>
                    <iframe width={560} height={315} src="https://www.youtube.com/embed/xLCn88bfW1o" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen />
                    <br />
                    <p>Nam diễn viên Tom Hardy sẽ thủ vai chính, Eddie Brock/Venom. Bộ phim hứa hẹn sẽ mang đến cho khán giả nhiều pha hành động nghẹt thở. Hãy đón xem.</p>
                    <p>Phim sẽ được khởi chiếu tại cụm rạp UITCinema vào ngày 5/10 sắp tới.</p>
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
                <div className="text-center" style={{paddingTop: 20}}>
                    <div className="headdingGray"> <sup className="spainGray" style={{paddingRight: 20}}>________________</sup><i className="fa fa-heart-o" />
                        <sup className="spainGray" style={{paddingLeft: 20}}>________________</sup> </div>
                </div>
                <div className="card">
                    <h3 className="bloghead">Comments</h3>
                    <br />
                    <textarea rows={4} cols={95} style={{padding: 10}} defaultValue={"Write your thoughts"} />
                    <br />
                    <button type="submit" className="button button1" style={{marginLeft: 790}}>Comment</button>
                </div>
            </div>
        );
    }
}

export default Leftcolone;