import React, { Component } from 'react'
import { Switch, NavLink, Route, Redirect } from "react-router-dom"
import About from "./pages/About"
import Home from './pages/Home'
export default class App extends Component {
    render() {
        return (
            <div>
                <h2>router 跳转</h2>
                <div >
                    <NavLink to="/home" >Home</NavLink>
                    <NavLink to="/about" style={{ marginLeft: '10px' }}>About</NavLink>
                </div>
                <div>
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/home" component={Home} />
                        <Redirect to='/about' />
                        {/* xxx  为演示，组件已删除 */}
                    </Switch>
                </div>
            </div >

        )
    }
}
