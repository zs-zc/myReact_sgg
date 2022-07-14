import React, { Component } from 'react'
import axios from "axios"
export default class App extends Component {
    getStudentData = () => {
        axios.get('http://localhost:3000/api1/students').then(res => {
            console.log(res, '获取到的数据');
        }, err => {
            console.log(err, 'err');
        })
    }
    getCarData = () => {
        axios.get('http://localhost:3000/api2/carData').then(res => {
            console.log(res, '获取到的数据');
        }, err => {
            console.log(err, 'err');
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>获取学生数据</button>
                <button onClick={this.getCarData}>获取骑车数据</button>
            </div>
        )
    }
}
