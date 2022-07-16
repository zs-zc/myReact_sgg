import React, { Component } from 'react'
import qs from "qs"
const detailData = [
    { id: "1", content: "11111111" },
    { id: "2", content: "22222222" },
    { id: "3", content: "3333333" },
]
export default class Detail extends Component {
    // ------------params--------------------------
    // render() {
    //     const { id, title } = this.props.match.params
    //     const findResult = detailData.find(detailObj => {
    //         return detailObj.id === id
    //     })
    //     return (
    //         <div>
    //             <ul>
    //                 <li>ID:{id}</li>
    //                 <li>TITLE:{title}</li>
    //                 <li>content:{findResult.content}</li>
    //             </ul>
    //         </div>
    //     )
    // }
    // -----------------------------------------------------
    // --------------------search----------------------------
    // render() {
    //     console.log(this.props);
    //     const { search } = this.props.location
    //     const { id, title } = qs.parse(search.slice(1))
    //     console.log(id, title, '000');
    //     const findResult = detailData.find(detailObj => {
    //         return detailObj.id === id
    //     })
    //     return (
    //         <div>
    //             <ul>
    //                 <li>ID:{id}</li>
    //                 <li>TITLE:{title}</li>
    //                 <li>content:{findResult.content}</li>
    //             </ul>
    //         </div>
    //     )
    // }
    // ------------------------state------------------------------
    render() {
        console.log(this.props);
        const { id, title } = this.props.location.state || {}
        console.log(id, title);
        const findResult = detailData.find(detailObj => {
            return detailObj.id === String(id)
        }) || {}
        return (
            <div>
                <ul>
                    <li>ID:{id}</li>
                    <li>TITLE:{title}</li>
                    <li>content:{findResult.content}</li>
                </ul>
            </div>
        )
    }
}
