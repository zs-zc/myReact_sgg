import React, { Component } from 'react'
import ProTypes from "prop-types"
import { nanoid } from 'nanoid'
import "./index.css"
export default class Header extends Component {

    // 对接收的prps进行：类型，必要性的限制
    static ProTypes = {
        addHeaderData: ProTypes.func.isRequired
    }
    // 按下回车事件
    handleDown = (e) => {
        if (e.keyCode !== 13) return
        if (e.target.value.trim() === '') {
            alert("不能为空！")
            return
        }
        this.props.addHeaderData({ id: nanoid(), name: e.target.value, isSelect: false })
        e.target.value = ''
    }
    render() {
        return (
            <div className='header'>
                <input type="text" onKeyDown={this.handleDown} placeholder='请输入任务名称，按回车' />
            </div>
        )
    }
}
