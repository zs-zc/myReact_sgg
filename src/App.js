import React, { Component } from 'react'
import Search from "./components/Search"
import List from './components/List'
export default class App extends Component {
    state = {
        showData: [],
        isFirst: true,
        isLoading: false,
        err: ''
    }
    // getData = (data) => {
    //     console.log(data, '获取到的data');
    //     this.setState({ showData: data })
    // }
    updateAppStatus = (objData) => {
        this.setState(objData)
    }
    render() {
        const { showData } = this.state
        return (
            <div>
                <Search updateAppStatus={this.updateAppStatus} />
                <List {...this.state} />
            </div>
        )
    }
}
