import React, { Component } from 'react'

export default class CursorImg extends Component {
    render() {
        return (
            <div className="cursor">
                <div className="cursor-media">
                <svg height="100" width="100">
                    <circle cx="50" cy="50" r="40" stroke-width="3" fill="#000000" opacity="0.85"/>
                </svg>
                </div>
            </div>
        )
    }
}
