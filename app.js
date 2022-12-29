//노드 정예반 로그인 기능 실습
const express = require('express');
const app = express();
const port = 3000;

app.post('/login', (req,res) => {

    res.send('login api page')
})

app.post('/logout', (req,res) => {

    res.send('login api page')
})

app.post('/register', (req,res) => {

    res.send('register api page')
})

app.get('/users', (req,res) => {

    res.send('users api page')
})


app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요')
});

//login 이라는 post api routing
//logout라는 post api routing
//register라는 post api routing
//users라는 get api 