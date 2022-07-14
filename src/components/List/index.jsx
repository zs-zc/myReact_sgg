import React, { Component } from 'react'
import "./index.css"
export default class List extends Component {
    render() {
        return (
            <div className="row">
                {
                    this.props.showData.map(item => {
                        return (
                            <div className='card' key={item.id}>
                                <a rel="noreferrer" href="https://github.com/reactjs" target="_blank">
                                    <img src="https://avatars.githubusercontent.com/u/6412038?v=3" alt="pic" style={{ width: '100px' }} />
                                </a>
                                <p className='card-text'>{item.node_id}</p>
                            </div>
                        )
                    })
                }
            </div>

        )
    }
}
