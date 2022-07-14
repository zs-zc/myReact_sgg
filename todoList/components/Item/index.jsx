import React, { Component } from 'react'
import ProTypes from "prop-types"
import "./index.css"
export default class Item extends Component {

    // 对接收的prps进行：类型，必要性的限制
    static ProTypes = {
        addHeaderData: ProTypes.func.isRequired
    }
    state = {
        mouse: false
    }

    // 鼠标移入移出事件
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }
    // 多选选项事件
    handleChange = (id) => {
        return (e) => {
            console.log(id, e.target.checked, 'e')
            this.props.chengeIsSelect(id, e.target.checked)
        }

    }
    btnDelete = (id) => {
        return () => {
            if (window.confirm('确认删除吗')) {
                this.props.deleteSelect(id)
            }
        }
        console.log("001")
    }
    render() {
        let { id, name, isSelect } = this.props
        return (
            <li style={{ backgroundColor: this.state.mouse ? '#ddd' : '#fff' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={isSelect} onChange={this.handleChange(id)} />
                    <span>{name}</span>
                </label>
                <button style={{ display: this.state.mouse ? 'block' : 'none' }} onClick={this.btnDelete(id)}>删除</button>
            </li>
        )
    }
}
