//노드 정예반 로그인 기능 실습
const express = require('express');
const cookieParser = require('cookie-parser');
const cookie = require('cookie')

const app = express();
app.use(cookieParser());

app.use(express.json())
const port = 3000;

const users = [
    { name: "가나다", id: "abc", password: "1234" },
    { name: "라마바", id: "def", password: "5678" },
    { name: "사아자", id: "ghi", password: "9012" },
]

app.post('/login', (req, res) => {
    const id = req.body.id
    const password = req.body.password
    const user = users.find(user => user, id === id && user.password === password)

    if (!user) {
        return res.send('who are you?')
    }
    console.log("header", 'user_id = ${user.id}')
    res.writehead(200, {
        "Set-cookie": ['user_id = ${user.id}']
    })

    res.send('login api page')
})

app.post('/logout', (req, res) => {

    res.send('login api page')
})

app.post('/register', (req, res) => {

    res.send('register api page')
})

app.get('/users', (req, res) => {
    console.log(req.cookies.test)
    console.log(req.cookies.test)
    res.send('users api page')
})


app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요')
});

//login 이라는 post api routing
//logout라는 post api routing
//register라는 post api routing
//users라는 get api 