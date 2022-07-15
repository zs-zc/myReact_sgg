import React, { Component } from 'react'
import { Switch, Route, } from "react-router-dom"
import About from "./pages/About"
import Home from './pages/Home'
import MyNavLink from './components/MyNavLink'
export default class App extends Component {
    render() {
        return (
            <div>
                <h2>router 跳转</h2>
                <div >
                    <MyNavLink to="/home" >Home</MyNavLink >
                    <MyNavLink to="/about" style={{ marginLeft: '10px' }}>About</MyNavLink>
                </div>
                <div>
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/home" component={Home} />
                        {/* xxx  为演示，组件已删除 */}
                    </Switch>
                </div>
            </div >

        )
    }
}
