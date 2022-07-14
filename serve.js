const express = require("express")
// const cors = require("cors")  // 解决跨域
const app = express()

app.use((req, res, next) => {
    console.log('有人请求服务区1');
    next()
})
app.get("/students", (req, res) => {
    const students = [
        {
            id: 1, name: 'tom', age: 18
        },
        {
            id: 2, name: 'jack', age: 19
        }
        , {
            id: 3, name: 'toner', age: 20
        }
    ]
    res.send(students)
})
// app.use(cors())

app.listen(5000, err => {
    if (!err) console.log("serve is running success,http://localhost:5000/students")
})