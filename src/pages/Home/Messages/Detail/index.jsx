import React, { Component } from 'react'
const detailData = [
    { id: "1", content: "11111111" },
    { id: "2", content: "22222222" },
    { id: "3", content: "3333333" },
]
export default class Detail extends Component {

    render() {
        const { id, title } = this.props.match.params
        const findResult = detailData.find(detailObj => {
            return detailObj.id === id
        })
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
