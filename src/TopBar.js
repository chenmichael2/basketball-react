import React, { Component } from 'react';

class TopBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <a class="navbar-item" href="admin.html" key={this.props.index}>
                    {this.props.link}
                </a>
        )
    }
}

export default TopBar;