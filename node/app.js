const express = require ('express')
var app=express()

app.get('/',(req,res)=>{
    res.send('hellow')
})

app.get('/home',(req,res)=>{
    res.send('i am from india')
})
app.get('/contact',(req,res)=>{
    res.send ('<h1 style ="color:red"><marquee>I am from kerala, kollam</h1>')
})
app.listen(3000,()=>{
    console.log('started on http://localhost:3000')
})