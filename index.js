const express=require('express');
const app= express();
const path=require('path');
const fs=require('fs');
const childProcess=require('child_process');

app.get('/search', (req,res,next)=>{
const {q,file,mode}=req.query;
if (mode==='read'){
if (file.indexOf('./')===-1){
file_contents=fs.readFileSync(path.join(__dirname,'searchable',req.query.file));
if (file_contents.indexOf(q))
}
}
});
