import React, { Component } from 'react';

class TopBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div key={this.props.index}>
                <a class="navbar-item" href="admin.html">
                    {this.props.link}
                </a>
            </div>
        )
    }
}

export default TopBar;