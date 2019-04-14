import React, {Component} from 'react';
import Bloghead from './blog_head/blog_head';
import Bloghead_one from './blog_head/blog_head_one';
import Bloghead_two from './blog_head/blog_head_two';


class Leftcolmain extends Component {
    render() {
        return (
            <div className="leftcolumn">
                <Bloghead_one title="Công bố trailer mới của Venom" signature="Hiếu Nguyễn, Sep 29, 2018" summary="Sony Pictures Entertainment vừa đăng tải trên channel Youtube của họ trailer mới nhất của bộ phim bom tấn sắp ra mắt, Venom..." img="/img/img_blog/blog1.jpg" link="/blog_one"/>

                <div className="text-center" style={{paddingTop: 20}}>
                    <div className="headdingGray"> <sup className="spainGray" style={{paddingRight: 20}}>________________</sup><i className="fa fa-heart-o" />
                        <sup className="spainGray" style={{paddingLeft: 20}}>________________</sup> </div>
                </div>

                <Bloghead_two title="Review Avengers: Infinity War: Sự thất bại của những anh hùng" signature="Hiếu Nguyễn, Sep 8, 2018" summary="Sau sự ra mắt cực kỳ thành công của Avengers: Infinity War, chúng ta hãy cùng nhìn lại xem điều gì làm bộ phim đặt biệt..." img="/img/img_blog/blog2.jpg" link="/blog_two"/>

                <div className="text-center" style={{paddingTop: 20}}>
                    <div className="headdingGray"> <sup className="spainGray" style={{paddingRight: 20}}>________________</sup><i className="fa fa-heart-o" />
                        <sup className="spainGray" style={{paddingLeft: 20}}>________________</sup> </div>
                </div>

                <Bloghead title="Những thứ có thể bạn chưa biết trong Avengers: Infinity War" signature="Hiếu Nguyễn, Aug 4, 2012" summary="Dưới đây chính là những tình tiết có lẽ bạn chưa biết về bom tấn siêu anh hùng lớn nhất năm Avengers: Infinity War..." img="/img/img_blog/blog3.jpg" link="#"/>

                <div className="text-center" style={{paddingTop: 20}}>
                    <div className="headdingGray"> <sup className="spainGray" style={{paddingRight: 20}}>________________</sup><i className="fa fa-heart-o" />
                        <sup className="spainGray" style={{paddingLeft: 20}}>________________</sup> </div>
                </div>

                <Bloghead title="Cable, hắn là ai?" signature="Hiếu Nguyễn, Sep 35, 2030" summary="Đến tận thời điểm này thì ai cũng biết kẻ phản diện trong “Deadpool 2” có tên là Cable. Nhưng câu hỏi đặt ra ở đây là, hắn thực sự là ai vậy?..." img="/img/img_blog/blog4.jpg" link="#"/>

                <div className="text-center" style={{paddingTop: 20}}>
                    <div className="headdingGray"> <sup className="spainGray" style={{paddingRight: 20}}>________________</sup><i className="fa fa-heart-o" />
                        <sup className="spainGray" style={{paddingLeft: 20}}>________________</sup> </div>
                </div>
            </div>
        );
    }
}

export default Leftcolmain;