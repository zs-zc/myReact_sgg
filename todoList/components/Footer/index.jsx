import React, { Component } from 'react'
import "./index.css"
export default class Footer extends Component {
    handleAll = (e) => {
        this.props.handleAllCheck(e.target.checked)
    }
    ClearAll = () => {
        this.props.handleClearAll()
    }
    render() {
        let { lists } = this.props
        //  已完成的个数
        const doneCount = lists.reduce((pre, list) => pre + (list.isSelect ? 1 : 0), 0)
        // 总数
        const total = lists.length
        return (
            <div className='footer'>
                <div className="flet">
                    <div >
                        <input type="checkbox" onChange={this.handleAll} checked={doneCount === total && total !== 0 ? true : false} className='checkBox' name="" id="" />
                    </div>
                    <div>
                        已完成<span>{doneCount}</span>/全部<span>{total}</span>
                    </div>

                </div>
                <div className="right">
                    <button onClick={this.ClearAll}>清除已完成的任务</button>
                </div>

            </div>
        )
    }
}