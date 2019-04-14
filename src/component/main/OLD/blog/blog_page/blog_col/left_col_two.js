import React, {Component} from 'react';

class Leftcoltwo extends Component {
    render() {
        return (
            <div className="leftcolumn">
                <div className="card">
                    <h3 className="bloghead">Review "Avengers: Infinity War": Sự thất bại của những anh hùng</h3>
                    <h6>Hiếu Nguyễn, Sep 8, 2018</h6>
                    <img src="../../../../../../../public/img/img_blog/blog2.jpg" alt="unavailable" width={520} height={300} />
                    <p style={{marginTop: 10}}>Sau sự ra mắt cực kỳ thành công của Avengers: Infinity War, chúng ta hãy cùng nhìn lại xem điều gì làm bộ phim đặt biệt.</p>
                    <p>Giờ, các bạn có lẽ sẽ nghĩ rằng "Vào trong này thì mình sẽ được thấy một bài review hoàn chỉnh". Nhưng không hề. Bởi lẽ người viết bài này thậm chí còn chưa xem qua phim.</p>
                    <br />
                    <p>Phải. Đây là cái mà họ gọi là "Click bait".</p>
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

export default Leftcoltwo;