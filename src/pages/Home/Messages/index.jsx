import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'
export default class Messages extends Component {
    state = {
        message: [
            {
                id: 1,
                title: '消息1',
            },
            {
                id: 2,
                title: '消息2',

            },
            {
                id: 3,
                title: '消息3',
            },
        ]
    }
    render() {
        const { message } = this.state
        return (
            <div>

                <ul>
                    {
                        message.map(item => {
                            return (
                                <Link key={item.id} to={`/home/messages/detail/${item.id}/${item.title}`}>{item.title}</Link>
                            )
                        })
                    }
                </ul>
                <hr />
                <Route path="/home/messages/detail/:id/:title" component={Detail}></Route>
            </div>

        )
    }
}
