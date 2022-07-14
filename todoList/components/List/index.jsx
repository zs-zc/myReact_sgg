import React, { Component } from 'react'
import ProTypes from "prop-types"
import Item from "../Item"
import "./index.css"
export default class List extends Component {
    // 对接收的prps进行：类型，必要性的限制
    static ProTypes = {
        chengeIsSelect: ProTypes.func.isRequired,
        deleteSelect: ProTypes.func.isRequired,
        lists: ProTypes.array.isRequired
    }
    render() {
        let { lists, chengeIsSelect, deleteSelect } = this.props
        return (
            <div className='myLi'>
                {lists.map(item => {
                    return <Item key={item.id} {...item} chengeIsSelect={chengeIsSelect} deleteSelect={deleteSelect} />
                })}
            </div>
        )
    }
}