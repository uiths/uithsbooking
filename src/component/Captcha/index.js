import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha'
class Captcha extends Component {
    constructor(props, context) {
        super(props, context);
       
    }

    componentDidMount() {
        if (this.captchaDemo) {
            this.captchaDemo.reset();
        }
    }

    onLoadRecaptcha = () =>{
        if (this.captchaDemo) {
            this.captchaDemo.reset();
        }
    }

    verifyCallback = (recaptchaToken) => {
        this.props.input.onChange(recaptchaToken)
    }
    expiredCallback =(recaptchaToken) =>{
        this.props.input.onChange(recaptchaToken)
    }
    render() {
        
        return (
            <div>
                {/* You can replace captchaDemo ref with whatever works for your component */}
                <Recaptcha
                    ref={(el) => { this.captchaDemo = el; }}
                    size="normal"
                    render="explicit"
                    sitekey="6LesUKQUAAAAABp7KjBQ99GmjvNcKCyijdhcN5jC"
                    onloadCallback={this.onLoadRecaptcha}
                    verifyCallback={this.verifyCallback}
                    expiredCallback={this.expiredCallback}
                />
            </div>
        );
    };
};

export default Captcha;