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
                                // <Link key={item.id} to={`/home/messages/detail/${item.id}/${item.title}`}>{item.title}</Link> // params传参必须有接收
                                <Link key={item.id} to={`/home/messages/detail?id=${item.id}&title=${item.title}`}>{item.title}</Link>  // search不能接收
                            )
                        })
                    }
                </ul>
                <hr />
                {/*  params传参必须有接收,一下就是接收，但是search不能接收 */}
                {/* <Route path="/home/messages/detail/:id/:title" component={Detail}></Route> */}
                <Route path="/home/messages/detail" component={Detail}></Route>

            </div>

        )
    }
}
