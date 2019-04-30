import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import RentalPhotoSelector from 'component/RentalPhotoSelector/';
import { fromJS } from 'immutable';

class ProfilePhoto extends Component {
    constructor(props) {
        super(props)
        let { input } = props;
        input = input.value || {};
        input = input.toJS ? input.toJS() : [];
        this.state = {
            images: [
                input[0] || {},
                input[1] || {},
                input[2] || {},
                input[3] || {},
                input[4] || {},
                input[5] || {}
            ]
        }
    }

    componentWillReceiveProps(newProps) {
        let { input } = newProps;
        input = input.value || {};
        input = input.toJS ? input.toJS() : [];

        let newstate = {
            images: [
                input[0] || {},
                input[1] || {},
                input[2] || {},
                input[3] || {},
                input[4] || {},
                input[5] || {}
            ]
        }
        if (!_.isEqual(newstate.images, this.state.images)) {
            this.setState(newstate);
        }
    }

    addItem = (value, key) => {
        console.log(value)
        let images = this.state.images;
        console.log(images)
        images[key] = {
            thumbSmall: value.imageUrl
        }
        this.setState({
            images
        });
        this.props.input.onChange(fromJS(images));
    }

    removeItem = (key) => {
        let images = this.state.images;
        images[key] = {
            thumbSmall: null
        }
        this.setState({
            images
        });
        this.props.input.onChange(fromJS(images));
    }
    render() {
        let photoSelectors = [];
        let images = this.state.images;

        for (let key in images) {
            if (images.hasOwnProperty(key)) {
                if(key > 0){
                photoSelectors.push(
                    <RentalPhotoSelector
                        className="photo-selector"
                        imageId={images[key].objectId}
                        imageUrl={images[key].thumbSmall}
                        addItem={(value) => { this.addItem(value, key); }}
                        removeItem={() => { this.removeItem(key); }}
                        frameKey={key}
                    />
                );
            }
            else {
                photoSelectors.push(
                    <RentalPhotoSelector
                        className="photo-selector-1"
                        imageId={images[key].objectId}
                        imageUrl={images[key].thumbSmall}
                        addItem={(value) => { this.addItem(value, key); }}
                        removeItem={() => { this.removeItem(key); }}
                        frameKey={key}
                    />
                );
            }
            }
        }
        return (
            <Fragment>
                <div className="row">
                    <div className="photo-selector-container col-sm-8 col-xs-12 col-md-8 col-xl-8">
                        {photoSelectors[0]}
                    </div>
                    <div className="photo-selector-container col-sm-8 col-xs-12 col-md-4 col-xl-4">
                        {photoSelectors[1]}
                        {photoSelectors[2]}
                    </div>
                </div>
                <div className="row">
                    <div className="photo-selector-container col-xs-4 col-md-4 col-xl-4">
                        {photoSelectors[3]}
                    </div>
                    <div className="photo-selector-container col-xs-4 col-md-4 col-xl-4">
                        {photoSelectors[4]}
                    </div>
                    <div className="photo-selector-container col-xs-4 col-md-4 col-xl-4">
                        {photoSelectors[5]}
                    </div>
                </div>
            </Fragment>
        );
    }
}

ProfilePhoto.propTypes = {
    input: PropTypes.any.isRequired,
    dateFormat: PropTypes.string,
    onChanged: PropTypes.func,
    selected: PropTypes.object,
    tag: PropTypes.array
};

export default ProfilePhoto;