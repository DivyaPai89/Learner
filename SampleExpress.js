const express = require('express');

let app = express();

app.set('View','ejs');
app.use('/assets',express.static('assets'));

app.get('/home/:name',function(req,resp){
    let data = {age : 29,
        designation : 'Developer'};
    let hobbies = ['Travelling','Cycling','Fishing'];
    resp.render('index.ejs',{person : req.params.name,ageData:data,hobData:hobbies});
        
    });

app.listen(3000);