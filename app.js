const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const multer = require('multer');
const uuid = require('uuid');

//express init
const app = express();

//view ejs
app.set('view engine','ejs');

//static folder
app.use(express.static(path.join(__dirname,'public')));

//index 
app.get('/',(req,res)=>{
  res.render('index');
})

//multer storage
const storage = multer.diskStorage({
  //file upload dir name
  destination:'./public/upload/',
  //fileupload name
  filename:(req,file,cb)=>{
    //i used uuid module
    //you can seen '12233444.mp4'
    cb(null,`${uuid.v4()}${path.extname(file.originalname)}`);
  }
})

//#for single file
//const upload = multer({storage}).single('file');

//multiple file
const upload = multer({storage}).array('file');


//client upload
app.post('/upload',(req,res)=>{
  upload(req,res,(err)=>{
    if(err){
      res.status(400).send(err)
    }else{
      //send client
      res.send(req.files)
    }
  })
})


//server
app.listen(3000,()=> console.log('server is running on port 3000'));

