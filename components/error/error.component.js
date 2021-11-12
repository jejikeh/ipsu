import React, {Component } from 'react';
import { Text} from 'react-native';
import PropTypes from "prop-types";
import styles from "./error.component.style" 

class Error extends Component {
    render() {
        return (
            <Text styles = {styles}>Error :(</Text>
        )
    }
}

export default Error;