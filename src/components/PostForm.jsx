import React from 'react';
import { withRouter } from 'react-router-dom';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { NotificationManager } from 'react-notifications';
import { serviceConfig } from '../appSettings';
import _ from 'lodash';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageFile: null
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const { id, value, type } = e.target;
        this.setState({ [id]: value });
        if (type === 'file') {
            this.readFile(e.target.files[0]);
        }
    }
    readFile(file) {
        const _this = this;
        const reader = new FileReader();
        reader.onload = function () {
            const arrayBuffer = reader.result;
            if (arrayBuffer) {
                const byteArray = new Uint8Array(arrayBuffer);
                const array = _.map(byteArray, (i) => i);
                _this.setState({ imageFile: array, loaded: true });
            }
        };
        reader.readAsArrayBuffer(file);
    }
    render() {
        return (
            <div>
                Hello Post Form!!!
            </div>
        );
    }
}
export default withRouter(PostForm);