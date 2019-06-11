import React, {Component} from 'react';

class Contactmail extends Component {
    render() {
        return (
            <div>
                <div>
                    <div >
                        <h3>Hãy để lại lời nhắn cho chúng tôi</h3>
                        {/* Contact Us Form */}
                        <div style={{marginTop: 30}}>
                            <form id="reply_form" action="post">
                                <div style={{width: '100%'}}>
                                    <input id="contact_form_name" className="form-control contact_form_name" placeholder="Tên" required="required" data-error="Bắt buộc nhập tên" />
                                    <br />
                                    <input id="contact_form_email" className="form-control contact_form_email" placeholder="Email" required="required" data-error="Bắt buộc nhập email hợp lệ" />
                                </div>
                                <br />
                                <div>
                                    <textarea style={{padding: 8, width: '100%', height: 90, borderRadius: 5}} id="contact_form_message" className="text_field contact_form_message" name="message" placeholder="Message" required data-error="Please, write us a message." defaultValue={""} />
                                </div>
                                <br />
                                <div>
                                    {/* Submit*/}
                                    <button id="contact_form_submit" type="submit" className="btn btn-primary" value="Submit" style={{marginLeft: '54%', width: 200}}>Gửi</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contactmail;