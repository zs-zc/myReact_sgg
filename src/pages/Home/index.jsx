import React, { Component } from 'react'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import Messages from './Messages'
import News from "./News"
export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavLink to="/home/news">news</NavLink>
                    <NavLink to="/home/messages" style={{ marginLeft: '10px' }}>message</NavLink>
                </div>
                <div>
                    <Switch>
                        <Route path="/home/news" component={News}></Route>
                        <Route path="/home/messages" component={Messages}></Route>
                        <Redirect to="/home/news" />
                    </Switch>
                </div>
            </div>
        )
    }
}
