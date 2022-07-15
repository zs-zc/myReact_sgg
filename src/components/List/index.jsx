import React, { Component } from 'react'
import "./index.css"
export default class List extends Component {
    render() {
        const { showData, isFirst, isLoading, err } = this.props
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎，请输入查询</h2> : isLoading ? <h2>Loading...</h2> : err ? <h2>errr</h2> :
                        showData.map(item => {
                            return (
                                <div className='card' key={item.id}>
                                    <a rel="noreferrer" href={item.html_url} target="_blank">
                                        <img src={item.avatar_url} alt="pic" style={{ width: '100px' }} />
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
