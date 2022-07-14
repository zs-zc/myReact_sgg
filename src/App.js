import React, { Component } from 'react'
import Search from "./components/Search"
import List from './components/List'
export default class App extends Component {
    state = {
        showData: [
            // {
            //     id: 1,
            //     name: "0001",
            //     img: 'https://avatars.githubusercontent.com/u/6412038?v=3'
            // },
            // {
            //     id: 2,
            //     name: "0002",
            //     img: 'https://avatars.githubusercontent.com/u/6412038?v=3'
            // }, {
            //     id: 3,
            //     name: "0003",
            //     img: 'https://avatars.githubusercontent.com/u/6412038?v=3'
            // }
        ]
    }
    getData = (data) => {
        console.log(data, '获取到的data');
        this.setState({ showData: data })
    }
    render() {
        const { showData } = this.state
        return (
            <div>
                <Search getData={this.getData} />
                <List showData={showData} />
            </div>
        )
    }
}
