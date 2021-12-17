import React, { Component } from 'react';

class Event extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div key={this.props.index}>
                <td width="5%"><i class="fa fa-bell-o"></i></td>
                <td>{this.props.title}</td>
                <td class="level-right"><a class="button is-small is-primary" href="#">Action</a></td>
            </div>
        );
    }
}

export default Event;