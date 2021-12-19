import React, { Component } from 'react';

class LeftBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div key={this.props.index}>
                <li><a>{this.props.list}</a></li>
            </div>
        )
    }
};

export default LeftBar;