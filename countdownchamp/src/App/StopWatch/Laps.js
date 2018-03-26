import React, { Component } from 'react'

class Laps extends Component {
    render() {
        return (
            <div className="laps">
                {
                    this.props.laps.map((lap, index) => {
                        return (
                            <div className={
                                "lap" +
                                (this.props.slowest_lap.number === lap.number && this.props.laps.length > 3 ? " slowest " : "") +
                                (this.props.fastest_lap.number === lap.number && this.props.laps.length > 3 ? " fastest " : "")
                            }>
                                <div className="pull-left">
                                    Lap {lap.number}
                                </div>
                                <div className="pull-right">
                                    {index === 0 ? this.props.sub_string : lap.string}
                                </div>
                                <div className="clear"></div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Laps