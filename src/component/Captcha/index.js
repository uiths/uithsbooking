import React, { Component } from 'react';
import { ReCaptcha } from 'react-recaptcha-google'

class Captcha extends Component {
    constructor(props, context) {
        super(props, context);
        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
    }

    componentDidMount() {
        
        if (this.captchaDemo) {
            console.log("started, just a second...")
            this.captchaDemo.reset();
        }
    }

    onLoadRecaptcha() {
        if (this.captchaDemo) {
            this.captchaDemo.reset();
        }
    }

    verifyCallback(recaptchaToken) {
        // Here you will get the final recaptchaToken!!!  
        console.log(recaptchaToken, "<= your recaptcha token")
    }

    render() {
        return (
            <div>
                {/* You can replace captchaDemo ref with whatever works for your component */}
                <ReCaptcha
                    ref={(el) => { this.captchaDemo = el; }}
                    size="normal"
                    render="explicit"
                    sitekey="6LcAUKQUAAAAAJUlKkgBjQPO-DdOm4dMg-4bIaQf"
                    onloadCallback={this.onLoadRecaptcha}
                    verifyCallback={this.verifyCallback}
                />
            </div>
        );
    };
};

export default Captcha;