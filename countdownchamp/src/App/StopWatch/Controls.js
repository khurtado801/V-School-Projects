import React, { Component } from 'react';

class Controls extends Component {
    render() {
        return (
            <div className="controls">
                <div className="pull-left">
                    <button className={'btn btn-lap ' + (!this.props.is_running
                        ? 'hide'
                        : '')} onClick={this.props.lap}>
                        Lap
                    </button>
                    <button className={'btn btn-reset ' + (this.props.is_running
                        ? 'hide'
                        : '')} onClick={this.props.reset}>
                        Reset
                    </button>
                </div>
                <div className="pull-right">
                    <button className={'btn btn-start ' + (this.props.is_running
                        ? 'hide'
                        : '')} onClick={this.props.start}>
                        Start
                    </button>
                    <button className={'btn btn-stop ' + (!this.props.is_running
                        ? 'hide'
                        : '')} onClick={this.props.stop}>
                        Stop
                    </button>
                </div>
                <div className="clear"></div>
            </div>
        )
    }
}

export default Controls