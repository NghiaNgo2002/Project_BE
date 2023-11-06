var express = require('express');
var app = express();

//Các router
app.get('',function(req,res){
    res.send("Hello nodejs app");
})

// Nhận dữ liệu từ client gửi lên thông qua phương thức post 
app.post('/register', function(req,res){
    res.send("Hello register post")
})

// Nhận dữ liệu từ client gửi lên thông qua phương thức put
app.put('/update', function(req,res){
    res.send("Hello update post")
})


// Nhận dữ liệu từ client gửi lên thông qua phương thức delete
app.delete('/delete', function(req,res){
    res.send("Hello delete post")
})

//Mở cổng server
app.listen(3000,function(){

});

