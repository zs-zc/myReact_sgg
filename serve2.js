const express = require("express")
const app = express()

app.use((req, res, next) => {
    console.log('有人请求服务区2');
    next()
})
app.get("/carData", (req, res) => {
    const cardata = [
        {
            id: 1, name: '奔驰'
        },
        {
            id: 2, name: '五菱'
        }
        , {
            id: 3, name: '野马'
        }
    ]
    res.send(cardata)
})

app.listen(5001, err => {
    if (!err) console.log("serve is running success,http://localhost:5001/carData")
})