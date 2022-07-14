import React, { Component } from "react";
// import Hello from "./components/Hello"
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"
export default class App extends Component {
    state = {
        lists: [
            { id: 1, name: "吃饭", isSelect: false },
            { id: 2, name: "睡觉", isSelect: false },
            { id: 3, name: "打豆豆", isSelect: false },
        ]
    }
    // header 的输入框添加事件
    addHeaderData = (dataBoj) => {
        let { lists } = this.state
        let newArr = [dataBoj, ...lists]
        this.setState({ lists: newArr })
    }
    // 选项卡选项事件
    chengeIsSelect = (id, isSelect) => {
        let { lists } = this.state
        let newArr = lists.map(item => {
            if (item.id === id) {
                return { ...item, isSelect }
            } else {
                return item
            }
        })
        this.setState({
            lists: newArr
        })
    }
    // 删除当前选中的选项
    deleteSelect = (id) => {
        let { lists } = this.state
        let newArr = lists.filter(item => {
            return item.id !== id
        })
        console.log(newArr, 'newArr');
        this.setState({
            lists: newArr
        })
    }
    // 全选
    handleAllCheck = (isSelect) => {
        const { lists } = this.state
        let allArr = lists.map(item => {
            return { ...item, isSelect }
        })
        this.setState({ lists: allArr })
    }
    // 
    handleClearAll = () => {
        const { lists } = this.state
        let newArr = lists.filter(item => {
            return !item.isSelect
        })
        this.setState({
            lists: newArr
        })
    }
    render() {
        const { lists } = this.state
        return (
            <div className="main">
                {/* <Hello /> */}
                <Header addHeaderData={this.addHeaderData} />
                <List lists={lists} chengeIsSelect={this.chengeIsSelect} deleteSelect={this.deleteSelect} />
                <Footer lists={lists} handleAllCheck={this.handleAllCheck} handleClearAll={this.handleClearAll} />
            </div>
        )
    }
}