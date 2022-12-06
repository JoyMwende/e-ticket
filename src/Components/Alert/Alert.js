import React from 'react'
import './Alert.css'

class Alert extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        if (!this.props.message) return "";
        return <div id="alert">{this.props.message}</div>
    }
}

export default Alert;