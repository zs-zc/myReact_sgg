import axios from 'axios'
import React, { Component } from 'react'

export default class Search extends Component {
    handleSearch = () => {
        const { keyWord: { value: keyWord } } = this
        this.props.updateAppStatus({ isFirst: false, isLoading: true })
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(res => {
            console.log(res.data.items, '000');
            this.props.updateAppStatus({ isLoading: false, showData: res.data.items })
        },
            error => {
                this.props.updateAppStatus({ isLoading: false, err: error.message })
            })
    }
    render() {
        return (
            <div>
                <section>
                    <h3>Search Github USers</h3>
                    <div>
                        <input type="text" ref={c => this.keyWord = c} placeholder='enter the name you search' name="" id="" />&nbsp;<button onClick={this.handleSearch}>Search</button>
                    </div>
                </section>
            </div>
        )
    }
}
