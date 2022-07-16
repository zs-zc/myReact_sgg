import React, { Component } from 'react'

export default class News extends Component {
    componentDidMount() {
        setInterval(() => {
            this.props.history.push("/home/messages")
        }, 2000)
    }
    render() {
        return (
            <div>
                news
            </div>
        )
    }
}
